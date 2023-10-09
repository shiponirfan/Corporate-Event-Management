import { Helmet } from "react-helmet-async";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Corporate Event Management</title>
      </Helmet>
            <BannerSlider></BannerSlider>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <CallToAction></CallToAction>
            <MarqueeSlider></MarqueeSlider>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;