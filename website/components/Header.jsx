import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import darkTheme from "../hooks/dark";
import { Popover, Transition } from "@headlessui/react";
const navItems = [{ label: "Ana sayfa", href: "/", icon: "fa-regular fa-house" }];
const Header = () => {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const [colorTheme, setTheme] = darkTheme();

  const navbar = () => {
    setActive(true);
  };
  return (
    <>
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto sticky-navbg-black bg-opacity-60 text-gray-100">
        <div
          className="flex items-center dark:text-[#454FBF] text-[#5865F2] hover:text-[#454FBF] dark:hover:text-[#5865F2]"
          style={{ fontSize: "15px" }}
        >
          <Popover className="order-first mr-5 flex-shrink-0 relative float-right ml-8">
            {({ open }) => (
              <>
                <Popover.Button onClick={() => (window.location.href = "/")}>
                  {" "}
                  <img
                    src={`images/test.png`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </Popover.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel className="absolute z-10"></Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {navItems.map((item) => (
            <Link legacyBehavior href={item.href} key={item.href}>
              <a
                style={{
                  fontSize: "15px",
                  position: "relative",
                  right: "-30px",
                }}
                className={`${
                  router.asPath === `${item.href}` &&
                  "dark:text-[#454FBF] text-[#5865F2]"
                } hover:text-[#454FBF] dark:hover:text-[#5865F2] font-bold  mr-2 p-1 sm:p-4 text-lg`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
