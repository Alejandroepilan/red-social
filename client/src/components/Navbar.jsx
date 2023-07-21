import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="bg-white w-full h-20 shadow-md border-b-[1px] px-4">
      <div className="bg-red-200 ml-80 flex items-center">
        <span className=" text-black font-medium">Antonio</span>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              <ChevronDownIcon
                className=" h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Perfil
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      onClick={() => {
                        logout();
                      }}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Cerrar sesión
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
