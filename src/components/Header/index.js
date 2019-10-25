import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Container } from './styled'


const Header = (props) =>{
    return(
        <Container>            
            <Link to={'/'}><h1>Noticias</h1></Link>
            <input type="text" placeholder="Buscar..." 
            onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null} />
        </Container>
    )
}

export default withRouter(Header);