import Link from "next/link";

const Header = () => {
  const navList = (
    <>
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <li>Add Task</li>
      <li>Contact</li>
    </>
  );
  return (
    <div className="bg-blue-400">
      <div className="navbar w-11/12 mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          <h2 className="font-bold text-xl md:text-3xl">Taskify</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 md:text-base font-semibold">
            {navList}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="border rounded-lg font-semibold btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
