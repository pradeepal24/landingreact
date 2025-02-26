import React from "react";
import '../styles/about.css'
export default function About() {
    return(
        <>
       
        <section className="destinations">
        <div className="destination-grid">
            <div className="destination">
                <img src="paris.jpg" alt="Destination 1"/>
                <h3>Paris</h3>
                <p>Experience the beauty and romance of the City of Light.</p>
            </div>
            <div className="destination">
                <img src="india.jpg" alt="Destination 2"/>
                <h3>India</h3>
                <p>Explore the vibrant culture and cutting-edge technology of India.</p>
            </div>
            <div className="destination">
                <img src="newyork.jpg" alt="Destination 3"/>
                <h3>New York</h3>
                <p>Discover the iconic landmarks and diverse neighborhoods of New York.</p>
            </div>
        </div>
    </section>
   
    </>
    )
}