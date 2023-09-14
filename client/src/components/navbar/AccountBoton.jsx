import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useAuth } from "../../context/AuthContext";
import { HomeIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccountBoton = () => {
  const { user, logout } = useAuth();
  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";

  return (
    <>
      <Menu as="div" className="relative ml-5">
        <div>
          <Menu.Button className="relative flex rounded-full text-sm focus:outline-none">
            <span className="absolute -inset-1.5" />
            <img className="w-10 h-10 rounded-full" src={avatarUrl} />
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-2xl bg-white p-2 shadow ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/u/${user.username}`}
                  className={classNames(
                    active ? "bg-gray-50 rounded-xl" : "",
                    "block px-4 py-2 text-sm "
                  )}
                >
                  Mi perfil
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/login"}
                  onClick={() => {
                    logout();
                  }}
                  className={classNames(
                    active ? "bg-gray-50 rounded-xl" : "",
                    "block px-4 py-2 text-sm "
                  )}
                >
                  Cerrar sesión
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default AccountBoton;
