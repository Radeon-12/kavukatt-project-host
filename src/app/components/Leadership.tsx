"use client";

import { motion } from "framer-motion";

// Web-hosted leadership assets
const syncellusImg = "https://marmathewkavukatt.org/uploads/admins/fr-kanniyakonil-scaria-syncellus.jpg";
const procuratorImg = "https://marmathewkavukatt.org/uploads/admins/fr-maleckal-antony-procurator.jpg";
const postulatorImg = "https://marmathewkavukatt.org/uploads/admins/fr-alencherry-joseph-postulator.jpg";
const vicePostulatorImg = "https://marmathewkavukatt.org/uploads/admins/fr-john-plathanam-vice-postulator.jpg";

const priests = [
  {
    image: syncellusImg,
    name: "Fr. Scaria Kanniyakonil",
    role: "Syncellus",
  },
  {
    image: procuratorImg,
    name: "Fr. Antony Maleckal",
    role: "Procurator",
  },
  {
    image: postulatorImg,
    name: "Fr. Joseph Alencherry",
    role: "Postulator",
  },
  {
    image: vicePostulatorImg,
    name: "Fr. John Plathanam",
    role: "Vice Postulator",
  },
];

export function Leadership() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-4">

      {/* Priests Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {priests.map((priest, idx) => (
          <motion.div
            key={priest.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#FFFDF7] border border-[#D99A20]/25 rounded-[12px] p-5 shadow-sm text-center relative group hover:border-[#6D1414]/30 transition-all duration-300"
          >
            <div className="absolute inset-1 rounded-[10px] border border-[#D99A20]/10 pointer-events-none" />
            
            <div className="w-20 h-20 rounded-full overflow-hidden border border-[#D99A20]/45 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
              <img
                src={priest.image}
                alt={priest.name}
                className="w-full h-full object-cover filter sepia-[15%]"
              />
            </div>
            
            <h4 className="font-cinzel font-bold text-xs text-[#2B1606] uppercase tracking-wider min-h-[32px] flex items-center justify-center">
              {priest.name}
            </h4>
            <p className="text-[#6D1414] font-cinzel text-[0.62rem] tracking-[0.2em] uppercase font-bold mt-1">
              {priest.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
