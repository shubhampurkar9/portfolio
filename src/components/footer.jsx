import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"

const socialLinks = [
	{
		id: 1,
		icon: <FaInstagram />,
		url: 'https://www.instagram.com/shubhampurkar?igsh=MzY1NDJmNzMyNQ==',
	},
	{
		id: 2,
		icon: <FaGithub />,
		url: 'https://github.com/shubhampurkar9',
	},
	{
		id: 3,
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/shubham-purkar/',
	}
];

const AppFooter = () => {
	return (
    <div className="w-full text-gray-300 flex justify-center p-2 bg-gradient-to-r from-[#0e0e0f] to-[#092140]">
      <div className="pt-16 sm:pt-30 pb-8 border-primary-light">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-12">
          <p className="text-3xl sm:text-4xl text-[#dee2e8] mb-5 items-center">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-[#070f1c] hover:text-[#3d3fe1] hover:scale-110 cursor-pointer rounded-xl bg-gray-50 hover:bg-gray-100 shadow-lg hover:shadow-indigo-500/25 p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <div className="font-general-regular flex justify-center items-center text-center">
          <div className="text-lg text-[#dee2e8]">
            &copy; {new Date().getFullYear()}
            <a
              href="https://github.com/realstoman/react-tailwindcss-portfolio"
              target="__blank"
              className="hover:underline hover:text-indigo-600 ml-1 duration-500"
            >
              Portfolio
            </a>
            .
            <a
              href="https://stoman.me"
              target="__blank"
              className="text-secondary-dark font-medium hover:underline hover:text-indigo-600 ml-1 duration-500"
            >
              Shubham Purkar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;