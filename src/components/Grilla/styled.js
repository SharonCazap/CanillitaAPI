import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px; 
    row-gap: 35px;
`
const ContainerSlider = styled.div`
    display: block;
    width: 100%;
`
const AllGrid = styled.div`
    padding: 30px 10%;
`
const NoticiasSecundarias = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px; 
    row-gap: 35px; 
    margin: 35px 0;
`

export {Container, ContainerSlider, AllGrid, NoticiasSecundarias}