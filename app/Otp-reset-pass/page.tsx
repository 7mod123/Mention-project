"use client";

import RightSection from "@/components/sections/RightSection";
import OTPResetForm from "@/components/sections/OtpReset";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <section className="flex h-screen flex-col lg:flex-row">
          <section className="flex w-full flex-col justify-between lg:h-auto">
            <OTPResetForm /> {/* Use the capitalized component name */}
          </section>

          <RightSection />
        </section>
      </div>
    </div>
  );
}
