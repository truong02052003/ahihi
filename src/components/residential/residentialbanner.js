function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ResidentialBanner() {
    return (
        <div>
                <button onClick={topFunction} id="myBtn" title="Go to top">
                    <i className="bi bi-caret-up-fill"></i>
                </button>  
                <div className="res_thumbnail">
                    <img src="images/Camera Roll/Kingspan-Gamma-rainwater-harvesting.jpg" className="w-100" alt="Rainwater Harvesting"/>
                    <p><i>An Overview of Residential Rainwater Harvesting</i></p>
                    <h1>RAINWATER HARVESTING IN RESIDENTIAL AREA</h1>
                </div>
        </div>
    );
}
