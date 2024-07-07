import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const Regester = () => {
  return (
    <Card className="w-[576px] p-8">
      <CardHeader className="space-y-1 px-0">
        <h2 className="text-2xl font-bold text-gray-900">
          Your Best Work Starts Here
        </h2>
      </CardHeader>
      <CardContent className="space-y-6 px-0">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Business Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-200 bg-gray-50 p-3"
          />
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-full border-t border-gray-300"></div>
          <div className="relative bg-white px-4">
            <span className="text-sm text-gray-500">or</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="flex-1 items-center justify-center space-x-2 py-5"
          >
            <Icons.google className="h-5 w-5" />
            <span>Sign up with Google</span>
          </Button>
          <Button
            variant="outline"
            className="flex-1 items-center justify-center space-x-2 py-5"
          >
            <Icons.microsoft className="h-5 w-5" />
            <span>Sign up with Microsoft</span>
          </Button>
        </div>

        <Button className="w-full bg-blue-600 py-6 text-white">Sign Up</Button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-blue-600">
            Login here
          </a>
        </p>
      </CardContent>
    </Card>
  );
};

export default Regester;
