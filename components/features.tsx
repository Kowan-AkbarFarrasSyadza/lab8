import Link from "next/link";
import {
  Square,
  Circle,
  Box,
  Cylinder
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Square,
    title: "Square Area Calculator",
    description:
      "Calculate area of a square by its side length.",
    href: "/square-area",
  },
  {
    icon: Circle,
    title: "Circle Area Calculator",
    description:
      "Calculate area of a circle by its radius.",
    href: "/circle-area",
  },
  {
    icon: Box,
    title: "Cube Surface Area Calculator",
    description:
      "Calculate surface area of a cube by its edge length.",
    href: "/cube-surface",
  },
  {
    icon: Cylinder,
    title: "Cylinder Lateral Surface Area Calculator",
    description:
      "Calculate lateral surface area of a cylinder by its radius and height.",
    href: "/cylinder-lateral-surface",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Available Tools
      </h2>
      <div className="w-full max-w-(--breakpoint-lg) mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.title}
            href={feature.href}
            className="flex flex-col bg-background border rounded-xl py-6 px-5 hover:shadow-lg transition-shadow"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
            <Link
              href={feature.href}
              className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline hover:translate-x-1 transition-transform"
            >
              Try it out →
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
