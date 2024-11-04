import { url } from "inspector";

export default function MyLinks() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Kvernhaug",
      logo: "/images/GitHub_Logo.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kvernhaug/",
      logo: "/images/LinkedIn-Blue.png",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      logo: "/images/yt_logo_rgb_light.png",
    },
    {
      name: "OnlyFans",
      url: "https://revivecounseling.org/porn-addiction",
      logo: "/images/OnlyFans_Logo_Full_Blue.png",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#F5F5F5] min-h-100vh max-h-100vh"
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '200px',
            height: '60px',
            margin: '20px 0', // Space between logos
            textAlign: 'center',
          }}
        >
          <img
            src={link.logo}
            alt={`${link.name} logo`}
          />
        </a>
      ))}
    </div>
  );
}
