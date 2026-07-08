"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// Web-hosted timeline assets
const birthImg = "https://marmathewkavukatt.org/uploads/life%20journey/mar-mathew-kavukatt-birth-1904-pravithanam.png";
const priestImg = "https://marmathewkavukatt.org/uploads/life%20journey/mar-mathew-kavukatt-priest-ordination-1935.png";
const bishopImg = "https://marmathewkavukatt.org/uploads/life%20journey/mar-mathew-kavukatt-bishop-consecration-rome-1950.png";
const archbishopImg = "https://marmathewkavukatt.org/uploads/life%20journey/mar-mathew-kavukatt-first-archbishop-changanacherry-1956.png";
const deathImg = "https://marmathewkavukatt.org/uploads/life%20journey/mar-mathew-kavukatt-eternal-rest-1969.png";
const servantImg = "https://marmathewkavukatt.org/uploads/life%20journey/mar-mathew-kavukatt-servant-of-god-declaration.png";

const timelineEvents = [
  {
    year: "1904",
    title: "Birth at Pravithanam",
    desc: "Born on 17 July 1904 to Chummar and Tresa in the Kavukatt family, near Palai, Kerala.",
    image: birthImg,
  },
  {
    year: "1935",
    title: "Priestly Ordination",
    desc: "Ordained a priest by Bishop Kalacherry on 21 December 1935 after completing his seminary studies.",
    image: priestImg,
  },
  {
    year: "1950",
    title: "Consecrated Bishop in Rome",
    desc: "Consecrated as Bishop of Changanacherry on 9 November 1950 in Rome by Cardinal Tisserant.",
    image: bishopImg,
  },
  {
    year: "1956",
    title: "First Metropolitan Archbishop",
    desc: "Elevated to Metropolitan Archbishop when Changanacherry was made an Archdiocese in 1956.",
    image: archbishopImg,
  },
  {
    year: "1969",
    title: "Entered Eternal Rest",
    desc: "Passed away into eternal glory on 9 October 1969, leaving behind a legacy of holy service.",
    image: deathImg,
  },
  {
    year: "1994",
    title: "Declared Servant of God",
    desc: "Declared Servant of God on 25 September 1994 by the Holy See, initiating the canonization process.",
    image: servantImg,
  },
];

export function LifeTimeline() {
  return (
    <div className="relative py-4 max-w-3xl mx-auto">
      {/* Central line */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1.5px] bg-[#D99A20]/30 -translate-x-1/2" />

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col sm:flex-row items-stretch relative ${
                isEven ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Center Dot Indicator */}
              <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-[#FFF4D2] border-2 border-[#D99A20] flex items-center justify-center -translate-x-1/2 z-10 top-0">
                <Calendar size={12} className="text-[#6D1414]" />
              </div>

              {/* Text Details Box */}
              <div className="w-full sm:w-[45%] pl-10 sm:pl-0 text-left">
                <div className="bg-[#FFFDF7] border border-[#D99A20]/25 p-5 rounded-[12px] shadow-sm relative group hover:border-[#6D1414]/30 transition-all duration-300">
                  {/* Subtle inner border */}
                  <div className="absolute inset-1 rounded-[10px] border border-[#D99A20]/10 pointer-events-none" />

                  <div className="relative z-10 space-y-2">
                    <span className="inline-block px-2 py-0.5 bg-[#6D1414] text-[#FFF4D2] font-cinzel text-xs font-bold rounded-md">
                      {event.year}
                    </span>
                    <h4 className="font-cinzel font-bold text-sm text-[#2B1606] uppercase tracking-wider">
                      {event.title}
                    </h4>
                    <p className="font-lora text-stone-500 text-xs sm:text-sm leading-relaxed">
                      {event.desc}
                    </p>

                    {/* Timeline Image */}
                    {event.image && (
                      <div className="mt-3 w-full h-32 rounded-md overflow-hidden border border-[#D99A20]/20 shadow-inner">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover filter sepia-[15%]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Empty spacer space for desktop layouts */}
              <div className="hidden sm:block w-[45%]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
