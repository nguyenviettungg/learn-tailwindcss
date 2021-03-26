import React from "react";
import "./Section.scss";
import pic from "../components/noodles.jpg";

const Section = () => {
  return (
    <div className="px-16 py-6 bg-gray-100 md:col-span-2">
      <div className="flex md:justify-end">
        <a
          href="/"
          className="btn text-primary border-primary md:border-2 hover:bg-secondary-200 hover:text-white transition duration-500 ease-out"
        >
          Log in
        </a>
        <a
          href="/"
          className="btn text-primary ml-2 border-primary md:border-2 hover:bg-secondary-200 hover:text-white transition duration-500 ease-out"
        >
          Sign up
        </a>
      </div>
      <header>
        <h2 className="text-gray-500 text-6xl">Recipes</h2>
        <h3>For Ninjas</h3>
      </header>
      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Lastest Recipes
        </h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="card hover:shadow-2xl transition duration-500 ease-out">
            <img
              src={pic}
              alt="stew"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">5 Bean Chili Stew</span>
              <span className="block text-gray-400 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="bg-secondary-100 text-white text-xs uppercase font-bold rounded-full p-2 absolute top-0 mt-2 ml-2">
              <svg
                class="w-5 pr-1 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-2xl transition duration-500 ease-out">
            <img
              src={pic}
              alt="stew2"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">4 Bean Chili Stew</span>
              <span className="block text-gray-400 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="bg-secondary-100 text-white text-xs uppercase font-bold rounded-full p-2 absolute top-0 mt-2 ml-2">
              <svg
                class="w-5 pr-1 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
          <div className="card hover:shadow-2xl transition duration-500 ease-out">
            <img
              src={pic}
              alt="stew3"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">3 Bean Chili Stew</span>
              <span className="block text-gray-400 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="bg-secondary-100 text-white text-xs uppercase font-bold rounded-full p-2 absolute top-0 mt-2 ml-2">
              <svg
                class="w-5 pr-1 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>25 mins</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Lastest Recipes
        </h4>
      </div>
      <div className="flex justify-center">
        <div className="bg-secondary-100 text-secondary-200 btn hover:scale-125 hover:shadow-inner my-6 transition ease-out duration-500">
          Load more
        </div>
      </div>
    </div>
  );
};
export default Section;
