"use client";
import React, { useState, useEffect } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";

const Admin = (): React.JSX.Element => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");
  const [user, loading] = useAuthState(auth);

  const handleClick = (): void => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setAuthError(`Could not sign in: ${authError}`);
      console.log(authError);
    }
    router.push("/admin-dashboard");
  };

  useEffect(() => {
    if (user) {
      const checkAdminRole = async () => {
        try {
          const userDoc = doc(db, "users", user?.uid); // get users by id
          const docSnap = await getDoc(userDoc); //wait to get each user and the id
          if (docSnap?.exists() && docSnap?.data()?.role === "admin") {
            router.push("/admin-dashboard");
          } else {
            auth.signOut();
            setAuthError("You are not authorized to access this page.");
            console.log("You are not authorized to access this page.");
          }
        } catch (error) {
          console.error("Error getting document: ", error);
        }
      };
      checkAdminRole();
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
      <div className="relative lg:w-[75%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:space-y-0 md:space:x-4 lg:space-x-8">
        <div className="flex flex-col justify-center p-10 md:p-8 xl:p-14">
          <div className="flex flex-row gap-2 items-center py-2">
            <FaCircleArrowLeft
              className="text-[40px] text-manthis-green"
              onClick={() => router.push("/")}
            />
            <p className="text-bice-blue">Back to home</p>
          </div>
          <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-manthis-green">
            {" "}
            Welcome, Admin!
          </span>
          <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-bice-blue">
            Welcome back Admin! Please enter your details.
          </span>
          <div className="py-2 md:py-4 ">
            <label className="text-lg mb:text-xl mb-2 text-manthis-green">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="JaneDoe@email.com"
            />
          </div>
          <div className=" py-2 md:py-4 ">
            <label className="text-lg md:text-xl mb-2 text-manthis-green">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="JaneDoe123$"
            />
          </div>
          <button
            className="w-full bg-manthis-green text-white p-3 rounded-lg mb-6 mt-5 hover:bg-white hover:text-manthis-green hover:border hover:border-bice-blue font-semibold"
            onClick={handleClick}
          >
            Log In
          </button>
          {authError && <p>{authError}</p>}
          <div className="text-center text-bice-blue">
            Done! Proceed to the {""}
            <span
              onClick={handleClick}
              className="font-bold text-bice-blue cursor-pointer"
            >
              Admin Dashboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
