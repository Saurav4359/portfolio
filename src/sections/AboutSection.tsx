import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-mono text-sm text-primary mb-2">// about</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {siteData.about.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono text-sm text-primary mb-4">values</h3>
            <ul className="space-y-3">
              {siteData.about.values.map((v) => (
                <li
                  key={v}
                  className="text-sm text-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5">→</span>
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
