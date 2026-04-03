"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">

      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Kallery Galleria"
          fill
          priority
          className="object-cover object-center"
          onError={(e) => {
            // Fallback if image not yet uploaded
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback gradient when no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-950 via-obsidian-900 to-obsidian-800" />
      </div>

      {/* ── Cinematic Overlays ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian-950/60 via-obsidian-950/40 to-obsidian-950/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian-950/30 via-transparent to-obsidian-950/30" />

      {/* ── Grid Pattern ── */}
      <div className="absolute inset-0 z-10 grid-bg opacity-30" />

      {/* ── Ambient Gold Glow ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Center Glass Panel ── */}
      <motion.div
        className="relative z-20 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Label */}
        <motion.p
          className="label mb-8 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Puthenthodu, Karuvannur · Irinjalakuda, Thrissur
        </motion.p>

        {/* Property Name */}
        <motion.h1
          className="font-cormorant font-light text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gold-shimmer">Kallery</span>
          <br />
          <span className="text-ivory/90">Galleria</span>
        </motion.h1>

        {/* Hero Line */}
        <motion.p
          className="font-cormorant text-2xl md:text-3xl text-ivory/60 font-light mt-6 mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Commercial scale. Prime frontage. Ready to operate.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          className="glass rounded-2xl p-6 mb-10 grid grid-cols-3 gap-0 divide-x divide-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="px-6 text-center">
            <p className="gold-shimmer font-cormorant text-4xl md:text-5xl font-medium leading-none">12,000</p>
            <p className="label mt-2 opacity-60">Sq Ft Built-up</p>
          </div>
          <div className="px-6 text-center">
            <p className="gold-shimmer font-cormorant text-4xl md:text-5xl font-medium leading-none">30</p>
            <p className="label mt-2 opacity-60">Cents Land</p>
          </div>
          <div className="px-6 text-center">
            <p className="gold-shimmer font-cormorant text-4xl md:text-5xl font-medium leading-none">Ready</p>
            <p className="label mt-2 opacity-60">To Operate</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="tel:+919495040824" className="btn-gold">
            Schedule Site Visit
          </a>
          <a href="#investment" className="btn-outline-gold">
            View Investment Details
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <p className="label opacity-40">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
