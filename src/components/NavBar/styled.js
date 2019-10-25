import styled from 'styled-components' 

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;
    margin: 0;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    a {
        font-size: 18px;
        text-decoration: none;
        color: #333;
    }
    a:hover{
        color: #1cdcca;
    }
    .active{
        color: #1cdcca;
    }
`

export {Container}