import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="absolute navbar bg-base-100 z-10 bg-transparent hover:bg-white hover:bg-opacity-10 " >
            <ul className="flex justify-between inline-block text-white  text-lg w-full px-40 menu menu-horizontal">
                <_Option main={{to: "/", text: "Home"}}/>
                <_Option
                    main={{to: "/laboratory", text: "Laboratory"}}
                    submenu={[
                        {to: "/laboratory/notebook", text: "Notebook"},
                        {to: "/laboratory/safety", text: "Safety"},
                    ]}>
                </_Option>
                <_Option
                    main={{to: "/social-impact", text: "Social Impact"}}
                    submenu={[
                        {to: "/human-practices", text: "Integrated Human Practices"},
                        {to: "/education", text: "Education"},
                        {to: "/communication", text: "Communication"},
                        {to: "/sustainable", text: "Sustainable"},
                    ]}>
                </_Option>
                <_Option main={{to: "/team", text: "Team"}}/>
                <_Option main={{to: "/awards", text: "awards"}}/>
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

function _Option(props) {
    if (props.submenu == null || props.submenu.isEmpty) {
        return (
            <li>
                <a>
                    <Link to={props.main.to}>
                        {props.main.text}
                    </Link>
                </a>
            </li>
        );
    } else {
        return (
            <li>
                <a>
                    <Link to={props.main.to}>
                        {props.main.text} {<ArrowDownSvg/>}
                    </Link>
                </a>
                <ul className=" bg-white text-black ">
                    {props.submenu.map(function (it) {
                        return <li className="inline-block">
                            <Link to={it.to}>
                                <a>{it.text}</a>
                            </Link>
                        </li>
                    })}
                </ul>
            </li>
        );
    }
}