import React from 'react'
import './App.css'
import Movie from './tmbd'
import MovieRow from './component/movieRow'
import Header from './component/header'
import Navbar from './component/navbar'

export default function App(){

    return(
        <>
            <Navbar/>
            <Header/>
            <section className="session">
                <MovieRow title ='Originais Netflix' fetchURL={Movie.originais}/>
                <MovieRow title={'Recomendados para você'} fetchURL={Movie.recomendados}/>
                <MovieRow title={'Ação'} fetchURL={Movie.acao}/>
                <MovieRow title={'Comédia'} fetchURL={Movie.comedia}/>
            </section>
        </>
    )
}