import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ResetPassword = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Reset your password
          </h1>
          <p className="text-sm text-gray-500">
            Just type in your email and we will send you a code to reset your
            password!
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-200 bg-gray-50 p-3"
            />
          </div>
          <Button className="w-full rounded-md bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700">
            Reset Password
          </Button>
          <div>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
