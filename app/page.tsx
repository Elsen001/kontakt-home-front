import Category from "@/components/main/Category/Category";
import OfferContainer from "@/components/main/Offers/offerContainer/OfferContainer";
import Services from "@/components/main/services/Services";
import SliderPartner from "@/components/main/Slider/SliderPartner";


export default function Page() {
  return (
    <>
      <Category/>
      <SliderPartner />
      <Services/>
      <OfferContainer/>
    </>
  );
}
