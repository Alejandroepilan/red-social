import React, { Fragment } from "react";
import Dummy from "../components/Dummy";
import Posts from "../components/Posts";
import {
  HomeIcon,
  UserIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import viteLogo from "../../public/vite.svg";

const TestPage = () => {
  const { user } = useAuth();
  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden text-black">
      <nav className="grid grid-cols-3 bg-white py-4 px-6 mb-8 drop-shadow-sm shadow-sm">
        <div className="flex items-center justify-start">
          <img src={viteLogo} />
          <a className="flex items-center pl-2 font-bold">Red Social</a>
        </div>
        <div className="relative flex items-center justify-center">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar"
            className="bg-gray-50 rounded-2xl h-full px-4 pl-10 focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="flex items-center px-3 h-full bg-yellow-300 rounded-2xl">
            <PlusCircleIcon className="h-6 w-6" />
            <a className="pl-1">Crear</a>
          </button>
          <img src={avatarUrl} className="w-10 h-10 ml-5 rounded-full" />
        </div>

        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 px-8 overflow-y-auto">
          <div className="bg-white mb-8 rounded-2xl p-4 drop-shadow-sm">
            <ul>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl text-yellow-400">
                <HomeIcon className="h-6 w-6" />
                <span className="pl-4">Inicio</span>
              </li>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <UserIcon className="h-6 w-6" />
                <span className="pl-4">Perfil</span>
              </li>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <BellAlertIcon className="h-6 w-6" />
                <span className="pl-4">Notificaciones</span>
              </li>
              <li className="flex p-3 my-2 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <Cog6ToothIcon className="h-6 w-6" />
                <span className="pl-4">Ajustes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 px-8 overflow-y-auto">
          <Posts />
        </div>

        <div className="w-1/4 px-8 overflow-y-auto">
          <Dummy />
          <Dummy />
          <Dummy />
          <Dummy />
        </div>
      </div>
    </div>
  );
};

export default TestPage;

/*
<div className="absolute inset-0 flex justify-center items-center z-10">
  <div className="absolute w-60 h-full bg-red-500 opacity-5"></div>
  <div className="absolute h-1 w-full bg-red-500"></div>
</div>
*/
