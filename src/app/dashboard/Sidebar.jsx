import NavLink from "@/components/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path: '/dashboard/manager',
        title: 'Manager'
    },
    {
        path: '/',
        title: 'Main Home'
    }
];
const Sidebar = () => {
    return (
        <aside>
            <h2 className="text-3xl font-semibold text-red-500 mb-3">Next Hero</h2>
            <ul>
                {navLinks.map(({ path, title }) =>
                    <li className="text-lg font-semibold mb-4" key={path}>
                        <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;