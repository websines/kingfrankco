import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReviewSlider from "@/components/ReviewSlider";
import SaleDropdown from "@/components/SaleDropdown";

export default function About() {
  return (
    <div className="bg-white">
      <SaleDropdown />
      About
      <CTASection />
      <ReviewSlider />
      <Footer />
    </div>
  );
}
