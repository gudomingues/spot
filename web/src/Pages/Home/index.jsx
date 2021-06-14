import React, { Component, useState } from "react";
import './index.css';
import logo from "../images/LOGO.png"
import Img from '../images/person.png';


export default class Home extends Component {
    render() {
        const URL = "http://localhost:8888/login";

        return (
            <div className="p-3 mb-2 ">

                <nav id="nav1" className="navbar navbar-expand-lg  backnav fixed-top static-top mb-5 shadow  ">
                    <a className="navbar-header" href="#" >
                        <img src={logo} width="200" height="60" />
                    </a>
                    <div className="d-flex flex-row-reverse navbar-collapse p-2" id="navbarText" >
                        <ul className="nav navbar-nav navbar-right" id="navbars">
                            <li className="nav-items active" >
                                <a className="nav-lin" href="/">Inicio <span className="sr-only ">(current)</span></a>
                            </li>
                            <li className="nav-items active">
                                <a className="nav-lin" href={URL}>Entrar</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
                <div class="p-text" >
                    <h1 className="display-1 font-weight-bold p-text">Música para todos</h1>
                </div>
                <div className="p-text">
                    <a> O spotify tem  milhões de musicas. Que tal deixar de lado o preconceito <br />
                        e descobrir novos estilos e musicas legais!</a>
                </div>
                <div className="container d-flex justify-content-start">
                    <div className="d-flex">
                        <div className="mensagem ">
                            <div className="float-left col-lg p-4" >
                                <h1 id="th-1" >O que o spotfind <br />tem ?</h1>
                                <h2 id="th-2">Músicas </h2>
                                <a> O spotify tem  milhões de musicas. Escute seus sons<br /> favoritos, descubra
                                    novas musicas e reuna  seus favoritos em um so lugar.</a>

                                <h2 id="th-2" >Playlists </h2>
                                <a> No spotify você encontra uma playlist para cada momento. <br />Todas feitas
                                    por fanaticos e especialistas da musica </a>

                                <h2 id="th-2" >Novos lançamentos</h2>
                                <a> Escute os novos lançamentos de singles e albuns e aproveite
                                    para fica por dentro das melhores músicas!</a>

                                <h2 id="th-2" >De onde vem tudo isso ?</h2>
                                <a> O spotfind vem das Api's disponibilizadas
                                    pelo proprio spotify!</a>
                            </div>
                        </div>
                        <div className="imagem capa" >
                            <img src={Img} alt="ima1" className=" float-left p-3 " height="80%" />
                        </div>

                    </div>
                </div>

                <div className="nav justify-content-center btn-lets" >
                    <form action="http://localhost:8888/login">
                        <input type="submit" className="button" value="Let's Bora!" />
                    </form>
                </div>
            </div >
        );
    }
}
