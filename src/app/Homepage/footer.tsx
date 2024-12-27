const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Main Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Vision */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">MORENT</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                How it works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business Relation
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Community</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Socials</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider and Bottom Footer Section */}
      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          ©2022 MORENT. All rights reserved
        </p>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
