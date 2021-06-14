import React, { Component, useState } from "react";
import axios from "axios";
import Show from '../Mostrar';
import "./index.css";
import logo from '../images/LOGO.png';
import Galery from '../ImagesSearch'


export default function Search() {
    const URL = "http://localhost:8888/album/";

    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [pesquisa, setPesquisa] = useState("");

    const verifySeach = function (e) {
        if (e.length == 0) {
            return <Galery />
        } else {
            return gerarCards();
        }
    }

    const dateFormat = (dateF) => {
        let data = new Date(dateF);
        return (
            data.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
        )
    }

    const verifyTracks = function (e, Id, tipo) {
        if (e > 1) {
            return <Show id={Id} />;
        } else {
            return <div className="ops">
                <a>Infelizmente esse album so possui uma faixa :( <br /> mas você pode ouvi-lá!</a>
                <br />
                <iframe src={"https://open.spotify.com/embed/" + tipo + "/" + Id} width="250" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        }
    }

    const gerarCards = function (e) {
        let musicas = [];

        musicas = resultadoPesquisa.map(function (el) {
            return (

                <div >
                    <div className="card border-secondary mb-3 ">
                        <div class="p-3 mb-3  ">
                            <div class="">
                                <div class="col">
                                    <div>
                                        <div class="text">
                                            <h2>
                                                {el.album.name}
                                            </h2>
                                            <img src={el.album.images[1].url} width="300rem" height="300rem" />
                                        </div>
                                    </div>
                                    <div class="col text">
                                        <div class="p-2" > {"Data de lançamento : " + (dateFormat(el.album.release_date))}</div>
                                        <div class="p-2" > {"Total de Musicas no Album:  " + (el.album.total_tracks)}</div>
                                        <div class="p-2" > {"Artista : " + (el.album.artists[0].name)}</div>
                                        <div class="p-2" > {<a href={el.album.artists[0].external_urls.spotify}>Perfil do Artista</a>}</div>
                                    </div>
                                </div>
                            </div>
                            {verifyTracks(el.album.total_tracks, el.album.id, el.album.type)}
                        </div>
                    </div>
                </div>
            );
        })
        return musicas;
    }
    return (
        <div >
            <nav id="nav1" className="navbar navbar-expand-lg  backnav  static-top mb-5 shadow  ">
                <a className="navbar-header" href="/" >
                    <img src={logo} width="200" height="60" />
                </a>
                <div className="d-flex flex-row-reverse navbar-collapse p-2" id="navbarText" >
                    <ul className="nav navbar-nav navbar-right" id="navbars">
                        <li className="nav-items active" >
                            <a className="nav-lin" href="/">Inicio <span className="sr-only ">(current)</span></a>
                        </li>
                        <li className="nav-items active">
                            <a className="nav-lin" href="/">Voltar</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="seach-input ">
                <label >
                    <div>
                        <div class="input-group rounded">
                            <input onChange={(e) => {
                                setPesquisa(e.target.value);
                                axios.get(`${URL}${e.target.value}`).then((resp) => {
                                    setResultadoPesquisa(resp.data.tracks.items);
                                });
                            }}
                                value={pesquisa} type="search" class="form-control rounded" placeholder="Pequisa ai..." aria-label="Search"
                                aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                </label>
            </div>
            <div className="container-ixib">
                <div class="exibir" >
                    {verifySeach(pesquisa)}
                </div>
            </div>
        </div>
    );

}
