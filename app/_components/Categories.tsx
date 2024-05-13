import Link from "next/link";
import * as React from "react";

export default function Categories() {
  return (
    <div className="flex flex-col gap-4 justify-start items-start pt-12">
      <p className="text-2xl font-bold">Catégories</p>
      <div className="flex gap-4 flex-wrap justify-start items-start ">
        <div className="px-4 py-2 bg-gray-400 rounded-full">
          <Link href="#">#Python</Link>
        </div>
        <div className="px-4 py-2 bg-gray-400 rounded-full">
          <Link href="#">#React</Link>
        </div>
        <div className="px-4 py-2 bg-gray-400 rounded-full">
          <Link href="#">#Flutter</Link>
        </div>
        <div className="px-4 py-2 bg-gray-400 rounded-full">
          <Link href="#">#Tailwind</Link>
        </div>
      </div>
    </div>
  );
}
