import { Canvas } from "@react-three/fiber";
import { useMousePosition } from "@/hooks/useMousePosition";
import { Puppy3DModel } from "./Puppy3DModel";

export function CursorPuppy() {
  const mouse = useMousePosition();

  return (
    <div
      className="fixed inset-0 z-30 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{ pointerEvents: "none" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#88aaff" />
        <pointLight position={[0, 2, 4]} intensity={0.3} color="#ffddaa" />
        <Puppy3DModel mouseX={mouse.x} mouseY={mouse.y} />
      </Canvas>
    </div>
  );
}
