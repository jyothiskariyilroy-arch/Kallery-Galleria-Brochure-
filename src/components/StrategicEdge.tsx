"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const edges = [
  {
    icon: "◈",
    title: "Main Road Visibility",
    lines: ["Direct arterial frontage", "Puthenthodu junction", "Zero blind-spot positioning"],
  },
  {
    icon: "◉",
    title: "Ample Parking",
    lines: ["Spacious parking compound", "Rare at this scale", "Essential for high-footfall tenants"],
  },
  {
    icon: "◍",
    title: "Fully Ready Asset",
    lines: ["All permits cleared", "Electricity + water live", "Fire safety certified"],
  },
  {
    icon: "◎",
    title: "Transport Node",
    lines: ["Adjacent to bus stop", "Limited-stop & ordinary buses", "High daily commuter volume"],
  },
  {
    icon: "◆",
    title: "12,000 Sq Ft Scale",
    lines: ["Rare single-asset at this size", "Entire building under one title", "No comparable within 3 km"],
  },
  {
    icon: "◇",
    title: "30-Cent Land",
    lines: ["Significant land holding", "Appreciation-backed investment", "Expansion potential"],
  },
];

export default function StrategicEdge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header — asymmetric */}
        <div className="mb-20 max-w-xl">
          <motion.p
            className="label mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          >
            Strategic Edge
          </motion.p>
          <motion.h2
            className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          >
            Six reasons
            <br />
            this asset
            <br />
            <span className="gold-shimmer">outperforms.</span>
          </motion.h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {edges.map((edge, i) => (
            <motion.div
              key={edge.title}
              className="glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ minHeight: i % 3 === 1 ? "220px" : "180px" }}
            >
              <div className="text-gold/50 text-2xl mb-5 group-hover:text-gold transition-colors duration-300">
                {edge.icon}
              </div>
              <h3 className="font-cormorant text-2xl text-ivory/90 mb-4 leading-tight">
                {edge.title}
              </h3>
              <ul className="space-y-1">
                {edge.lines.map((line) => (
                  <li key={line} className="text-xs text-ivory/35 font-dm flex items-start gap-2">
                    <span className="text-gold/30 mt-0.5">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
