import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {

    render() {
        return (
            <nav className="container-fluid">
                <div className="row p-3">
                    <div className="col-7 col-md-6">
                        <h4 className="d-none d-sm-block pt-1">Reports Administration</h4>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 p-0">
                        <div className="buttons-container float-right">
                            <Link to="/">
                                <button className={`btn btn-secondary pointer btn-md select-button float-right rounded-0`}>Reports</button>
                            </Link>
                            <Link to="/create">
                                <button className={`btn btn-secondary btn-md pointer select-button float-right rounded-0`}>Create Report</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;

