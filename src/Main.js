// Main.js

import React, { Component } from "react";
import Image from './Image/Image.js';
import Image2 from './Image2/Image2.js';
import Vinyl from './Vinyl/Vinyl.js';
import CD from './CD/CD.js';
import Cassette from './Cassette/Cassette.js';
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import CCI from "./CCI";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Image2 />
                <div>
                    <div className="image-container">
                        <div className="item">
                            <Vinyl />
                            <h1>
                                <NavLink to="/">SHOP VINYL</NavLink>
                            </h1>
                        </div>
                        <div className="item">
                            <CD />
                            <h1>
                                <NavLink to="/Stuff">SHOP CDS</NavLink>
                            </h1>
                        </div>
                        <div className="item">
                            <Cassette />
                            <h1>
                                <NavLink to="/CCI">SHOP CASSETTES</NavLink>
                            </h1>
                        </div>
                    </div>
                    <footer>
                        <Image />
                    </footer>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Stuff" element={<Stuff />} />
                            <Route path="/CCI" element={<CCI />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;