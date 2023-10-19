import NavLink from "./NavLink";

const navLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    }
];

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center container mx-auto mt-3">
            <h2 className="text-3xl font-semibold text-blue-500">Next Hero</h2>
            <ul className="flex items-center justify-center gap-7">
                {navLinks.map(({ path, title }) =>
                    <li className="text-lg font-semibold" key={path}>
                        <NavLink exact={path === '/'} activeClassName="text-white bg-red-500 py-1 px-2" href={path}>{title}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;