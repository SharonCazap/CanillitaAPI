import React from 'react'
import { Container } from './styled'
import {Link} from 'react-router-dom'

const Card = (props) => {
    const {url, img_url, title, source_name} = props.newData
    return(
        <Container>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="new">
                    <img src={img_url}></img>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{source_name}</p>
                    </div>
                </div>
            </a>
        </Container>
    )
}

export default Card