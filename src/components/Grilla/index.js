import React from 'react'
import { Container, ContainerSlider, AllGrid, NoticiasSecundarias } from './styled'
import Card from '../Card'
import SimpleSlider from "../Slider";


const Grilla = ({news}) => {
    console.log("en grilla: ",news)

        const destacadas = news.slice(0, 3).map(newItem => {
            return newItem
        })
        console.log("En grilla destacadas:",destacadas)
      
        const secundarias = news.slice(6, 8).map(newItem => {
            return (
                <Card newData={newItem}/>
            )
        })
        console.log("En grilla secundarias:",secundarias)

        const grillaRoll = news.slice(9, news.length).map(newItem => {
            return (
                <Card newData={newItem} />
            )
        })
        console.log("En grilla grillaRoll:",destacadas)

        
        return (
            <AllGrid>
                <ContainerSlider>
                    <SimpleSlider newData={destacadas}/>
                </ContainerSlider>
                <NoticiasSecundarias>
                    {secundarias}
                </NoticiasSecundarias>
                <Container>
                    {grillaRoll}
                </Container>        
            </AllGrid>  
        )



    /*return(
        <Container>
            {news.map(newItem => 
                <Card newData={newItem} />)
            }
        </Container>
    )*/
}

export default Grilla