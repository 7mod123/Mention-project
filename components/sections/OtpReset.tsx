import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OTPResetForm = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index, value) => {
    // Only allow numeric input
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp.join(""));
  };

  const resendCode = () => {
    setTimer(24);
    console.log("Resending code...");
  };

  return (
    <Card className="w-[576px] p-8">
      <CardHeader className="px-0">
        <h2 className="text-2xl font-bold text-gray-900">Enter 4 Digit OTP</h2>
        <p className="text-gray-500">
          Please enter the 4-digit OTP that has been sent to your email.{" "}
          <span className="text-blue-600">ammarhamed717@gmail.com</span>
        </p>
      </CardHeader>
      <CardContent className="space-y-6 px-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            {[0, 1, 2, 3].map((index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                className="h-14 w-14 text-center text-2xl"
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <p className="text-sm text-gray-900">
            {timer > 0 ? (
              <>
                Re-send the code{" "}
                {String(Math.floor(timer / 60)).padStart(2, "0")}:
                {String(timer % 60).padStart(2, "0")}
              </>
            ) : (
              <Button
                variant="link"
                className="h-auto p-0 text-blue-600"
                onClick={resendCode}
              >
                Re-send
              </Button>
            )}
          </p>
          <Button
            type="submit"
            className="w-full bg-blue-600 py-6 text-white"
            disabled={otp.some((digit) => !digit)}
          >
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

export default OTPResetForm;
