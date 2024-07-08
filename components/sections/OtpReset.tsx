import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const OTPResetForm = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(24);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      }
    } else if (e.key >= "0" && e.key <= "9") {
      if (otp[index] && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp.join(""));
    router.push("/New-Password-Reset");
  };

  const resendCode = () => {
    setTimer(24);
    console.log("Resending code...");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-[400px] flex-col items-start justify-center gap-6 rounded-lg p-6 sm:max-w-[450px] sm:p-8 md:max-w-[500px] lg:max-w-[576px]">
        <div className="w-full space-y-2.5">
          <h2 className="text-xl font-bold text-[#111928]">
            Enter 4 Digit OTP
          </h2>
          <p className="text-sm font-medium text-[#6B7280]">
            Please enter the 4-digit OTP that has been sent to your email.{" "}
            <span className="text-[#3460FB]">ammarhamed717@gmail.com</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="flex justify-center gap-3 sm:gap-4">
            {[0, 1, 2, 3].map((index) => (
              <Input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                className="h-[60px] w-[60px] rounded-lg border border-[#F1F3F5] bg-[#F9FAFB] text-center text-2xl"
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-[#111928]">
            {timer > 0 ? (
              <>
                Re-send the code{" "}
                {String(Math.floor(timer / 60)).padStart(2, "0")}:
                {String(timer % 60).padStart(2, "0")}
              </>
            ) : (
              <Button
                variant="link"
                className="h-auto p-0 text-[#3460FB]"
                onClick={resendCode}
              >
                Re-send
              </Button>
            )}
          </p>
          <Button
            type="submit"
            className="h-[50px] w-full bg-[#3460FB] text-base font-medium text-white"
            disabled={otp.some((digit) => !digit)}
          >
            Verify OTP
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

export default OTPResetForm;
