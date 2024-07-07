"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function DashboardLeftSidebar() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="w-[400px] space-y-6">
        <h2 className="text-center text-2xl font-bold">Welcome back</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" placeholder="Enter your email" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input id="password" type="password" placeholder="••••••••••" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Sign In
        </Button>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-full border-t border-gray-300"></div>
          <div className="relative bg-white px-4">
            <span className="text-sm text-gray-500">or</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="flex items-center justify-center space-x-2"
          >
            <Icons.google className="h-5 w-5" />
            <span>Log in with Google</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center space-x-2"
          >
            <Icons.microsoft className="h-5 w-5" />
            <span>Log in with Microsoft</span>
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don't have an account yet?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Start your 14-day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
