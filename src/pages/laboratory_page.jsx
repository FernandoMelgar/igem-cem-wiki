import laboratoryBg from './Laboratory.png'

export default function LaboratoryPage() {
    return (
        <div>
            <div className="relative hero min-h-screen"
                 style={{backgroundImage: `url(${laboratoryBg})`}}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="relative hero-overlay text-center text-neutral-content" style={{top: 0}}>
                    <div className="">
                        <h1 className="my-10 text-9xl font-bold">L A B O R A T O R Y</h1>
                        <div className="carousel rounded-box max-w-5xl m-auto">
                            <div className="carousel-item">
                                <img src="https://placeimg.com/384/512/arch" alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://placeimg.com/284/512/arch" alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://placeimg.com/284/512/arch" alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://placeimg.com/284/512/arch" alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://placeimg.com/284/512/arch" alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://placeimg.com/284/512/arch" alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://placeimg.com/284/512/arch" alt="Burger"/>
                            </div>
                        </div>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}