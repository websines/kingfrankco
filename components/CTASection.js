import Link from "next/link";
import React from "react";

export default function CTASection() {
  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row space-x-2 items-center justify-center relative">
        <img
          src={"/img3.jpg"}
          alt="image1"
          className="h-[570px] w-[550px] object-fill"
        ></img>
        <img
          src={"/img2.jpg"}
          alt="image2"
          className="h-[570px] w-[550px] object-fill hidden md:block"
        ></img>
        <div className="absolute top-40 bg-white h-[240px] w-[380px] md:w-[440px] flex flex-col items-center justify-center px-4">
          <span className="font-semibold text-2xl">New to KingFrankCo?</span>
          <div className="mt-4 mx-auto text-sm">
            <span>
              Don’t worry, everyone starts somewhere. We’ve put together a
              Brompton FAQ to help you get started.
            </span>
          </div>
          <div className="mx-auto my-4">
            <Link href="/faq">FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
