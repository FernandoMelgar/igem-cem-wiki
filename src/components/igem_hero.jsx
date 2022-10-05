const hero_title = "Detecting compounds in an easy, fast and affordable manner:\n" +
    "Disrupting Disruptors. An Endocrine Disrupting Chemicals\n" +
    "sensing device";

export default function IgemHero() {
    return (
        <div>
            <div className="hero min-h-screen"
                 style={{backgroundImage: `url("https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80")`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-9xl font-bold">iGEM TEC CEM</h1>
                        <p className="mb-5 text-xl"> {hero_title}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}