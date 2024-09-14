function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function DevelopmentsBanner() {
    return (
        <div>
            <button onClick={topFunction} id="myBtn" title="Go to top">
                <i className="bi bi-caret-up-fill"></i>
            </button>  
            <div>
                <img src="images/Camera Roll/prod_thumbnail2.jpg" className="w-100" alt="Thumbnail" />
                <div className="container col-sm-5">             
                    <h1 className="title_text">THE HISTORY OF RAINWATER HARVESTING</h1>
                </div>
            </div>
        </div>
    );
}
