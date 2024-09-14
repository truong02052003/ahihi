function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
export default function HomeBanner()
{
    return(
        <div>
              <section className="body">
                <button onClick={topFunction} id="myBtn" title="Go to top">
                    <i className="bi bi-caret-up-fill"></i>
                </button>
                <div className="thumbnail">
                    <img src="images/slogan.png" alt="Slogan" />
                    <div id="text">
                        <h1 id="slogan">EVERY DROP COUNTS</h1>
                        <p>Join us to save water today!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}