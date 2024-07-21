import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function Navbar() {
    const location = useLocation();

    const isFrenchPage = location.pathname.includes('/Fr');

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-mydarkgreen fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-mylightgreen mx-2" to="">
                    <Row>
                        <Col className="mx-2 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-journal-bookmark me-0" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"/>
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                            </svg>
                        </Col>
                        <Col className="m-0 p-0">
                            <h1 className="study mt-1">{isFrenchPage ? 'Étudiez Intelligemment' : 'Study Smart'}</h1>
                        </Col>
                    </Row>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex">
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/Tutors"><h3>{isFrenchPage ? 'Tuteurs' : 'Tutors'}</h3></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/Planner"><h3>{isFrenchPage ? 'Planificateur' : 'Planner'}</h3></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/Timer"><h3>{isFrenchPage ? 'Minuteur' : 'Timer'}</h3></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/FAQ"><h3>FAQ</h3></Link>
                            </li>
                            {isFrenchPage ? (
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to=""><h3>En</h3></Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/Fr"><h3>Fr</h3></Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
