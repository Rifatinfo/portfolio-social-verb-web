import { Link } from 'react-router-dom';
import TeamTitle from './TeamTitle';

const TeamSection = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side: Title and Description */}
        <div className="md:w-1/2 flex-1 text-center md:text-left">
          <TeamTitle></TeamTitle>
        </div>

        {/* Right Side: Button */}
        <div className="md:w-1/2 flex-1 mt-8 md:mt-0 flex justify-center md:justify-end">
          <Link to="/our-team">
            <button className="relative inline-block px-8 py-3 font-semibold hover:text-[#DD0429] text-white bg-[#DD0429] border-2 border-[#DD0429] rounded-lg group overflow-hidden">
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition duration-300 ease-out"></span>
              <span className="relative">View Our Team</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
