import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark p-5">
                <div className="align-items-center justify-content-center">
                    <Link to='/about' className="col text-light text-decoration-none">
                        About
                    </Link>
                    <p className="col">
                        <a href="https://a14a19.github.io/" className="text-light text-decoration-none">
                            &copy; Anas Ahmed
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;