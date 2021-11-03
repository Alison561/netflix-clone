import React, {useEffect, useState}  from 'react'
import './navbar.css'
import netflix from '../img/netflix.png'
import avatar from '../img/avatar.png'

export default()=>{

    const [scroll, setScroll] = useState('transparent')
    useEffect(() => {
        function Scrollx(){
            if(window.scrollY > 5)
                setScroll('black')
            else
                setScroll('transparent')
        }
        window.addEventListener("scroll", Scrollx)
    }, [])
    return(
        <header style={{background:scroll}}>
            <nav>
                <img className="netflix" src={netflix} alt="logo Netflix" />
                <img className="avatar" src={avatar} alt="user Netflix" />
            </nav>
        </header>
    )
}