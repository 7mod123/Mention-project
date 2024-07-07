"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanySizeForm = () => {
  const companySizes = ["1 - 5", "6 - 10", "11 - 100", "100+"];
  const [selectedSize, setSelectedSize] = useState("11 - 100");

  return (
    <Card className="w-[576px] p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-xl font-bold text-gray-900">
          What size is your company?
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <p className="mb-4 text-sm text-gray-600">
          How many people work at your company
        </p>
        <div className="mb-6 flex space-x-5">
          {companySizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "outline" : "ghost"}
              className={`h-[46px] flex-1 ${
                selectedSize === size
                  ? "border-blue-600 text-blue-600"
                  : "border-gray-200 text-gray-600"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        <Button className="mb-6 w-full bg-blue-600 text-white hover:bg-blue-700">
          Start free trial
        </Button>
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs leading-tight text-gray-600"
            >
              By signing up, you are creating a Fluent account, and you agree to
              fluent <span className="text-blue-600">Terms of Use</span> and{" "}
              <span className="text-blue-600">Privacy Policy</span>.
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label htmlFor="newsletter" className="text-xs text-gray-600">
              Email me about product updates and resources.
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanySizeForm;
