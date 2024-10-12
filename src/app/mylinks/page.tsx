import { url } from "inspector";

export default function MyLinks() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Kvernhaug",
      logo: "/images/GitHub_Logo.png", // Path to the GitHub logo image
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kvernhaug/",
      logo: "/images/LinkedIn-Blue.png", // Path to the LinkedIn logo image
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      logo: "/images/yt_logo_rgb_light.png", // Path to the Twitter logo image
    },
    {
      name: "OnlyFans",
      url: "https://revivecounseling.org/porn-addiction",
      logo: "/images/OnlyFans_Logo_Full_Blue.png",
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Stack logos vertically
        justifyContent: 'center',
        alignItems: 'center', // Center logos horizontally
        minHeight: '100vh', // Full height of the viewport
        backgroundColor: '#f5f5f5', // Light background to contrast logos
      }}
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
            style={{
              display: 'block', // Make sure the logo is treated as a block element
            }}
          />
        </a>
      ))}
    </div>
  );
}
