"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegesterName = () => {
  const [regesterName, setRegesterName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegesterName(value);
    if (value.trim().length > 0) {
      setError("");
    }
  };

  const handleContinue = () => {
    if (regesterName.trim().length === 0) {
      setError("Name is required");
    } else {
      console.log("Form submitted with name:", regesterName);
    }
  };

  const isValid = regesterName.trim().length > 0;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <h2 className="text-xl font-bold text-[#111928]">What is your Name?</h2>
        <div className="w-full space-y-2">
          <label
            htmlFor="regester-name"
            className="block text-sm font-medium text-[#111928]"
          >
            Full name
          </label>
          <Input
            id="regester-name"
            placeholder="Enter your full name"
            className={`h-[50px] w-full rounded-md border bg-[#F9FAFB] px-4 py-3 text-sm ${
              error ? "border-red-500" : "border-[#F1F3F5]"
            }`}
            value={regesterName}
            onChange={handleInputChange}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
        <Button
          className={`h-[50px] w-full text-base font-medium ${
            isValid
              ? "bg-[#3460FB] text-white"
              : "cursor-not-allowed bg-[#3460FB] text-white opacity-20"
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

export default RegesterName;
