"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import residential from "../../public/residential.webp";
import { div } from "motion/react-client";

interface ServiceContainerProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function ServiceContainer({
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceContainerProps) {
  return <div className="h-[500px] w-1/2 border border-gray-300"></div>;
}
