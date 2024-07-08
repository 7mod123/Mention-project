import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Regester = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <h1 className="w-full text-xl font-bold text-[#111928]">
          Your Best Work Starts Here
        </h1>
        <div className="w-full space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#111928]"
          >
            Business Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="h-[50px] w-full rounded-md border border-[#F1F3F5] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]"
          />
        </div>

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
              Sign up with Google
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
              Sign up with Microsoft
            </span>
          </Button>
        </div>

        <Button
          className="h-[50px] w-full bg-[#3460FB] text-base font-medium text-white"
          onClick={() => router.push("/company-name")}
        >
          Sign Up
        </Button>

        <p className="w-full text-center text-sm text-[#6B7280]">
          Already have an account?{" "}
          <Link href="/" className="font-medium text-[#3460FB] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regester;
