import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DashboardLeftSidebar = () => {
  return (
    <Card className="w-[576px] p-8 space-y-6">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">
          Reset your password
        </h2>
        <p className="text-gray-500">
          Just type in your email and we will send you a code to reset your
          password!
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-50 border border-gray-200"
          />
        </div>
        <div className="space-y-4">
          <Button className="w-full bg-blue-600 text-white py-3">
            Reset Password
          </Button>
          <div className="flex justify-start">
            <a href="#" className="text-blue-600 text-sm font-medium">
              Back
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardLeftSidebar;
