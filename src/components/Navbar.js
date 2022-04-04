import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">
                    <Link to="/" className="d-flex align-items-center text-white">
                        <strong>Lançamentos SpaceX</strong>
                    </Link>
                </h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-white" to="/">
                        Início
                    </Link>
                    <Link className="p-2 text-white" to="/next">
                        Próximos Lançamentos
                    </Link>
                    <Link className="p-2 text-white" to="/past">
                        Lançamentos Passados
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
