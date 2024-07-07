"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CompanyName = () => {
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
      // Here you would typically handle the form submission
      console.log("Form submitted with company name:", companyName);
      // You might want to call an API or update parent component state here
    }
  };

  const isValid = companyName.trim().length > 0;

  return (
    <div className="w-full max-w-[576px] p-8">
      <Card className="w-full">
        <CardContent className="p-8">
          <CardHeader className="mb-6 p-0">
            <h2 className="text-xl font-bold text-gray-900">
              What is your Company Name?
            </h2>
          </CardHeader>
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-900"
              >
                Company name
              </label>
              <Input
                id="company-name"
                placeholder="Enter your Company name"
                className={`w-full border bg-gray-50 px-4 py-3 ${
                  error ? "border-red-500" : "border-gray-200"
                }`}
                value={companyName}
                onChange={handleInputChange}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <Button
              className={`w-full py-3 font-medium ${
                isValid
                  ? "bg-blue-600 text-white"
                  : "cursor-not-allowed bg-blue-600/20 text-white"
              }`}
              onClick={handleContinue}
              disabled={!isValid}
            >
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyName;
