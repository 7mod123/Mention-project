import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();

  const handleResetPassword = () => {
    router.push("/Otp-reset-pass");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[550px]">
        <div className="flex w-full flex-col items-start gap-3">
          <h1 className="w-full text-lg font-bold leading-tight text-[#111928] sm:text-xl">
            Reset your password
          </h1>
          <p className="w-full text-sm font-normal leading-5 text-[#9CA3AF] sm:text-base sm:leading-6">
            Just type in your email and we will send you a code to reset your
            password!
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-4 sm:gap-5">
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="email"
              className="w-full text-sm font-medium leading-5 text-[#111928]"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-10 w-full rounded-md border border-[#F1F3F5] bg-[#F9FAFB] px-3 py-2 text-sm text-[#6B7280] sm:h-12 sm:px-4 sm:py-3"
            />
          </div>
          <Button
            className="h-10 w-full bg-[#3460FB] text-sm font-medium text-white sm:h-12 sm:text-base"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
          <Link
            href="/"
            className="text-sm font-medium leading-5 text-[#3460FB] hover:underline"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
