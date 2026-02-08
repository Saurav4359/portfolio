import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  mouseX: number;
  mouseY: number;
}

export function Puppy3DModel({ mouseX, mouseY }: Props) {
  const groupRef = useRef<THREE.Group>(null!);
  const targetRef = useRef(new THREE.Vector3(0, 0, 0));
  const posRef = useRef(new THREE.Vector3(0, 0, 0));
  const velRef = useRef(new THREE.Vector3(0, 0, 0));
  const isMovingRef = useRef(false);

  // Leg refs for walk animation
  const flRef = useRef<THREE.Mesh>(null!);
  const frRef = useRef<THREE.Mesh>(null!);
  const blRef = useRef<THREE.Mesh>(null!);
  const brRef = useRef<THREE.Mesh>(null!);
  const tailRef = useRef<THREE.Mesh>(null!);
  const tongueRef = useRef<THREE.Mesh>(null!);
  const earLRef = useRef<THREE.Mesh>(null!);
  const earRRef = useRef<THREE.Mesh>(null!);

  const { viewport } = useThree();

  // Materials
  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#c8915a"),
        roughness: 0.85,
        metalness: 0.0,
      }),
    []
  );
  const darkMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#8b5e3c"),
        roughness: 0.9,
      }),
    []
  );
  const noseMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#2a1a0e"),
        roughness: 0.4,
        metalness: 0.1,
      }),
    []
  );
  const eyeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#1a0e05"),
        roughness: 0.2,
        metalness: 0.3,
      }),
    []
  );
  const eyeWhiteMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffffff"),
        roughness: 0.3,
      }),
    []
  );
  const tongueMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e86b6b"),
        roughness: 0.6,
      }),
    []
  );
  const bellyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e8c88a"),
        roughness: 0.9,
      }),
    []
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Convert screen coords to world coords
    const nx = (mouseX / window.innerWidth) * 2 - 1;
    const ny = -(mouseY / window.innerHeight) * 2 + 1;
    targetRef.current.set(
      nx * (viewport.width / 2),
      Math.max(ny * (viewport.height / 2), -viewport.height / 2 + 0.5),
      0
    );

    const pos = posRef.current;
    const target = targetRef.current;
    const dir = new THREE.Vector3().subVectors(target, pos);
    const dist = dir.length();

    const isMoving = dist > 0.3;
    isMovingRef.current = isMoving;

    if (isMoving) {
      dir.normalize();
      const speed = Math.min(dist * 4, 14) * delta;
      velRef.current.lerp(dir.multiplyScalar(speed), 0.25);
    } else {
      velRef.current.multiplyScalar(0.85);
    }

    pos.add(velRef.current);
    groupRef.current.position.copy(pos);

    // Face direction of movement
    if (isMoving && Math.abs(velRef.current.x) > 0.01) {
      const angle = Math.atan2(velRef.current.x, 0.5);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        -angle,
        0.15
      );
    } else {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.05
      );
    }

    const t = state.clock.elapsedTime;

    // Idle breathing
    if (!isMoving) {
      groupRef.current.position.y =
        pos.y + Math.sin(t * 1.5) * 0.04;
    }

    // Leg animation
    const legSwing = isMoving ? Math.sin(t * 12) * 0.4 : 0;
    if (flRef.current) flRef.current.rotation.x = legSwing;
    if (brRef.current) brRef.current.rotation.x = legSwing;
    if (frRef.current) frRef.current.rotation.x = -legSwing;
    if (blRef.current) blRef.current.rotation.x = -legSwing;

    // Tail wag
    if (tailRef.current) {
      const wagSpeed = isMoving ? 14 : 3;
      const wagAmp = isMoving ? 0.6 : 0.3;
      tailRef.current.rotation.z = Math.sin(t * wagSpeed) * wagAmp;
    }

    // Tongue
    if (tongueRef.current) {
      tongueRef.current.visible = isMoving;
      if (isMoving) {
        tongueRef.current.scale.y = 1 + Math.sin(t * 8) * 0.2;
      }
    }

    // Ear flop
    if (earLRef.current) {
      earLRef.current.rotation.z = isMoving
        ? Math.sin(t * 10) * 0.15 - 0.2
        : Math.sin(t * 2) * 0.05 - 0.15;
    }
    if (earRRef.current) {
      earRRef.current.rotation.z = isMoving
        ? Math.sin(t * 10 + 1) * 0.15 + 0.2
        : Math.sin(t * 2 + 1) * 0.05 + 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={0.22}>
      {/* Body */}
      <mesh material={bodyMat} position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.7, 24, 24]} />
        <mesh scale={[1, 1, 1.3]} />
      </mesh>
      {/* Body stretch */}
      <mesh material={bodyMat} position={[0, 0.6, -0.1]}>
        <capsuleGeometry args={[0.55, 0.6, 16, 16]} />
      </mesh>
      {/* Belly */}
      <mesh material={bellyMat} position={[0, 0.35, 0.3]}>
        <sphereGeometry args={[0.45, 16, 16]} />
      </mesh>

      {/* Head */}
      <group position={[0, 1.35, 0.45]}>
        <mesh material={bodyMat}>
          <sphereGeometry args={[0.5, 24, 24]} />
        </mesh>
        {/* Snout */}
        <mesh material={bodyMat} position={[0, -0.1, 0.4]}>
          <sphereGeometry args={[0.25, 16, 16]} />
        </mesh>
        {/* Nose */}
        <mesh material={noseMat} position={[0, -0.02, 0.6]}>
          <sphereGeometry args={[0.1, 12, 12]} />
        </mesh>

        {/* Eyes */}
        <group position={[-0.18, 0.1, 0.35]}>
          <mesh material={eyeWhiteMat}>
            <sphereGeometry args={[0.1, 12, 12]} />
          </mesh>
          <mesh material={eyeMat} position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.06, 10, 10]} />
          </mesh>
          {/* Eye shine */}
          <mesh position={[0.02, 0.03, 0.1]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </group>
        <group position={[0.18, 0.1, 0.35]}>
          <mesh material={eyeWhiteMat}>
            <sphereGeometry args={[0.1, 12, 12]} />
          </mesh>
          <mesh material={eyeMat} position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.06, 10, 10]} />
          </mesh>
          <mesh position={[0.02, 0.03, 0.1]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </group>

        {/* Ears */}
        <mesh ref={earLRef} material={darkMat} position={[-0.35, 0.35, 0]}>
          <capsuleGeometry args={[0.12, 0.3, 8, 8]} />
        </mesh>
        <mesh ref={earRRef} material={darkMat} position={[0.35, 0.35, 0]}>
          <capsuleGeometry args={[0.12, 0.3, 8, 8]} />
        </mesh>

        {/* Tongue */}
        <mesh ref={tongueRef} material={tongueMat} position={[0, -0.25, 0.45]}>
          <capsuleGeometry args={[0.06, 0.15, 8, 8]} />
        </mesh>
      </group>

      {/* Legs */}
      <mesh ref={flRef} material={bodyMat} position={[-0.3, 0.0, 0.3]}>
        <capsuleGeometry args={[0.12, 0.5, 8, 8]} />
      </mesh>
      <mesh ref={frRef} material={bodyMat} position={[0.3, 0.0, 0.3]}>
        <capsuleGeometry args={[0.12, 0.5, 8, 8]} />
      </mesh>
      <mesh ref={blRef} material={bodyMat} position={[-0.3, 0.0, -0.4]}>
        <capsuleGeometry args={[0.12, 0.5, 8, 8]} />
      </mesh>
      <mesh ref={brRef} material={bodyMat} position={[0.3, 0.0, -0.4]}>
        <capsuleGeometry args={[0.12, 0.5, 8, 8]} />
      </mesh>

      {/* Paws */}
      {[[-0.3, -0.35, 0.3], [0.3, -0.35, 0.3], [-0.3, -0.35, -0.4], [0.3, -0.35, -0.4]].map((p, i) => (
        <mesh key={i} material={darkMat} position={p as [number, number, number]}>
          <sphereGeometry args={[0.14, 10, 10]} />
        </mesh>
      ))}

      {/* Tail */}
      <mesh ref={tailRef} material={darkMat} position={[0, 1.0, -0.7]} rotation={[0.5, 0, 0]}>
        <capsuleGeometry args={[0.08, 0.5, 8, 8]} />
      </mesh>
    </group>
  );
}
