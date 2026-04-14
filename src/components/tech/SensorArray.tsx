"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Sensor = {
  id: string;
  name: string;
  count: number;
  unit: string;
  desc: string;
  color: string;
};

const sensors: Sensor[] = [
  {
    id: "A1",
    name: "LIDAR ARRAY",
    count: 4,
    unit: "UNITS",
    desc: "360° obstacle mapping up to 80 meters.",
    color: "#d0fc06",
  },
  {
    id: "A2",
    name: "FORWARD SONAR",
    count: 6,
    unit: "NODES",
    desc: "Underwater depth & hazard scan.",
    color: "#d0fc06",
  },
  {
    id: "A3",
    name: "INERTIAL IMU",
    count: 2,
    unit: "UNITS",
    desc: "9-axis motion & roll stability.",
    color: "#d0fc06",
  },
  {
    id: "A4",
    name: "OPTICAL CAMERA",
    count: 8,
    unit: "LENSES",
    desc: "4K HDR panoramic capture.",
    color: "#d0fc06",
  },
  {
    id: "A5",
    name: "GPS CONSTELLATION",
    count: 4,
    unit: "SAT BANDS",
    desc: "GNSS fused with RTK for cm-level accuracy.",
    color: "#d0fc06",
  },
  {
    id: "A6",
    name: "THERMAL IMAGING",
    count: 2,
    unit: "UNITS",
    desc: "Night-vision and marine-life awareness.",
    color: "#d0fc06",
  },
  {
    id: "A7",
    name: "ULTRASONIC PROX",
    count: 4,
    unit: "SENSORS",
    desc: "Docking and close-range detection.",
    color: "#d0fc06",
  },
  {
    id: "A8",
    name: "AMBIENT ENVIRON",
    count: 2,
    unit: "MODULES",
    desc: "Wind, temperature, barometric feed.",
    color: "#d0fc06",
  },
];

function SensorRow({
  sensor,
  index,
  inView,
}: {
  sensor: Sensor;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ x: 4 }}
      className="group flex items-center gap-5 border-b border-white/10 py-5 last:border-b-0"
    >
      {/* ID */}
      <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/30">
        {sensor.id}
      </span>

      {/* Bullet */}
      <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-lime shadow-[0_0_12px_rgba(208,252,6,0.6)]" />

      {/* Name + Desc */}
      <div className="min-w-0 flex-1">
        <div className="font-outfit text-[14px] font-black uppercase tracking-[1px] text-white md:text-[15px]">
          {sensor.name}
        </div>
        <div className="mt-0.5 font-jakarta text-[12px] text-white/50 md:text-[13px]">
          {sensor.desc}
        </div>
      </div>

      {/* Count */}
      <div className="flex items-baseline gap-1">
        <span className="font-outfit text-[26px] font-black leading-none text-white md:text-[30px]">
          {sensor.count}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-white/40">
          {sensor.unit}
        </span>
      </div>
    </motion.div>
  );
}

export default function SensorArray() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative overflow-hidden bg-dark-deep px-5 py-20 md:px-10 md:py-32">
      {/* Lime radial */}
      <div
        className="pointer-events-none absolute right-[5%] top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.1] blur-[120px]"
        style={{ background: "#d0fc06" }}
      />

      <div className="relative mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Header + diagram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[4px] text-lime md:text-[14px]">
              SENSORS / SECTION 03
            </p>
            <h2 className="font-outfit text-[48px] font-black leading-[0.92] tracking-tight text-white md:text-[72px] lg:text-[88px]">
              SENSOR
              <br />
              <span className="text-white/25">ARRAY.</span>
            </h2>
            <p className="mt-6 max-w-[420px] font-jakarta text-[15px] leading-[1.6] text-white/60 md:text-[17px]">
              32 sensors fused into a single situational model — updated
              200 times per second. The hull sees what you can&apos;t.
            </p>

            {/* Concentric radar diagram */}
            <div className="mt-10 flex justify-start">
              <div className="relative h-[280px] w-[280px] md:h-[340px] md:w-[340px]">
                {/* Rings */}
                {[1, 0.75, 0.5, 0.25].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: s, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 rounded-full border border-white/15"
                    style={{ transformOrigin: "center" }}
                  />
                ))}

                {/* Crosshairs */}
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/10" />

                {/* Rotating scan */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0%, rgba(208,252,6,0.35) 15%, transparent 25%)",
                    borderRadius: "50%",
                    maskImage: "radial-gradient(circle, black 0%, black 100%)",
                  }}
                />

                {/* Center dot */}
                <div className="absolute left-1/2 top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_20px_rgba(208,252,6,0.8)]" />

                {/* Scatter points */}
                {[
                  { x: "30%", y: "25%" },
                  { x: "70%", y: "40%" },
                  { x: "60%", y: "70%" },
                  { x: "25%", y: "65%" },
                  { x: "80%", y: "20%" },
                  { x: "15%", y: "45%" },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                    className="absolute h-[6px] w-[6px] rounded-full bg-lime"
                    style={{
                      left: p.x,
                      top: p.y,
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 0 8px rgba(208,252,6,0.8)",
                    }}
                  />
                ))}

                {/* Labels */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between font-mono text-[9px] uppercase tracking-[1.5px] text-white/40">
                  <span>0°</span>
                  <span>180°</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Sensor list */}
          <div ref={ref} className="lg:col-span-7">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[2px] text-white/40">
                SENSOR INDEX
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[1.5px] text-lime">
                <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-lime" />
                ALL ACTIVE
              </span>
            </div>
            {sensors.map((s, i) => (
              <SensorRow key={s.id} sensor={s} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
