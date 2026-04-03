"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const signals = [
  {
    no: "01",
    headline: "One asset. One owner.",
    body: "No comparable 12,000 sq ft commercial block exists within 3 km. This is not a unit in a complex — it is the building.",
  },
  {
    no: "02",
    headline: "Irinjalakuda is expanding.",
    body: "Infrastructure investment, population growth, and retail penetration are accelerating. Commercial rents are tracking upward.",
  },
  {
    no: "03",
    headline: "Ready now. Not someday.",
    body: "Permits cleared. Utilities active. No construction lag. Every month of delay is revenue not generated.",
  },
];

export default function Urgency() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 bg-obsidian-900 overflow-hidden">

      {/* Ambient center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <motion.p
              className="label mb-8"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            >
              Why Now
            </motion.p>
            <motion.h2
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            >
              Supply is
              <br />
              limited.
              <br />
              <span className="gold-shimmer">Demand is not.</span>
            </motion.h2>

            <motion.div
              className="mt-16 glass-gold rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <p className="font-cormorant text-3xl text-ivory/80 font-light leading-snug mb-4">
                "The right commercial asset in this corridor doesn't come twice."
              </p>
              <p className="label opacity-30">Commercial real estate · Thrissur district</p>
            </motion.div>
          </div>

          {/* Right: signals */}
          <div className="space-y-6">
            {signals.map((s, i) => (
              <motion.div
                key={s.no}
                className="glass rounded-xl p-8 border-l-2 border-gold/30"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 * i + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-4 items-start">
                  <span className="font-mono text-[0.6rem] text-gold/40 mt-1 shrink-0">{s.no}</span>
                  <div>
                    <h3 className="font-cormorant text-2xl text-ivory/90 mb-3">{s.headline}</h3>
                    <p className="text-sm text-ivory/35 font-dm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
