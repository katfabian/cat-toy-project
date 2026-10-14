import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="hero-tag">
                    🐾 Designed for Every Cat 
                </p>
                <h1>
                    The toy they can't <br/>
                    stop rolling
                </h1>
                <p className="hero-description">
                    Inspired by the humble milk carton ring — 
                    a lightweight, safe, and endlessly engaging toy 
                    that taps into your cat's natural hunting instincts.
                </p>
                <div className="hero-buttons">
                    <button className="primary-btn">
                        Shop Now
                    </button>
                    <button className="secondary-btn">
                        Learn More
                    </button>
                </div>
                <div className="hero-features">
                    <div className="feature">
                        <span className="feature-icon">✅</span>
                        <span>Non-toxic Materials</span>
                   
                        <div className="feature">
                        <span className="feature-icon">🪶</span>
                        <span>Ultra Lightweight</span>
                        </div>
                         <div className="feature">
                        <span className="feature-icon">🔇</span>
                        <span>Quiet Play</span>
                        </div>
                     </div>
                </div>
                </div>
                <div className="hero-right">
                      <div className="main-ring"></div>

                      <div className="blue-ring"></div>

                      <div className="green-ring"></div>

                      <div className="yellow-ring"></div>
                </div>
            
        </section>
    );

}

export default Hero;