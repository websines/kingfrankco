import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";

export default function FAQs() {
  return (
    <div className="bg-white">
      <SaleDropdown />
      FAQS
      <CTASection />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
