import { NavItems } from "."

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 flex-row-reverse lg:flex-row">
        <div className="flex-1 justify-end lg:justify-start">
            <p className="px-5 py-2 font-semibold disabled normal-case text-xl text-accent">Saiyan Prints</p>
        </div>
        <div className="hidden lg:flex flex-none">
            <ul className="menu menu-horizontal p-0">
                <NavItems />
            </ul>
        </div>
        <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                <NavItems />
            </ul>
        </div>
    </div>
  )
}

export default Navbar