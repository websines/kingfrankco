import AccordionComponent from "@/components/AccordionComponent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";

const faqs = [
  { question: "Great product! Highly recommended.", answer: "John Doe" },
  { question: "Amazing service. Will buy again.", answer: "Jane Smith" },
  // Add more reviews as needed
];

export default function FAQs() {
  return (
    <div className="bg-white">
      <SaleDropdown />
      <div className="flex flex-col justify-center items-center my-8 p-8 md:p-16 text-black">
        <h1 className="mb-8 md:text-4xl text-3xl font-semibold tracking-wide">
          Frequently Asked Questions
        </h1>
        <div className="my-4 p-2 w-full">
          <AccordionComponent faqs={faqs} />
        </div>
      </div>
      <CTASection />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
