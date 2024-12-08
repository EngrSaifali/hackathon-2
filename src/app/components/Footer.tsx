export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-11 md:flex md:justify-between md:items-start">
        <div className="footer-header mb-8 md:mb-0 ml-11">
          <h2 className="text-xl font-semibold text-black mb-12">Funiro.</h2>
          <address className="footer-left-text text-sm text-gray-400 not-italic">
            400 University Drive Suite 200 Coral <br />
            Gables, FL 33134 USA
          </address>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-16">
          {/* Links */}
          <div>
            <h3 className="footer-center-heading text-sm font-semibold text-gray-400 mb-12">
              Links
            </h3>
            <ul className="footer-center-text space-y-10">
              <li>
                <a href="#" className="text-sm text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="footer-center-heading text-sm font-semibold text-gray-400 mb-12">
              Help
            </h3>
            <ul className="footer-center-text space-y-10">
              <li>
                <a href="#" className="text-sm text-black">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 md:mt-0 mr-32">
          <h3 className="footer-center-heading text-sm font-semibold text-gray-400 mb-12">
            Newsletter
          </h3>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow border-b border-black focus:outline-none text-sm text-gray-600 px-1 py-1"/>
            <button className="subscribe text-sm font-medium text-black border-b border-black ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="copyright text-left text-sm text-black mt-8 border-t border-gray-300 pt-4 ml-7">
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
}