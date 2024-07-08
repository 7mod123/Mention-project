"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login1() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <h2 className="w-full text-center text-xl font-bold text-[#111928]">
          Welcome back
        </h2>

        <div className="w-full space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#111928]"
            >
              Email
            </label>
            <Input
              id="email"
              placeholder="Enter your email"
              className="h-[50px] w-full rounded-md border border-[#F1F3F5] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]"
            />
          </div>

          <div className="space-y-2">
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
              className="h-[50px] w-full rounded-md border border-[#F1F3F5] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]"
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              className="h-4 w-4 rounded border-[#D1D5DB]"
            />
            <label
              htmlFor="remember"
              className="text-xs font-medium text-[#6B7280]"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/reset-password"
            className="text-xs font-medium text-[#3460FB]"
          >
            Forgot password?
          </Link>
        </div>

        <Button className="h-[50px] w-full bg-[#1C64F2] text-base font-medium text-white">
          Sign In
        </Button>

        <div className="relative flex w-full items-center justify-center">
          <div className="absolute w-full border-t border-[#F1F3F5]"></div>
          <div className="relative bg-white px-4">
            <span className="text-base font-medium text-[#6B7280]">or</span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Button
            variant="outline"
            className="flex h-[50px] items-center justify-center space-x-2 border-[#F1F3F5]"
          >
            <Image
              src="/images/Google - Original.svg"
              alt="Google logo"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-[#1F2A37]">
              Log in with Google
            </span>
          </Button>
          <Button
            variant="outline"
            className="flex h-[50px] items-center justify-center space-x-2 border-[#F1F3F5]"
          >
            <Image
              src="/images/microsoft.svg"
              alt="Microsoft logo"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-[#1F2A37]">
              Log in with Microsoft
            </span>
          </Button>
        </div>

        <p className="w-full text-center text-sm text-[#6B7280]">
          Don't have an account yet?{" "}
          <Link href="/Regester-page" className="font-medium text-[#3460FB]">
            Start your 14-day free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
