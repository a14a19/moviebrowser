import Hero from "./hero";

const Home = () => {
    return (
        <>
            <Hero text='React 201 from Home' />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Some text for Home page here.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;