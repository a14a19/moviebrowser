import Hero from "./hero";

const AboutView = () => {
    return (
        <>
            <Hero text='About Us' />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Some text for About page here.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;