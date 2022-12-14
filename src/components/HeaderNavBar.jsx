import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderNavBar() {
  let navigate = useNavigate();

  return (
    <Menu as="div" className="relative inline-block text-left pr-2">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-100 focus:ring-teal-300">
          Navigation
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right right-0 mt-2 w-56 absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => navigate("/")}
                  className={classNames(
                    active ? "bg-teal-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  About
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => navigate("/reviews")}
                  className={classNames(
                    active ? "bg-teal-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Reviews
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => navigate("/categories")}
                  className={classNames(
                    active ? "bg-teal-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Categories
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={() => navigate("/users")}
                  className={classNames(
                    active ? "bg-teal-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Users
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
