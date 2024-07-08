"use client";

import Wrapper from "@/components/wrapper";
import RightSection from "@/components/sections/RightSection";
import ResetPasswordForm from "@/components/sections/ResetNewPassword";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <ResetPasswordForm /> {/* Use the capitalized component name */}
        </Wrapper>
      </section>

      <RightSection />
    </section>
  );
}
