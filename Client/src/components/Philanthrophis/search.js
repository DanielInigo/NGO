import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Headphil from "./headphil";

const Search=() => {
  return (
    <div>
        <Headphil/>
      <div className="relative w-[300px] mt-[30px] shadow-2xl m-auto">
        <AiOutlineSearch className="h-[50px] w-[50px] p-[4px] absolute box-border border-[4px] top-[50%] border-black translate-y-[-50%] " />
        <input
          className="h-[50px] box-border pl-[50px] w-[400px] border-[4px] border-black"
          type="text"
          placeholder="Type to Search"
        />
      </div>
      <div className="flex justify-around mt-[3rem]">
      <div className="relative w-full lg:max-w-sm flex">
        <div className="text-lg font-bold">Location:</div>
            <select className="w-20% p-2.5 text-gray-500 ml-3 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Assam</option>
                <option>Bihar</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Telangana</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Tripura</option>
            </select>
        </div>
        <div className="relative w-full lg:max-w-sm flex">
        <div className="text-lg font-bold ">NGO TYPE:</div>
            <select className="w-20% p-2.5 text-gray-500 ml-3 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Health</option>
                <option>Food</option>
                <option>Education</option>
                <option>Clothes</option>
            </select>
        </div>
        </div>
    </div>
  );
}

export default Search;
