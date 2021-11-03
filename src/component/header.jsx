import React, {useEffect, useState} from 'react'
import './header.css'
import axios from '../axios'
import tmbd from '../tmbd'

export default ()=>{

    const [row, setRow] = useState([])
    useEffect(() => {
        const API_KEY = 'api_key=e6ebd0d06cff79d6876cd4972f0be49a'
        const loadAll = async ()=>{
            let res = await axios.get(tmbd.originais)
            let result = res.data.results
            let random = Math.round(Math.random() * (result.length - 0) + 0)
            let resp = await axios.get(`/tv/${result[random].id}?${API_KEY}&language=pt-BR`)
            console.log(resp.data)
            setRow(resp.data)
        }
        loadAll()
    }, [])
    return(
        <section className="header" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${row.backdrop_path})`
        }}>
            <div className="header-vertical">
                <div className="header-horizontal">
                    <div className="header-conteudo">
                        <div className="header-conteudo-title"><h1>{row.name}</h1></div>
                        <div className="header-conteudo-tv">
                            <div className="header-conteudo-tv-pts"><p>{`${row.vote_average} Pontos`}</p></div>
                            <div className="header-conteudo-tv-temp"><p>{`${row.number_of_seasons} ${row.number_of_seasons == 1 ? "Temporada": "Temporadas"}`}</p></div>
                            <div className="header-conteudo-tv-ano"><p>{row.first_air_date}</p></div>
                        </div>
                        <div className="header-conteudo-descri"><p>{row.overview}</p></div>
                        <div className="header-conteudo-buttons">
                            <p className="header-conteudo-button-assis"><i className="fa fa-play" aria-hidden="true" style={{marginRight:'3px'}}></i> Assistir</p>
                            <p className="header-conteudo-button-inf"><i className="fa fa-info" aria-hidden="true" style={{marginRight:'3px'}}></i> Mais informação</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}