"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const floors = [
  {
    id: "ground",
    label: "Ground Floor",
    tag: "Street Level",
    area: "~4,000 sq ft",
    height: "High",
    best: "Retail · Supermarket · Showroom · Bank",
    images: images.groundFloor,
    description: "Maximum footfall. Direct street access. Highest commercial velocity. Built for volume operations.",
  },
  {
    id: "first",
    label: "1st Floor",
    tag: "First Level",
    area: "~4,000 sq ft",
    height: "Standard",
    best: "Healthcare · Diagnostics · Restaurant · Gym",
    images: images.firstFloor,
    description: "Lift + staircase access. Open floor plate. Ideal for service businesses requiring flow and space.",
  },
  {
    id: "second",
    label: "2nd Floor",
    tag: "Second Level",
    area: "~4,000 sq ft",
    height: "Standard",
    best: "Office · Training Institute · Corporate HQ",
    images: images.secondFloor,
    description: "Quieter elevation. Professional ambience. Suited to businesses prioritising focus over footfall.",
  },
  {
    id: "third",
    label: "3rd Floor",
    tag: "Top Level",
    area: "~Varies",
    height: "Rooftop access",
    best: "F&B · Event Space · Premium Office",
    images: images.thirdFloor,
    description: "Top-level exclusivity. Panoramic views. Premium positioning for premium operations.",
  },
];

// Placeholder component when image is not yet uploaded
function FloorImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-3">
        <div className="text-gold/20 text-4xl">◈</div>
        <p className="label opacity-20 text-center px-4">Image coming soon</p>
        <p className="text-[0.55rem] text-ivory/15 font-mono text-center px-4">{src}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}

export default function FloorBreakdown() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFloor, setActiveFloor] = useState(0);

  return (
    <section ref={ref} id="floors" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="label mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          >
            Floor Breakdown
          </motion.p>
          <motion.h2
            className="font-cormorant text-5xl md:text-6xl font-light leading-tight max-w-lg"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
          >
            Every floor.
            <br />
            <span className="gold-shimmer">Every detail.</span>
          </motion.h2>
        </div>

        {/* Floor Tabs */}
        <motion.div
          className="flex gap-2 mb-12 flex-wrap"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
        >
          {floors.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActiveFloor(i)}
              className={`px-5 py-2.5 rounded-full font-mono text-[0.65rem] uppercase tracking-widest transition-all duration-300 ${
                activeFloor === i
                  ? "bg-gold text-obsidian-950 font-bold"
                  : "glass text-ivory/40 hover:text-ivory/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Active Floor Panel */}
        {floors.map((floor, fi) => (
          <motion.div
            key={floor.id}
            className={`${activeFloor === fi ? "block" : "hidden"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-3">
                {floor.images.slice(0, 4).map((src, i) => (
                  <div
                    key={src}
                    className={`relative rounded-xl overflow-hidden bg-obsidian-800 ${i === 0 ? "col-span-2 h-64" : "h-44"}`}
                  >
                    <FloorImage src={src} alt={`${floor.label} view ${i + 1}`} />
                    {/* overlay on real images */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/30 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Floor Info */}
              <div className="lg:pl-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="label">{floor.tag}</span>
                  <div className="gold-line flex-1" />
                </div>

                <h3 className="font-cormorant text-4xl md:text-5xl font-light text-ivory mb-6">
                  {floor.label}
                </h3>

                <p className="text-ivory/45 font-dm text-sm leading-relaxed mb-10">
                  {floor.description}
                </p>

                {/* Specs */}
                <div className="space-y-4 mb-10">
                  {[
                    { label: "Built-up Area", value: floor.area },
                    { label: "Ceiling Height", value: floor.height },
                    { label: "Best Suited For", value: floor.best },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-start gap-4">
                      <span className="label opacity-40 w-28 shrink-0 mt-0.5">{spec.label}</span>
                      <span className="text-ivory/70 font-dm text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:+919495040824" className="btn-gold inline-block">
                  Enquire About This Floor
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
