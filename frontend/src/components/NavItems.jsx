import { Link } from "react-scroll";

const NavItems = ({ setIsVisible }) => {
  return (
    <>
      <li>
        <Link
          spy
          smooth="easeInOutQuart"
          to="services"
          duration={800}
          onClick={() => setIsVisible(false)}
          className="hover:text-primary"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          spy
          smooth="easeInOutQuart"
          to="materials"
          duration={800}
          onClick={() => setIsVisible(false)}
          className="hover:text-primary"
        >
          Materials
        </Link>
      </li>
      <li>
        <Link
          spy
          smooth="easeInOutQuart"
          to="about"
          duration={800}
          onClick={() => setIsVisible(false)}
          className="hover:text-primary"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          spy
          smooth="easeInOutQuart"
          to="affiliates"
          duration={800}
          onClick={() => setIsVisible(false)}
          className="hover:text-primary"
        >
          Affiliates
        </Link>
      </li>
      <li>
        <Link
          spy
          smooth="easeInOutQuart"
          to="contact"
          duration={800}
          onClick={() => setIsVisible(false)}
          className="hover:text-primary"
        >
          Contact
        </Link>
      </li>
    </>
  );
};

export default NavItems;
