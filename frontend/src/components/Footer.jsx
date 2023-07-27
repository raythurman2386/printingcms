import { FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="footer flex flex-col-reverse lg:flex-row items-center p-4 bg-neutral text-neutral-content justify-center lg:justify-evenly">
      <div className="items-center grid-flow-col">
        <p>Copyright © {date} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 justify-center md:place-self-center md:justify-self-end">
        <a
          href="https://www.instagram.com/saiyanprints/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaInstagram size={26} />
        </a>
        <a
          href="https://www.facebook.com/Saiyanprints"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaFacebook size={26} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
