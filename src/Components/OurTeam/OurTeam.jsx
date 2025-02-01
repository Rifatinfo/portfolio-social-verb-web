import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa"; // Import required icons
import TeamPageTitle from "./TeamPageTitle";


const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/IMG_3879-1-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://www.twitter.com/johndoe',
        github: 'https://www.github.com/johndoe',
        facebook: 'https://www.facebook.com/johndoe'
      },
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/pp-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://www.twitter.com/janesmith',
        github: 'https://www.github.com/janesmith',
        facebook: 'https://www.facebook.com/janesmith'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/IMG_3876-288x326.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/IMG_3877-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/IMG_1057-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/DSC07072-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/IMG_1038-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-30-at-2.13.29-PM-288x326.jpeg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2024/12/IMG_1047-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2025/01/IMG_20241014_202442-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
    {
      name: 'Alice Johnson',
      role: 'Lead Developer',
      image: 'https://socialverb.com/wp-content/uploads/2021/11/IMG_1012-288x326.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alicejohnson',
        twitter: 'https://www.twitter.com/alicejohnson',
        github: 'https://www.github.com/alicejohnson',
        facebook: 'https://www.facebook.com/alicejohnson'
      },
    },
  ];

  const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
    facebook: FaFacebook
  };

  return (
    <div className="team-section py-16 max-w-7xl mx-auto">
      <TeamPageTitle></TeamPageTitle>
      <div className="team-members grid grid-cols-1 gap-2 md:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            className="relative  h-[350px] overflow-hidden group rounded-lg shadow-lg border border-gray-200"
            key={index}
          >
            {/* Grayscale Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* Sliding Overlay */}
            <div className="absolute inset-0 bg-[#DD0429] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-md">{member.role}</p>

              {/* Social Media Icons */}
              <div className="mt-4 flex justify-center gap-4">
                {Object.keys(member.socials).map((socialPlatform) => {
                  const Icon = socialIcons[socialPlatform];
                  return (
                    <a
                      href={member.socials[socialPlatform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={socialPlatform}
                      className="text-white hover:text-black transition duration-300 transform hover:scale-110"
                    >
                      <Icon className="text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
