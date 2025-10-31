import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            Cloud Computing Class - Lab 8
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight">
            Geometric Area & Surface Calculator
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Compute geometric properties using standard mathematical formulas. Supports square area, cube surface area, circle area, and cylinder lateral surface area.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <a href="#features">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                Get Started <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </a>
            <a href="https://github.com/syadzaarrana/kowan-lab8">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base shadow-none"
              >
                <GithubIcon className="h-5! w-5!" /> Github
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
