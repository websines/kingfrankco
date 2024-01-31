import CTASection from "@/components/CTASection";
import ListSection from "@/components/ListSection";
import SaleDropdown from "@/components/SaleDropdown";

export default function Home() {
  return (
    <div className="bg-white">
      <SaleDropdown />
      <ListSection />
      <CTASection />
    </div>
  );
}
