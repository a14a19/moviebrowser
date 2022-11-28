import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark p-5">
                <div className="row align-items-center justify-content-center">
                    <Link to='/about' className="col-1 text-light text-decoration-none">
                        About
                    </Link>
                    <p className="col-2 text-light mb-0">
                        &copy; Anas Ahmed
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;