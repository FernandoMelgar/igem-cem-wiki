import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="absolute navbar bg-base-100 z-10" style={{background: "transparent"}}>
            <ul className="flex justify-between inline-block text-white text-lg w-full px-40 menu menu-horizontal">
                <Link to="/">
                    <li className="">
                        <a className="text-white" href="#">Home</a>
                    </li>
                </Link>
                <Link to="">
                    <li className="">
                        <a className="text-white" href="#">Project</a>
                    </li>
                </Link>

                <li>
                    <a>
                        <Link to="/laboratory">
                            Laboratory {<ArrowDownSvg/>}
                        </Link>
                    </a>
                    <ul className="p-2">
                        <li>
                            <Link to="/laboratory/notebook">
                                <a>Notebook</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/laboratory/safety">
                                Safety
                            </Link></li>
                    </ul>
                </li>

                <li>
                    <a>
                        <Link to="/social-impact">
                            Social Impact {<ArrowDownSvg/>}
                        </Link>
                    </a>
                    <ul className="p-2">
                        <li>
                            <Link to="/human-practices">
                                <a>Integrated Human Practices</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link to="/communication">
                                Communication
                            </Link>
                        </li>
                        <li>
                            <Link to="/sustainable">
                                Sustainability
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="">
                    <Link to="/team">
                        <a className="text-white" href="#">Team</a>
                    </Link>
                </li>
                <li className="">
                    <a className="text-white" href="#">Awards</a>
                </li>
                <li>
                    <a>
                        Parent
                        <ArrowDownSvg/>
                    </a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    );
}

function ArrowDownSvg() {
    return (
        <svg className="fill-current inline" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
             viewBox="0 0 24 24">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
        </svg>
    );
}