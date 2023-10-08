import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CallToAction from "../../components/CallToAction/CallToAction";
import MarqueeSlider from "../../components/MarqueeSlider/MarqueeSlider";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import image from "/images/banner/banner4.jpg";
const AboutUs = () => {
    const breadCrumbs = (
        <>
          <li>{"About Us"}</li>
        </>
      );
  return (
    <div>
        <Breadcrumbs image={image}
        name={"About Us"}
        breadCrumbs={breadCrumbs}></Breadcrumbs>
        <div className="bg-corporate-lightColor">
        <div className="container mx-auto grid grid-cols-2 gap-8 justify-between items-center py-20 ">
        <div className="w-full h-full">
          <img className="w-full h-full object-cover rounded-md" src="/images/about.jpg" alt="about" />
        </div>
        <div>
          <h2 className="text-4xl my-4 font-bold border-b  pb-3">About US</h2>
            <p className="my-2 text-lg">Welcome to Corporate Event Management, your trusted partner in creating unforgettable corporate events that leave a lasting impression. With a passion for excellence and a commitment to innovation, we are dedicated to making your corporate gatherings extraordinary.</p>
          <h2 className="text-4xl my-4 font-bold border-b  pb-3">Who We Are</h2>
            <p className="my-2 text-lg">At Corporate Event Management, we are a team of seasoned event professionals who thrive on turning your vision into reality. With years of experience in the industry, our experts bring creativity, attention to detail, and a keen understanding of corporate event dynamics to every project</p>
          <h2 className="text-4xl my-4 font-bold border-b  pb-3">Our Mission</h2>
            <p className="my-2 text-lg">Our mission is simple: to elevate your corporate events to new heights. We believe that each event is unique, and we approach it with fresh perspectives, tailored solutions, and a touch of creativity. We strive to exceed your expectations, ensuring that your event is not only flawlessly executed but also aligns perfectly with your brands identity and objectives.</p>
        </div>
      </div>
        </div>
      
      <WhyChooseUs></WhyChooseUs>
      <CallToAction></CallToAction>
      <MarqueeSlider></MarqueeSlider>
      <Testimonial></Testimonial>
    </div>
  );
};

export default AboutUs;
