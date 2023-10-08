import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import image from "/images/banner/banner2.jpg";
const ContactUs = () => {
  const breadCrumbs = (
    <>
      <li>{"Contact Us"}</li>
    </>
  );
  return (
    <div>
      <Breadcrumbs
        image={image}
        name={"Contact Us"}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="bg-corporate-lightColor">
        <div className="container mx-auto grid lg:grid-cols-2 px-6 md:px-8 gap-8 justify-between items-center py-10 lg:py-20 ">
          <div className="">
            <h2 className="text-xl md:text-3xl xl:text-4xl my-4 font-bold border-b  pb-3">
              Contact Us
            </h2>
            <p className="my-2 xl:text-lg">
              At Corporate Event Management, we value your inquiries, feedback,
              and the opportunity to connect with you. Our team is here to
              assist you in any way we can to ensure that your corporate event
              needs are met with the highest level of professionalism and care.
            </p>
            <h2 className="text-xl md:text-3xl xl:text-4xl my-4 font-bold border-b  pb-3">
              We are Here for You
            </h2>
            <p className="my-2 xl:text-lg">
              Whether you are planning a corporate conference, a product launch,
              or any other event, we are here to assist you every step of the
              way. Your success is our priority, and we are dedicated to
              delivering exceptional event solutions tailored to your unique
              requirements.
            </p>
            <h2 className="text-xl md:text-3xl xl:text-4xl my-4 font-bold border-b  pb-3">
              Lets Collaborate
            </h2>
            <p className="my-2 xl:text-lg">
              At Corporate Event Management, we believe that great events start
              with great conversations. Reach out to us today, and lets begin
              discussing how we can bring your corporate event vision to life.
              We look forward to working with you and creating unforgettable
              experiences together.
            </p>
          </div>
          <div>
            <form className="flex flex-col justify-center items-center p-10 shadow bg-white rounded-md space-y-8">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full bg-corporate-lightColor"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="input input-bordered w-full bg-corporate-lightColor"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full bg-corporate-lightColor"
              />
              <textarea
                className="textarea textarea-bordered w-full bg-corporate-lightColor"
                placeholder="Message"
              ></textarea>
              <div className="w-full">
                <button className="bg-corporate-color py-3 font-medium px-12 hover:bg-black duration-300 rounded-lg text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
