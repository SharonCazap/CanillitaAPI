import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from './styled'


const NavBar = () =>{
    return(
        <Container>
            <Link to={'/'}>Home</Link>
            <Link to={'/category/politica'}>Política</Link>
            <Link to={'/category/internacionales'}>Internacionales</Link>
            <Link to={'/category/tecnologia'}>Tecnología</Link>
            <Link to={'/category/espectaculos'}>Espectáculos</Link>
            <Link to={'/category/deportes'}>Deportes</Link>
        </Container>
    )
}

export default NavBar