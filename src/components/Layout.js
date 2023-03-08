import { Link, Outlet } from "react-router-dom";

export default function Layout() {
return (
        <div>
            <header>
                <Link to="/" >
                    <h1>Ressursarkiv</h1>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}




            