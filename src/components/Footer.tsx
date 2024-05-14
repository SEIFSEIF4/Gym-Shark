const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <h6 className="text-white text-lg uppercase mb-2">About</h6>
            <p className="text-justify">
              Our gym, <strong>GymFlex</strong>, believes in making fitness
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
            <h6 className="text-white text-lg uppercase mb-2">Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="">NextJs</a>
              </li>
              <li>
                <a href="">UI Design</a>
              </li>
              <li>
                <a href="">JavaScript</a>
              </li>
              <li>
                <a href="">Tailwind</a>
              </li>
              <li>
                <a href="">Html</a>
              </li>
              <li>
                <a href="">Css</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h6 className="text-white text-lg uppercase mb-2">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-2/3">
            <p className="text-center md:text-left text-sm">
              &copy; 2024 All Rights Reserved by{" "}
              <a href="#" className="text-blue-500">
                Scanfcode
              </a>
              .
            </p>
          </div>

          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <ul className="flex justify-end">
              <li className="mx-2">
                <a className="social-icon" href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="mx-2">
                <a className="social-icon" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mx-2">
                <a className="social-icon" href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li className="mx-2">
                <a className="social-icon" href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
