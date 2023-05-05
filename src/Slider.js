
import ImageOne from './images/image1.jpg'
import ImageTwo from './images/image2.jpg'

function Slider() {
    return (
        <div className="slider">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ImageOne} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={ImageTwo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={ImageOne} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider