import React, {useEffect, useState} from 'react'
import './movieRow.css'
import axios from '../axios'

export default ({title, fetchURL})=>{

    const [row, setRow] = useState([])
    useEffect(() => {
        const loadAll = async ()=>{
            let res = await axios.get(fetchURL)
            setRow(res.data.results)
            return res
        }
        loadAll()
    }, [fetchURL])

    const [margin, setmargin] = useState(30)
    
    function moveLeft(){
        
        let scrollW = margin + Math.round(window.innerWidth / 2)
        if (scrollW => 0 ) {
            scrollW = 30
        }
        setmargin(scrollW)
    }

    function moveRight(){
        let scrollW = margin - Math.round(window.innerWidth / 2)
        let listW = row.length * 200
        if ((window.innerWidth - listW) > scrollW) {
            scrollW = (window.innerWidth - listW) - 30
        }

        setmargin(scrollW)
    }

    return(
        <section className="movie">
            <h2 className="movieRow-text">{title}</h2>
            <div className="movie-list">
                    <div className="moveLeft move" onClick={moveLeft}><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
                    <div className="moveRight move" onClick={moveRight}><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                <div style={ {marginLeft:margin} } className="movieRow-list">
                    {row.map((item, key)=>(
                        <div key={key} className="movieRow-list-img">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}