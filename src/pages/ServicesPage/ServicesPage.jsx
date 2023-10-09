import { Helmet } from "react-helmet-async";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";

const ServicesPage = () => {
    return (
        <div>
            <Helmet>
        <title>Services | Corporate Event Management</title>
      </Helmet>
            <Services></Services>
            <CallToAction></CallToAction>
            <MarqueeSlider></MarqueeSlider>
            <Testimonial></Testimonial>
        </div>
    );
};

export default ServicesPage;