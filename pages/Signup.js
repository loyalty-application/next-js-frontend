import React from "react";
import Link from "next/link";
import Image from "next/image";
import card from ".././public/images/card.png";

const Signup = () => {
  return (
    <section class="bg-white">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
              We're glad to have you here!
            </h2>
            <p class="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/Login"
                title=""
                class="font-medium text-yellow-500 transition-all duration-200 hover:underline "
              >
                Login
              </Link>
            </p>

            <form action="#" method="POST" class="mt-8">
              <div class="space-y-5">
                <div>
                  <label for="" class="text-base font-medium text-gray-900">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-yellow-500 focus:bg-white caret-yellow-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" class="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email to get started"
                      class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-yellow-500 focus:bg-white caret-yellow-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" class="text-base font-medium text-gray-900">
                    {" "}
                    Password{" "}
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                      class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-yellow-500 focus:bg-white caret-yellow-600"
                    />
                  </div>
                </div>

                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    class="w-5 h-5 text-yellow-600 bg-white border-gray-200 rounded"
                  />

                  <label
                    for="agree"
                    class="ml-3 text-sm font-medium text-gray-500"
                  >
                    I agree to Postcraft’s{" "}
                    <a
                      href="#"
                      title=""
                      class="text-yellow-500 hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      title=""
                      class="text-yellow-500 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div>
                  <Link
                    href="/Dashboard"
                    class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all  bg-amber-300 text-inherit duration-300 border border-transparent rounded-md focus:outline-none"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <Image src={card}/>

            <div class="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 class="text-2xl font-bold text-center text-black">
                Transaction made easy
              </h3>
              <p class="leading-relaxed text-center text-gray-500 mt-2.5">
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
