import React, { Component } from "react";
import img1 from "./images-galery/img-1.jpg";
import img2 from "./images-galery/img-2.jpg";
import img3 from "./images-galery/img-3.jpg";
import img4 from "./images-galery/img-4.jpg";
import img5 from "./images-galery/img-5.jpg";
import img6 from "./images-galery/img-6.jpeg";
import './images-galery/index.css';


export default class Galery extends Component {
    render() {
        return (
            <div>
                <div id="log">
                </div>
                <div >
                    <div >
                        <div >
                            <div class="container p-2">
                                <div class=" row">
                                    <div className="col-sm">
                                        <img src={img1} class="card-img-top" alt="..." width="250" height="250" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={img2} class="card-img-top" alt="..." width="250" height="250" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={img3} class="card-img-top" alt="..." width="250" height="250" />
                                    </div>
                                </div>
                            </div>
                            <div class="container p-2">
                                <div class=" row">
                                    <div className="col-sm">
                                        <img src={img4} class="card-img-top" alt="..." width="250" height="250" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={img5} class="card-img-top" alt="..." width="250" height="250" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={img6} class="card-img-top" alt="..." width="250" height="250" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
