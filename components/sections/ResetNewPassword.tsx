import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Password reset successfully");
      // Add your password reset logic here
    } else {
      console.log("Passwords do not match");
      // Handle password mismatch
    }
  };

  return (
    <Card className="w-[576px] p-8">
      <CardHeader className="px-0">
        <h2 className="text-2xl font-bold text-gray-900">Enter New Password</h2>
        <p className="text-gray-500">
          Please create your new password. It must contain at least one
          uppercase letter, one lowercase letter, and one number.
        </p>
      </CardHeader>
      <CardContent className="space-y-6 px-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••••"
              className="w-full border border-gray-200 bg-gray-50 p-3"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm entered Password</Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••"
              className="w-full border border-gray-200 bg-gray-50 p-3"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 py-6 text-white">
            Reset Password
          </Button>
        </form>
        <Button
          variant="link"
          className="h-auto p-0 text-blue-600"
          onClick={() => console.log("Back clicked")}
        >
          Back
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResetPasswordForm;
