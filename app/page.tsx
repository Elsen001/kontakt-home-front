import OfferContainer from "@/components/main/Offers/offerContainer/OfferContainer";
import Services from "@/components/main/services/Services";
import Slider from "@/components/main/Slider/Slider";
import SliderPartner from "@/components/main/Slider/SliderPartner";


export default function Page() {
  return (
    <>
      <Slider />
      <SliderPartner />
      <Services />
      <OfferContainer />
    </>
  );
}
