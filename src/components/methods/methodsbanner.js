function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function MethodsBanner() {
    return (
        <div>
                <button onClick={topFunction} id="myBtn" title="Go to top">
                    <i classNameName="bi bi-caret-up-fill"></i>
                </button>  
                <div>
            <img src="images/Camera Roll/mets_thumbnail.jpg"  className="w-100"/>

            <div className="container col-sm_5">             
                <h1 className="title_text">HARVESTING METHODS & EFFICIENTLY USES</h1>
            </div>
        </div>
        </div>
    );
}