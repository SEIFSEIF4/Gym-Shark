const Footer = () => {
const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 text-gray-300 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:gap-40">
          <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <h6 className="text-white text-lg uppercase mb-2 ">About</h6>
            <p className="text-justify pr-8">
              Our gym, <strong>GymShark</strong>, believes in making fitness
              simple and accessible to everyone. We are dedicated to assisting
              fitness enthusiasts in achieving their goals by providing
              effective workout routines and expert guidance. GymFlex focuses on
              delivering tailored fitness plans and useful tips because we
              believe that fitness should be straightforward and enjoyable.
              Whether youre into weightlifting, cardio, yoga, or HIIT, we ve got
              you covered. Lets work together to build a healthier, stronger
              you!
            </p>
          </div>

          <div className="w-full md:w-1/4">
            <h6 className="text-white text-lg uppercase mb-2">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/cardio">Cardio</a>
              </li>
              <li>
                <a href="/meals-plan">
                  Meals Plan
                </a>
              </li>
              <li>
                <a href="/store">
                  Store
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-2/3">
            <p className="text-center md:text-left text-sm">
              &copy; {currentYear} All Rights Reserved by{" "}
              <a href="#" className="text-blue-500">
                GymShark
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
