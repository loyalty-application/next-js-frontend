import React from "react";
import Link from "next/link";
import Image from "next/image";
import card from ".././public/images/card.png";

const Signup = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              We're glad to have you here!
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/Login"
                title=""
                className="font-medium text-blue-800 transition-all duration-200 hover:underline "
              >
                Login
              </Link>
            </p>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-yellow-500 focus:bg-white caret-yellow-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-yellow-500 focus:bg-white caret-yellow-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-yellow-500 focus:bg-white caret-yellow-600"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    className="w-5 h-5  text-blue-800 bg-white border-gray-200 rounded"
                  />

                  <label
                    for="agree"
                    className="ml-3 text-sm font-medium text-gray-500"
                  >
                    I agree to Postcraft’s{" "}
                    <a
                      href="#"
                      title=""
                      className=" text-blue-800 hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      title=""
                      className=" text-blue-800 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div>
                  <Link
                    href="/Dashboard"
                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-500 bg-[#183483] border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <Image src={card} />

            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-black">
                Transaction made easy
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
