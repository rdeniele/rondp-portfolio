import Link from 'next/link';

const AdminNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/admin/projects">Manage Projects</Link>
                </li>
                <li>
                    <Link href="/admin/projects/new">Add New Project</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;