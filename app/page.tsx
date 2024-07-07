"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import rightContentImage from "@/public/images/Right Content.png"; // Make sure this path is correct
import logoImage from "@/public/images/LogoM.png"; // Add this import
import ResetPassword from "@/components/sections/ResetPassword";
import RightSection from "@/components/sections/RightSection";
import Login1 from "@/components/sections/Login1";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <Login1 /> {/* Use the capitalized component name */}
        </Wrapper>
      </section>

      <RightSection />
    </section>
  );
}
