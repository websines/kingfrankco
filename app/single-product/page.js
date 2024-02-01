import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import AccordionComponent from "@/components/AccordionComponent";

export default function SingleProduct() {
  const faqs = [
    { question: "Great product! Highly recommended.", answer: "John Doe" },
    { question: "Amazing service. Will buy again.", answer: "Jane Smith" },
    // Add more reviews as needed
  ];
  const images = [
    "img4.jpg",
    "img5.jpg",
    // Add more image paths as needed
  ];
  return (
    <>
      <SaleDropdown />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8">
        <ImageGallery images={images} />
        <div className="flex flex-col justify-start items-start p-4">
          <div className="mt-4 text-left">
            <span className="text-md font-light text-gray-500 my-2">
              Brompton
            </span>
            <p className="font-semibold text-3xl text-black my-4">
              A Line Papyrus White
            </p>
            <p className="font-semibold text-gray-500 text-lg">$1850</p>
            <div className="flex flex-row items-center justify-start mt-2">
              <div className="bg-green-500 rounded-full animate-ping w-2 h-2" />
              <p className="mx-2 text-md font-semibold text-black">In Stock</p>
              <Link
                href="https://wa.me/919547071934/"
                className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
              >
                <FaWhatsapp className="text-white" />
                <span className="text-white font-semibold">Buy Now</span>
              </Link>
            </div>
          </div>
          <span className="mt-8 mb-4">
            Availability:{" "}
            <span className="font-semibold">
              This bike is available for immediate purchase. Buy now and start
              riding today!
            </span>
          </span>
          <span className="my-4">
            Color: <span className="font-semibold">Papyrus White</span>
          </span>
          <span className="my-4">
            Weight: <span className="font-semibold">11.5 kg</span>
          </span>
          <span className="my-4">
            Handlebar type: <span className="font-semibold">Mid (M)</span>
          </span>
          <span className="my-4">
            Mudguards: <span className="font-semibold">Not included</span>
          </span>
          <span className="my-4">
            Rake: <span className="font-semibold">Not included</span>
          </span>
          <span className="my-4">
            Chainring Size:
            <span className="font-semibold">44T</span>
          </span>
        </div>
      </div>
      <div class="border-b border-gray-200 dark:border-gray-700 my-8">
        <nav
          class="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-amber-600 hs-tab-active:text-amber-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-amber-600 focus:outline-none focus:text-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-amber-500 active"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Description
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-amber-600 hs-tab-active:text-amber-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-amber-600 focus:outline-none focus:text-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-amber-500"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            FAQs
          </button>
        </nav>
      </div>

      <div class="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          className="w-full flex flex-row justify-center items-center text-center"
        >
          <p class="text-gray-500 font-medium dark:text-gray-400 md:w-[80%]">
            This New 2023 Brompton A Line comes in a new, classy shade of white
            called "Papyrus White" that is best described as pearl white.
            <br />
            * Admire this white beauty! Minimalist, beautiful, and eye-catching.
            White easily matches any dress color, is gender neutral, making this
            a perfect bike to share with your family and loved one. Anyone will
            look neat and sleek with the A Line 😎 <br />
            * 3-Speed, i.e. the most reliable Brompton type. When it comes to
            choosing between 3- or 6-speed, more isn't always better. 3-Speed is
            the most reliable and versatile Brompton type—that's not coming from
            me; Brompton says it—because it uses the venerable Sturmey Archer
            hub. All the gears are enclosed in this hub enclosure, which means
            gear cogs are protected from rain, dirt, dust, etc. 3-Speed Sturmey
            Archer hub is virtually bomb-proof!
            <br />
            * Get the same authentic Brompton feel without spending a bomb! The
            A Line and C Line has the exact same body. The very minor
            differences between the A Line and C Line doesn't change or break
            that long-standing Brompton ride feel.
            <br />
            * 100% Authentic & Brand New in box - Unopened. 100% Unused.
            Register on Brompton.com with the serial number on the bike to enjoy
            5 +additional 2 years warranty. I will show you how and do it with
            you on the spot so you can be assured you are getting an Authentic
            piece.
            <br />
          </p>
        </div>
        <div
          id="horizontal-alignment-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
          className="w-full flex flex-row justify-center items-center text-center"
        >
          <AccordionComponent faqs={faqs} />
        </div>
      </div>
      <ReviewSlider />
      <Footer />
    </>
  );
}
