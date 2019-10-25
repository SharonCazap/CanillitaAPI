import styled from 'styled-components' 

const Container = styled.header`
    display: flex;
    padding: 30px 10%;
    background-color: #fff;
    a{
        text-decoration: none;
    }
    h1 {
        font-size: 32px;
        text-decoration: none;
        color: #1cdcca;
    }
    a:hover h1{
        color: #0fb2a2;
    }
    input{
        border-radius: 12px;
        padding: 10px 15px;
        border: 1px solid #1cdcca;
    }
    input:focus{
        border: 3px solid #1cdcca;
        outline: none;
    }
`

export {Container}