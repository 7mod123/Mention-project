"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CompanyName = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCompanyName(value);
    if (value.trim().length > 0) {
      setError("");
    }
  };

  const handleContinue = () => {
    if (companyName.trim().length === 0) {
      setError("Company name is required");
    } else {
      console.log("Form submitted with company name:", companyName);
      router.push("/companySize");
    }
  };

  const isValid = companyName.trim().length > 0;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[550px]">
        <h2 className="w-full text-lg font-bold leading-tight text-[#111928] sm:text-xl">
          What is your Company Name?
        </h2>
        <div className="w-full space-y-2">
          <label
            htmlFor="company-name"
            className="block w-full text-sm font-medium text-[#111928]"
          >
            Company name
          </label>
          <Input
            id="company-name"
            placeholder="Enter your Company name"
            className={`h-10 w-full rounded-md border bg-[#F9FAFB] px-3 py-2 text-sm sm:h-12 sm:px-4 sm:py-3 ${
              error ? "border-red-500" : "border-[#F1F3F5]"
            }`}
            value={companyName}
            onChange={handleInputChange}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
        <Button
          className={`h-10 w-full text-sm font-medium sm:h-12 sm:text-base ${
            isValid
              ? "bg-[#3460FB] text-white"
              : "cursor-not-allowed bg-[#3460FB] bg-opacity-20 text-white"
          }`}
          onClick={handleContinue}
          disabled={!isValid}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CompanyName;
