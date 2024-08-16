"use client";
import { useState } from "react";
import { resetPassword } from "@/app/firebase";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const ResetPassword = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const handleResetPassword = async (): Promise<void> => {
    try {
      await resetPassword(email);
      setMessage("Password reset email sent!");
    } catch (error) {
      setMessage(`Error: ${error as Error}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
      <div className="relative lg:w-[70%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
        <div className="flex flex-col justify-center p-10 md:p-8 lg:p-14">
          <div className="flex flex-row gap-2 items-center py-4 ">
            <FaCircleArrowLeft
              className="text-[40px] text-bice-blue"
              onClick={() => router.push("/")}
            />
            <p className="text-manthis-green">Back to home</p>
          </div>
          <span className="mb-1 xl:mb-3 text-2xl lg:text-3xl xl:text-4xl font-bold text-bice-blue">
            Reset Your Password
          </span>
          <span className="font-light mb-8 text-sm md:text-base lg:text-lg text-manthis-green">
            Enter your email to receive a password reset link.
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <button
            onClick={handleResetPassword}
            className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold"
          >
            Reset Password
          </button>
          {message && <p className="text-center text-bice-blue">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
