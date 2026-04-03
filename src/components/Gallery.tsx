"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

function GalleryImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl bg-obsidian-800 ${className}`}>
      {error ? (
        <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2 min-h-[160px]">
          <div className="text-gold/15 text-3xl">◈</div>
          <p className="label opacity-15 text-center">Image coming soon</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          onError={() => setError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/20 to-transparent pointer-events-none" />
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const galleryImages = images.gallery;

  return (
    <section ref={ref} id="gallery" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <motion.p
              className="label mb-6"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            >
              Gallery
            </motion.p>
            <motion.h2
              className="font-cormorant text-5xl md:text-6xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
            >
              See the space.
              <br />
              <span className="gold-shimmer">Feel the scale.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-ivory/25 font-dm text-sm max-w-xs"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          >
            Every floor. Every finish. Every corner — built for commercial intensity.
          </motion.p>
        </div>

        {/* Immersive gallery grid */}
        <motion.div
          className="grid grid-cols-12 grid-rows-3 gap-3 h-[700px]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Large feature */}
          <GalleryImage
            src={galleryImages[0]}
            alt="Kallery Galleria exterior"
            className="col-span-7 row-span-2"
          />
          {/* Top right */}
          <GalleryImage
            src={galleryImages[1]}
            alt="Ground floor interior"
            className="col-span-5 row-span-1"
          />
          {/* Middle right */}
          <GalleryImage
            src={galleryImages[2]}
            alt="First floor interior"
            className="col-span-5 row-span-1"
          />
          {/* Bottom left */}
          <GalleryImage
            src={galleryImages[3]}
            alt="Second floor interior"
            className="col-span-4 row-span-1"
          />
          {/* Bottom center */}
          <GalleryImage
            src={galleryImages[4]}
            alt="Third floor interior"
            className="col-span-4 row-span-1"
          />
          {/* Bottom right */}
          <GalleryImage
            src={galleryImages[5]}
            alt="Building amenities"
            className="col-span-4 row-span-1"
          />
        </motion.div>

        {/* CTA below gallery */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-ivory/30 font-dm text-sm mb-6">
            Want a personal walkthrough?
          </p>
          <a href="tel:+919495040824" className="btn-gold">
            Schedule Site Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
