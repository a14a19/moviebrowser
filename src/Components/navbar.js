import { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";

const Navbar = ({ searchText, setSearchTexts }) => {
    const history = useNavigate();

    const [btn, setBtn] = useState(true)

    const updateSearchText = (e) => {
        e.preventDefault()
        history('/search')
        setSearchTexts(e.target.value)
    }

    const btnclicked = (e) => {
        e.preventDefault()
        setBtn(current => !current)
    }

    const searchBtnClicked = (e) => {
        e.preventDefault()
    }

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie Browser</Link>
                <button
                    className={btn ? "navbar-toggler collapsed" : "navbar-toggler"}
                    onClick={btnclicked}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={btn ? "false" : "true"}
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={btn ? "collapse navbar-collapse" : "collapse navbar-collapse show"} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/wishlist">Wishlist</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="gotosomewhere" tabIndex="-1" aria-disabled="true">Coming Soon</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            value={searchText} 
                            onChange={updateSearchText} 
                        />
                        {/* <button 
                            className="btn btn-outline-primary"
                            type="submit"
                            onClick={searchBtnClicked}
                        >
                            Search
                        </button> */}
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Navbar;