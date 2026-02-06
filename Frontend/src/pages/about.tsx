function About() {
  return (
    <div className="min-h-screen w-full bg-[#2a2a2a] text-white grid place-items-center p-4">
      <div className="bg-[#333333] p-8 md:p-12 rounded-lg shadow-lg max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 tracking-wider">ABOUT US</h1>
        <p className="text-lg leading-relaxed mb-10 font-sans">
          Mithun Chakraborty is an Indian actor, film producer and entrepreneur and politician. In a career spanning over five decades, he has done 350 films, mostly in Hindi and Bengali languages, and a few in Odia, Telugu, Tamil, Kannada, and Punjabi. Referred to as "Mahaguru", he is a former Rajya Sabha Member of Parliament. Mithun Chakraborty is an Indian actor, film producer and entrepreneur and politician. In a career spanning over five decades, he has done 350 films, mostly in Hindi and Bengali languages, and a few in Odia, Telugu, Tamil, Kannada, and Punjabi. Referred to as "Mahaguru", he is a former Rajya Sabha Member of Parliament.
        </p>
        <div className="flex justify-center gap-6">
          {/* X (formerly Twitter) Icon */}
          <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;