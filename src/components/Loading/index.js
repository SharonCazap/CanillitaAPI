import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {Container, ContainerDestacadas, ContainerRoll} from './styled';
 
const Loading = () => {
    return(
        <Container>
            <div>
                <Skeleton height={350} count={1}/>
                <Skeleton height={20} count={2}/>
            </div>
            <ContainerDestacadas>
                <Skeleton height={250} count={1}/>
                <Skeleton height={40} count={2}/>  
            </ContainerDestacadas>
            <ContainerDestacadas>
                <Skeleton height={250} count={1}/>
                <Skeleton height={40} count={2}/>
            </ContainerDestacadas>
            <ContainerRoll>
                <Skeleton height={250} count={1}/>
                <Skeleton height={40} count={2}/>
            </ContainerRoll>
            <ContainerRoll>
                <Skeleton height={250} count={1}/>
                <Skeleton height={40} count={2}/>
            </ContainerRoll>
            <ContainerRoll>
                <Skeleton height={250} count={1}/>
                <Skeleton height={40} count={2}/>
            </ContainerRoll>
        </Container>
    )
}

export default Loading