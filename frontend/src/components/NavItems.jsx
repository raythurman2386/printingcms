import { Link } from "react-scroll"

const NavItems = () => {
  return (
    <>
        <li>
            <Link
            spy
            smooth="easeInOutQuart"
            to="services" className='hover:text-primary'>Services</Link>
        </li>
        <li>
            <Link
            spy
            smooth="easeInOutQuart"
            to="materials" className='hover:text-primary'>Materials</Link>
        </li>
        <li>
            <Link
            spy
            smooth="easeInOutQuart"
            to="about" className='hover:text-primary'>About</Link>
        </li>
        <li>
            <Link
            spy
            smooth="easeInOutQuart"
            to="affiliates" className='hover:text-primary'>Affiliates</Link>
        </li>
        <li>
            <Link
            spy
            smooth="easeInOutQuart"
            to="contact" className='hover:text-primary'>Contact</Link>
        </li>
    </>
  )
}

export default NavItems
