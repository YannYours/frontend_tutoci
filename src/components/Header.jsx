import logo from "../assets/tutoci_logo.png";
import './components_css/Header.css'

export default function Header() {

    return (
        <header>
            <nav className='navbar navbar-expand-lg fixed-top'>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            src={logo}
                            alt="Logo TutoCI"
                            id="navbar-logo"
                            loading="lazy"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="hamburger">
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                            <span className="hamburger-line" />
                        </span>
                    </button>
                </div>
            </nav>
        </header>
    )
}