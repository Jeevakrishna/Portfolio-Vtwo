"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShadowBox } from "./ShadowBox";

interface AnimatedMobilePhotosProps {
  delay: number;
}

export function AnimatedMobilePhotos({ delay }: AnimatedMobilePhotosProps) {
  return (
    <div className="relative lg:hidden">
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex items-center justify-center">
          <motion.div
            className="relative w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay,
            }}
          >
            <ShadowBox width={200} height={300} />
            <Image
              className="absolute left-0 top-0 rounded-lg object-cover"
              src="/Jeeva11.jpeg"
              alt="JeevaKrishna"
              width={200}
              height={300}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
