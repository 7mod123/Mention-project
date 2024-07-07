"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import DashboardLeftSidebar from "@/components/ui/DashboardLeftSidebar"; // Import the new component

import rightContentImage from "@/public/images/Right Content.png"; // Make sure this path is correct
import logoImage from "@/public/images/LogoM.png"; // Add this import

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <DashboardLeftSidebar /> {/* Replace the left component */}
        </Wrapper>
      </section>

      {/* second half */}
      <section className="relative hidden h-screen w-full items-end justify-center lg:flex">
        <Image
          src={rightContentImage}
          alt="Empowering Customer Relationships"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Reposition the logo */}
        <div className="absolute bottom-60 left-20 z-20">
          <Image
            src={logoImage}
            alt="Logo"
            width={200} // Adjust size as needed
            height={55} // Adjust size as needed
          />
        </div>
        <div className="relative z-10 mb-8 ml-10 p-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            Empowering Customer Relationships
          </h2>
          <p className="mt-4 max-w-lg text-xl text-white">
            Build lasting connections and drive success with our innovative
            platform
          </p>
        </div>
      </section>
    </section>
  );
}
