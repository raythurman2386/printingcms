const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 flex-row-reverse lg:flex-row">
        <div className="flex-1 justify-end lg:justify-start">
            <p className="px-5 py-2 font-semibold disabled normal-case text-xl text-accent">Saiyan Prints</p>
        </div>
        <div className="hidden lg:flex flex-none">
            <ul className="menu menu-horizontal p-0">
                <li>
                    <a href="#services" className='hover:text-accent'>Services</a>
                </li>
                <li>
                    <a href="#materials" className='hover:text-accent'>Materials</a>
                </li>
                <li>
                    <a href="#about" className='hover:text-accent'>About</a>
                </li>
                <li>
                    <a href="#affiliates" className='hover:text-accent'>Affiliates</a>
                </li>
                <li>
                    <a href="#contact" className='hover:text-accent'>Contact</a>
                </li>
            </ul>
        </div>
        <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                <li>
                    <a href="#services" className='hover:text-accent'>Services</a>
                </li>
                <li>
                    <a href="#materials" className='hover:text-accent'>Materials</a>
                </li>
                <li>
                    <a href="#about" className='hover:text-accent'>About</a>
                </li>
                <li>
                    <a href="#affiliates" className='hover:text-accent'>Affiliates</a>
                </li>
                <li>
                    <a href="#contact" className='hover:text-accent'>Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar