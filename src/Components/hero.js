const Hero = ({ text, backdrop }) => {
    return (
        <aside className="bg-dark text-white p-5 hero-container mb-3">
            <h1 className="hero-text">
                {text}
            </h1>
            {backdrop &&
                <div className="hero-backdrop" style={{ backgroundImage: `url(${backdrop})` }}></div>
            }
        </aside>
    )
}

export default Hero;