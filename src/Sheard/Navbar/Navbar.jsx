import { Link } from 'react-router-dom'
// import {logo} from '/Image/nav logo.svg'



function Navbar() {
    const navList =
        <>
            <li className='hover:text-[#FF3529] text-white  rounded ' ><Link to="/">Home</Link></li>
            <li className='hover:text-[#FF3529] text-white rounded ' ><Link to="/">Capabalitise</Link></li>
            <li className='hover:text-[#FF3529] text-white rounded ' ><Link to="/">Abouts US</Link></li>
            <li className='hover:text-[#FF3529] text-white rounded ' ><Link to="/">Careers</Link></li>




        </>
    return (

        <div className='  bg-[#090a0a] bg-opacity-15'>
            <div className='container mx-auto navbar h-15 px-1 py-0'>
                <div className="navbar-start text-white">
                    {/* responsive menu */}
                    <div className="drawer drawer-end lg:hidden z-10" >
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="drawer-button"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-gradient-to-r from-[#ed564e] to-[#e74138] text-base-content min-h-full w-56 px-4 ">
                                {navList}
                            </ul>
                        </div>
                    </div>
                    <div className='text-3xl  justify-center hidden lg:block'><Link className=""><img src='https://i.ibb.co.com/yX6m854/nav-logo-1.png' alt="" /></Link></div>
                    
                </div>
                <div className='text-3xl flex justify-center mr-9 lg:hidden'><Link className=""><img src='https://i.ibb.co.com/yX6m854/nav-logo-1.png' alt="" /></Link></div>
                {/* lg menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">

                    <Link to="/" className="p-2 text-xl font-serif bg-[#FF3529] rounded text-white hover:text-white hover:bg-[#FF3529] border-none flex justify-center items-center">Contact US</Link>
                </div>
            </div>
        </div>



    )
}

export default Navbar