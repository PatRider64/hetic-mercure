import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
             style={{width: "280px", height: "100vh"}}>
            <NavLink to="/"
                     className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Accueil</span>
            </NavLink>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink to="/user-list" className="nav-link text-white">
                        User List
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link text-white">
                        Se connecter
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/account" className="nav-link text-white">
                        Profil
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}