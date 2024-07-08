"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      // Here you would typically handle the form submission
      console.log("Password set successfully");
      // You might want to call an API or update parent component state here
    }
  };

  const isValid = password.length >= 8;

  return (
    <div className="w-full max-w-[576px] p-8">
      <Card className="w-full">
        <CardContent className="p-8">
          <CardHeader className="mb-6 p-0">
            <h2 className="text-xl font-bold text-gray-900">
              Create a Password
            </h2>
          </CardHeader>
          <div className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••"
                className={`w-full border bg-gray-50 px-4 py-3 ${
                  error ? "border-red-500" : "border-gray-200"
                }`}
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
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

export default RegesterPassword;
