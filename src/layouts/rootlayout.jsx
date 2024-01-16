import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="bg-gray-100 text-gray-800 py-5 w-screen ">
        <nav className="flex justify-center space-x-4">
          {" "}
          {/* Menggunakan w-screen untuk lebar penuh */}
          <NavLink to="/" className="hover:border-black hover:transition hover:border-b-2 hover:duration-500">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:border-black hover:transition hover:border-b-2 hover:duration-500">
            About
          </NavLink>
          <NavLink to="/blogs" className="hover:border-black hover:transition hover:border-b-2 hover:duration-500">
            Blogs
          </NavLink>
        </nav>
      </div>
      <div className="pt-5">
      <Outlet />
      </div>
    </>
  );
}
export default RootLayout;
