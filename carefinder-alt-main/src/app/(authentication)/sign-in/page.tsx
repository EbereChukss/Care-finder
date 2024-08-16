"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { FaCircleArrowLeft } from "react-icons/fa6";

//Sign-in component
function SignIn(): React.JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  //Instantiate the google sign in
  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/hospitals");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError(`Could not sign in with Google: ${error as Error}`);
    }
  };

  const handleSignIn = async (): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/hospitals");
    } catch (error) {
      console.error("Email/password sign-in error:", error);
      setError(`Could not sign in: ${error as Error}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:space-y-0 md:space:x-4 xl:space-x-8">
        <div className="flex flex-col justify-center p-10 md:p-8 xl:p-12">
          <div className="flex flex-row gap-2 items-center py-2">
            <FaCircleArrowLeft
              className="text-[40px] text-manthis-green"
              onClick={() => router.push("/")}
            />
            <p className="text-bice-blue">Back to home</p>
          </div>
          <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-bice-blue">
            {" "}
            Welcome Back!
          </span>
          <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-manthis-green">
            Welcome back! Please enter your details.
          </span>
          <div className="py-2 md:py-4 ">
            <label className="text-lg mb:text-xl mb-2 text-bice-blue">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="email"
              id="email"
              value={email}
              placeholder="JaneDoe@email.com"
            />
          </div>
          <div className=" py-2 md:py-4 ">
            <label className="text-lg md:text-xl mb-2 text-bice-blue">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="password"
              id="password"
              value={password}
              placeholder="JaneDoe123$"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-between w-full py-4">
            <span
              className="text-base text-manthis-green cursor-pointer"
              onClick={() => router.push("/reset-password")}
            >
              Forgot Password?
            </span>
          </div>
          <button
            onClick={handleSignIn}
            className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold"
          >
            Sign In
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-400 text-bice-blue text-base p-2 rounded-lg mb-6 hover:bg-bice-blue hover:text-white font-semibold"
          >
            <FcGoogle className=" w-6 h-6 inline mr-2" />
            Sign In with Google
          </button>
          {/* <p className="text-red-700">{error}</p>  */}
          <div className="text-center text-bice-blue">
            Don&apos;t have an account? {""}
            <span
              onClick={() => router.push("/sign-up")}
              className="font-bold text-bice-blue cursor-pointer"
            >
              Sign up for free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
