import React from "react";
import { ContainerSliderItem } from "../SliderItem/styled";

const CardSliderItem = (props) => {
    const {url, img_url, title, source_name} = props.newData
    console.log("CardSliderItem Url destacada: ",{url})
    return(
        <ContainerSliderItem>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="new">
                    <img src={img_url}></img>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{source_name}</p>
                    </div>
                </div>
            </a>
        </ContainerSliderItem>
    )
}

  
export default CardSliderItem