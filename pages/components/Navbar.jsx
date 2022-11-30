import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { CartContext } from "../container/context";
function Navbar() {
  const { cart, setSearch } = useContext(CartContext);
  const router = useRouter();
  function Logout() {
    router.push("/login");
  }
  return (
    <div className="rounded-lg  md:px-6 md:py-4 ">
      <div className="bg-white sticky top-0 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          <div className="flex items-center justify-between md:justify-start">
            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
            >
              <svg
                className="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/">
              <a className="font-bold text-gray-700 text-2xl">
                <div className="flex items-center">
                  <svg
                    className="fill-current h-8 w-8 mr-2"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http:www.w3.org/2000/svg"
                  >
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                  </svg>
                  <span className="font-semibold text-xl tracking-tight">
                    E&nbsp;-&nbsp;comm
                  </span>
                </div>
              </a>
            </Link>
            <div className="hidden md:flex  space-x-3 flex-1 lg:ml-8">
              <Link href="/home">
                <a className="dropdown px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                  HOME
                  <div className="dropdown-content">
                    <div className="main_table mb-4">
                      <div className="table_head flex justify-between mx-8 mt-4">
                        <div className="dropdown_text my-4">Category</div>
                        <div className="dropdown_text my-4">Category</div>
                        <div className="dropdown_text my-4">Category</div>
                      </div>
                      <div className="table_data flex  mx-3  justify-between">
                        <div className=" dropdown_text_ mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                      </div>
                      <div className="table_data flex  mx-3 justify-between">
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                      </div>
                      <div className="table_data flex  mx-3  justify-between">
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                      </div>
                      <div className="table_data flex  mx-3  justify-between">
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                      </div>
                      <div className="table_data flex mx-3 justify-between">
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                        <div className=" dropdown_text_  mx-4 my-2">
                          Coporate
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                BAG
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                BELT
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                SNEAKERS
              </a>
              <a
                href="#"
                className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                CONTACT
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                  placeholder="Search"
                />
                <svg
                  className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <Link href="/shopping-cart">
                <a className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
                  <svg
                    className="h-6 w-6 leading-none text-gray-300 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="pl-1 text-gray-500 text-md">
                    {cart.length}
                  </span>
                </a>
              </Link>

              <button
                type="button"
                className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
              >
                <img
                  src="https://avatars.dicebear.com/api/bottts/2.svg"
                  alt="bottts"
                  width="28"
                  height="28"
                  className="rounded-lg mx-auto"
                />
              </button>
            </div>
            <button
              type="button"
              className="mx-4 w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
              onClick={Logout}
            >
              <AiOutlineLogout />
            </button>
          </div>
          <div className="relative md:hidden">
            <input
              type="search"
              className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />

            <svg
              className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
