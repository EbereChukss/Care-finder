"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FaCircleArrowLeft } from "react-icons/fa6";

//sign-up component
function SignUp(): React.JSX.Element {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  //instantiate the sign-up using the sign-up button
  const handleSignUp = async (): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/sign-in");
    } catch (error) {
      setError(`Could not sign up: ${error}`);
    }
  };

  //instantiate the sign-up using the  google sign-up button
  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/sign-in");
    } catch (error) {
      setError(`Could not sign in with Google:${error}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
      <div className="relative lg:w-[75%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:sapce-y-0 md:space:x-4 xl:space-x-8">
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
            Are You New Here?
          </span>
          <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-manthis-green">
            Put in your details to join us!
          </span>
          <div className="py-2 md:py-4 ">
            <label className="text-lg mb:text-xl mb-2 text-bice-blue">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="name"
              id="name"
              value={name}
              placeholder="Jane Doe"
            />
          </div>
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
            {/* <div className="mr-24 ">
              <input type="checkbox" className="mr-2" name="check" id="check" />
              <span className="text-base text-manthis-green">
                Remember for 30 days
              </span>
            </div> */}
            <span
              className="text-base text-manthis-green cursor-pointer"
              onClick={() => router.push("/reset-password")}
            >
              Forgot Password?
            </span>
          </div>
          <button
            onClick={handleSignUp}
            className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold"
          >
            Sign Up
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-400 text-bice-blue text-base p-2 rounded-lg mb-6 hover:bg-bice-blue hover:text-white font-semibold"
          >
            <FcGoogle className=" w-6 h-6 inline mr-2" />
            Sign Up with Google
          </button>
          <div className="text-center text-bice-blue">
            Already have an account? {""}
            <span
              onClick={() => router.push("/sign-in")}
              className="font-bold text-bice-blue cursor-pointer"
            >
              Go back to Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
