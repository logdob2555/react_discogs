// Main.js

import React, { Component } from "react";
import Image from './Image/Image.js';
import Image2 from './Image2/Image2.js';
import VinylImage from './Vinyl/Vinyl.js';
import CDImage from './CD/CD.js';
import CassetteImage from './Cassette/Cassette.js';
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Vinyl from "./Vinyl";
import CD from "./CD";
import Cassette from "./Cassette";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Image2 />
                <div>
                    <div className="image-container">
                        <div className="item">
                            <VinylImage />
                            <h1>
                                <NavLink to="/">SHOP VINYL</NavLink>
                            </h1>
                        </div>
                        <div className="item">
                            <CDImage />
                            <h1>
                                <NavLink to="/CD">SHOP CDS</NavLink>
                            </h1>
                        </div>
                        <div className="item">
                            <CassetteImage />
                            <h1>
                                <NavLink to="/Cassette">SHOP CASSETTES</NavLink>
                            </h1>
                        </div>
                    </div>
                    <footer>
                        <Image />
                    </footer>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Vinyl />} />
                            <Route path="/CD" element={<CD />} />
                            <Route path="/Cassette" element={<Cassette />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;