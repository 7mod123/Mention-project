"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const CompanySizeForm = () => {
  const companySizes = ["1 - 5", "6 - 10", "11 - 100", "100+"];
  const [selectedSize, setSelectedSize] = useState("11 - 100");

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <h2 className="w-full text-lg font-bold leading-tight text-[#111928] sm:text-xl">
          What size is your company?
        </h2>
        <div className="w-full space-y-2">
          <label className="block text-sm font-medium text-[#111928]">
            How many people work at your company
          </label>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {companySizes.map((size) => (
              <Button
                key={size}
                variant="outline"
                className={`h-[46px] text-base sm:text-lg ${
                  selectedSize === size
                    ? "border-[#3460FB] text-[#3460FB]"
                    : "border-[#F1F3F5] bg-[#F9FAFB] text-[#6B7280]"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        <Button className="h-[50px] w-full bg-[#3460FB] text-base font-medium text-white">
          Start free trial
        </Button>
        <div className="w-full space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1" />
            <label
              htmlFor="terms"
              className="text-xs leading-[150%] text-[#4B5563]"
            >
              By signing up, you are creating a Fluent account, and you agree to
              fluent <span className="text-[#3460FB]">Terms of Use</span> and{" "}
              <span className="text-[#3460FB]">Privacy Policy</span>.
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label htmlFor="newsletter" className="text-xs text-[#4B5563]">
              Email me about product updates and resources.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySizeForm;
