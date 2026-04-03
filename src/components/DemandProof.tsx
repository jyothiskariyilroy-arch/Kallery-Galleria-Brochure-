"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50,000+", label: "Population Radius", sub: "5 km catchment, Irinjalakuda core" },
  { value: "₹3.5L", label: "Monthly Lease Potential", sub: "Market-validated rental income" },
  { value: "10 Yr", label: "Lock-in Available", sub: "Long-term tenant security" },
  { value: "1", label: "Asset of This Scale", sub: "No comparable supply nearby" },
];

export default function DemandProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-obsidian-900">

      {/* Top gold line */}
      <div className="gold-line mb-0" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <motion.p
            className="label mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          >
            Demand Proof
          </motion.p>
          <motion.h2
            className="font-cormorant text-5xl md:text-6xl font-light"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          >
            The numbers speak.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-gold rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="gold-shimmer font-cormorant text-4xl md:text-5xl font-medium leading-none mb-3">
                {s.value}
              </p>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-gold/70 mb-2">
                {s.label}
              </p>
              <p className="text-xs text-ivory/30 leading-relaxed">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra proof line */}
        <motion.div
          className="mt-16 glass rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <p className="font-cormorant text-2xl md:text-3xl text-ivory/60 font-light italic">
            "Irinjalakuda is one of the fastest-growing commercial corridors in central Kerala."
          </p>
          <p className="label mt-3 opacity-40">Market observation · Thrissur district</p>
        </motion.div>
      </div>

      <div className="gold-line mt-0" />
    </section>
  );
}
