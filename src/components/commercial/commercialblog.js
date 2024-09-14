export default function CommercialBlog() {
    return (
        <div>
            <div className="com_intro">
                <p>
                    Rainwater harvesting is not only for residential applications; water needs in commercial and industrial processes can cost thousands of dollars a year. Additionally, rainwater harvesting helps new construction comply with stormwater regulations in retaining stormwater. <br /><br />
                    As the population grows and cities and suburbs expand with more buildings, the demand for water continues to increase. The installation of a rainwater collection system is becoming increasingly important for businesses and commercial organizations. <b>Rainwater Harvesting</b> is the first solution in a water management strategy for commercial, public, and residential buildings.
                </p>
                <img src="images/com_intro.jpg" alt="Commercial Introduction" id="com_intro" />
                <p style={{ marginTop: '50px' }}>
                    If you have a commercial property, you can save millions of gallons of drinking water each year with an eco-friendly approach known as <b>Rainwater Harvesting</b>. If you are looking for relevant information on <b>Rainwater Harvesting</b>, you are at the right place to get it. Rainwater collection systems are a very cost-effective solution that brings great benefits to commercial buildings such as office buildings, schools, hotels, resorts, hospitals, homes, etc.
                </p>
                <img src="images/com_intro2.png" alt="Commercial Introduction 2" id="com_intro2" />
            </div>
            {/* Provide common rainwater uses for commercial buildings */}
            <div className="com_uses">
                <h1>Common Commercial Uses</h1>
                <p>Rainwater harvesting in a public setting can be used for any non-potable water function. This includes:</p>
                <ul>
                    <li>Cooling tower make-up water</li>
                    <li>Toilet flushes</li>
                    <li>Irrigation</li>
                    <li>Fire suppression</li>
                    <li>Manufacturing processes</li>
                    <li>Vehicle/Fleet washes</li>
                    <li>Laundries</li>
                    <li>Pool fills</li>
                </ul>
                <img src="images/Camera Roll/com-uses2.png" alt="Commercial Uses" />
            </div>
            {/* Explaining methods in commercial area */}
            <div className="com_explain">
                <div className="com_explain_methods">
                    <h1>RWH: An Effective Solution for Commercial Users</h1>
                    <p>RWH systems are gradually becoming part of <b>sustainable water management</b>, and rainwater extraction is also gaining popularity, leading to <b>ecological conservation</b>. Most commercial buildings use a significant amount of water and energy in their daily operations. Therefore, a rainwater harvesting system for commercial buildings will significantly reduce the amount of water used from the grid.</p>
                    <p>For better understanding, let's have a look at its <b>methods</b>. Majorly, there are <b>two</b> rainwater harvesting methods as follows:</p>
                </div>
            </div>        
            <div className="com_sur_explain">
                {/* Explaining surface runoff method */}
                <h2>1. Surface Runoff Rainwater Harvesting</h2>
                <p className="mt-4 mb-n2">RWH using ground or land surface catchment areas is a less complex way of collecting rainwater. This technique is mainly suitable for storing water for agricultural purposes.</p>
                <img src="images/com_sur_explain1.jpg" alt="Surface Runoff Explanation" id="com_sur_explain1" />
                
                <p style={{ marginTop: '30px' }}><b>Surface Runoff Rainwater Harvesting</b> is a method of collecting rainwater flowing along the ground during the rains to be collected in a tank below the surface of the ground for irrigation and other purposes. During storage of rainwater, it is important to incorporate efficient and effective water conservation methods, i.e., by reducing evaporation. It is a very easy-to-adopt technology and very profitable if used accordingly. The main objective of surface runoff rainwater harvesting is to meet the ever-increasing demand for water, to reduce water pollution, soil erosion, and flooding of roads.</p>
                <img src="images/com_sur_explain2.jpg" alt="Surface Runoff Pros" id="com_sur_explain2" />
                {/* Provide pros */}
                <div className="com_sur_pros">
                    <h2>Pros:</h2>
                    <p><i className="bi bi-check-circle-fill"></i> Helps solve the water crisis to some extent.</p>
                    <p><i className="bi bi-check-circle-fill"></i> Reduces the runoff volume significantly inside the city area.</p>
                    <p><i className="bi bi-check-circle-fill"></i> Reduces flooding.</p>
                </div>
                {/* Explaining rooftop method */}
                <div className="com_roof_explain">
                    <h2>2. Roof Top Rainwater Harvesting</h2>
                    <p className="mt-4 mb-n2">Commercial buildings are usually limited by area more than residential buildings. No system is more suitable than a wet system for Rooftop Rainwater Harvesting. All collected rainwater will run straight down and be stored in an underground system for future use.</p>
                    <img src="images/Camera Roll/roof-com.png" alt="Rooftop Rainwater Harvesting" id="com_sur_explain3" />
                    <p style={{ marginTop: '30px' }}><b>Roof Top Rainwater Harvesting</b> is a method of collecting rainwater where it falls and is captured from the roof catchments of domestic houses or commercial buildings and stored in tanks. Harvested rainwater can either be stored in a tank or diverted to an artificial recharge system to meet household/commercial needs through storage in tanks. This method is simple, eco-friendly, less expensive, and truly effective. The rooftop rainwater harvesting method (RRH) involves diverting and recharging (or) storing rainwater that falls on the roof of a house/building. The main objective of rooftop rainwater harvesting is to make water available for future use, to improve the quality of groundwater, etc.</p>
                    <img src="images/Camera Roll/roof-com2.png" alt="Rooftop Rainwater Harvesting 2" id="com_sur_explain4" />
                </div>
                <div className="com_roof_pros pb-1">
                    <h2>Pros:</h2>
                    <p><i className="bi bi-check-circle-fill"></i> Provides self-sufficiency to water supply.</p>
                    <p><i className="bi bi-check-circle-fill"></i> Provides high-quality water that is soft and low in minerals.</p>
                    <p><i className="bi bi-check-circle-fill"></i> Reduces soil erosion in urban and rural areas.</p>
                </div>
            </div>
        </div>
    );
}
