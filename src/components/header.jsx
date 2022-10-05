export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">iGEM CEM WIKI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Team</a>
          </li>
          <li tabIndex={0}>
            <a>
              Investigación
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 11</a>
              </li>
              <li>
                <a>Submenu 21</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Laboratory</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Awards</a>
          </li>
          <li>
            <a>Social Impact</a>
          </li>
          <li>
            <a>Safety Project</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
