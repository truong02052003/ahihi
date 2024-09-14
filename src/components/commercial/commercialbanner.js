function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function CommercialBanner() {
    return (
        <div>
            <button onClick={topFunction} id="myBtn" title="Go to top">
                <i className="bi bi-caret-up-fill"></i>
            </button>  
            <div className="com_thumbnail pb-3">
                <img src="images/com_thumbnail.jpg" alt="Commercial Thumbnail" id="com_thumbnail" />
                <p><i>Austin Central Library. Photo courtesy of Austin Public Library.</i></p>
                <h1>RAINWATER HARVESTING IN COMMERCIAL AREA</h1>
            </div>
        </div>
    );
}
