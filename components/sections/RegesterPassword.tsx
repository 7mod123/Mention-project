"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegesterPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleContinue = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    } else {
      console.log("Password set successfully");
      // Add your form submission logic here
    }
  };

  const isValid = password.length >= 8;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <h2 className="text-xl font-bold text-[#111928]">Create a Password</h2>
        <div className="w-full space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#111928]"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••••"
            className={`h-[50px] w-full rounded-md border bg-[#F9FAFB] px-4 py-3 text-sm ${
              error ? "border-red-500" : "border-[#F1F3F5]"
            }`}
            value={password}
            onChange={handlePasswordChange}
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

export default RegesterPassword;
