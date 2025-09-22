const Footer = () => {
  return (
    <div className="border-t border-t-gray-700 flex flex-col justify-center items-center pt-6 absolute bottom-0 right-0 left-0">
      <div className="flex gap-4">
        <a
          href="https://github.com/Mohammadtaha1122"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          <span
            className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
          >
            GitHub<span></span>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammadtaha-maleki-885170384"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <img
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
            src="https://static.licdn.com/aero-v1/sc/h/5bukxbhy9xsil5mb7c2wulfbx"
            alt="karlancerLogo"
            width={26}
            height={26}
          />
          <span
            className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
          >
            LinkedIn
          </span>
        </a>
        <a
          href="https://www.karlancer.com/profile/825958"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <img
            className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
            src='https://cdn.karlancer.com/images/favicon.ico'
            alt="karlancerLogo"
            width={26}
            height={26}
          />
          <span
            className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 text-black"
          >
            karlancer
          </span>
        </a>
      </div>
      <div
        lang="en"
        className="w-full mt-5 text-center bg-sky-600 text-white text-md font-light py-1">made by MohammadTaha</div>
    </div>
  );
};

export default Footer;
