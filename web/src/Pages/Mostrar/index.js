import React, { useState } from "react";
import axios from "axios";
import './index.css';

function Show(props) {
    const URL = "http://localhost:8888/album/" + props.id + "/tracks";
    console.log(URL + props.id);

    const [valorTrack, setValorTrack] = useState([]);

    const gerarCards = function () {
        let musicas = [];
        musicas = valorTrack.map(function (el) {
            return (
                <div className="tracks" >
                    <label>
                        <div > Ouça {el.name}</div>
                        <audio controls>
                            <source src={el.preview_url} type="audio/ogg" />
                        </audio>
                    </label>
                </div>
            );
        }
        )
        if (musicas.length > 0) musicas.push(
            <button
                onClick={(e) => {
                    setValorTrack([]);
                }}
                className="btn btn-danger tracks"
                type="button"
                value="button"
            >Ocultar tracks </button>
        );
        return musicas;

    }
    return (
        <div >
            <label >
                <button
                    onClick={(e) => {
                        axios.get(URL).then((resp) => {
                            setValorTrack(resp.data);
                        });
                    }}
                    className="btn btn-warning tracks"
                    type="button"
                    value="button"
                >Mostrar tracks do album... </button>
            </label>
            <div>

                {gerarCards()}
            </div>
        </div>
    );
}
export default Show;
