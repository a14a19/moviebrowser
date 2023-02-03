import Hero from "./hero";

const AboutView = () => {
    return (
        <>
            <Hero text='About Us' />
            <div className="container-fluid forheight">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Movie Browser app key features:
                            <br />
                            <li>Search functionality</li>
                            <li>Wishlist</li>
                            <li>Mobile responsive</li>
                            <li>Bootstrap used for CSS</li>
                            <p>
                                The movie database <a href="https://www.themoviedb.org/login" className="text-decoration-none">(TMBD)</a> site was used to fetch data from backend.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;