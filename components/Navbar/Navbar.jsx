import React from "react";
import "./Navbar.css";
import { Spacer } from "@nextui-org/spacer";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./SearchIcon";

import { Image } from "@nextui-org/image";

import Modals from "./Modal";

export const Navbar = () => {
  return (
    <div className="max-w- position=sticky">
      <nav justify="start">
        <ul
          radius="full"
          className="grid grid-cols-4 gap 4 text-2xl bg-gradient-to-tr from-gray-200 to-blue-500 shadow-lg"
        >
          <div className="flex justify-center">
            <li className="">
              <a href="/">
                <Image
                  className="w-[450px] h-auto "
                  src="/cics.png"
                  width={100}
                  height={40}
                />
              </a>
            </li>
          </div>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flex justify-between">
            <li className="nar flex items-center">
              <a href="/research" className="text-2xl ">
                Research
              </a>
            </li>
            <li className="nar flex items-center mr-5">
              <a href="/archive" className="archive text-3xl ">
                Archive
              </a>
            </li>
          </div>
          <div className="flex justify-center">
            <li className="nar flex items-center ">
              <a href="/Book" className="text-3xl ">
                Books
              </a>
            </li>
          </div>
          <div className="flex justify-center">
            <li className="flex items-center">
              <div className="search">
                <Input
                  classNames={{
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500",
                  }}
                  placeholder="Type to search..."
                  size="sm"
                  startContent={<SearchIcon size={28} />}
                  type="search"
                ></Input>
                <Spacer x={4} />
              </div>

              <div className="sign">
                <Modals />
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
