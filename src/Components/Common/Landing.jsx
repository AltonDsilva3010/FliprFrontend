import React from "react";
import "../../Style/Landing.css";
import { NavLink } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landing-page">
      <header>
        <a href="/dashboard" className="brand-logo">
          PODCAST.io
        </a>
      </header>
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Discover new PODCAST</h1>
            <p>
              Listen to your favorite Podcast and discover new artists on
              PODCAST.io
            </p>
            <NavLink to={"/dashboard"} className="nav-link">
              Get Started
            </NavLink>
          </div>
        </section>

        {/* <section className="featured">
          <h2>Featured Playlists</h2>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img src="https://source.unsplash.com/1000x500/?harrystyles" />
                  <span className="card-title">Playlist 1</span>
                </div>
                <div className="card-content">
                  <p>Description of Playlist 1</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img src="https://source.unsplash.com/1000x500/?harrystyles" />
                  <span className="card-title">Playlist 2</span>
                </div>
                <div className="card-content">
                  <p>Description of Playlist 2</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-image">
                  <img src="https://source.unsplash.com/1000x500/?harrystyles" />
                  <span className="card-title">Playlist 3</span>
                </div>
                <div className="card-content">
                  <p>Description of Playlist 3</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Landing;
