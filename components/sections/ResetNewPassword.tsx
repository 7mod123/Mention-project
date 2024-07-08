import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Password reset successfully");
      // Add your password reset logic here
      router.push("/"); // Navigate to the home page
    } else {
      console.log("Passwords do not match");
      // Handle password mismatch
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <div className="w-full space-y-2.5">
          <h2 className="text-xl font-bold text-[#111928]">
            Enter New Password
          </h2>
          <p className="text-sm font-medium text-[#6B7280]">
            Please create your new password. It must contain at least one
            uppercase letter, one lowercase letter, and one number.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="new-password"
              className="text-sm font-medium text-[#111928]"
            >
              New Password
            </Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••••"
              className="h-[50px] w-full rounded-md border border-[#F1F3F5] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="confirm-password"
              className="text-sm font-medium text-[#111928]"
            >
              Confirm entered Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••"
              className="h-[50px] w-full rounded-md border border-[#F1F3F5] bg-[#F9FAFB] px-4 py-3 text-sm text-[#6B7280]"
            />
          </div>
          <Button
            type="submit"
            className="h-[50px] w-full bg-[#3460FB] text-base font-medium text-white"
          >
            Reset Password
          </Button>
        </form>
        <Button
          variant="link"
          className="h-auto p-0 text-sm font-medium text-[#3460FB]"
          onClick={() => router.push("/reset-password")}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
