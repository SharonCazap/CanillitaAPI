import styled from 'styled-components'

const Container = styled.div`
    display: flex!important;
    margin: 0;

    a{
        min-width: 100%;
        text-decoration: none;
        display: flex!important;
    }
    .new{
        margin: 0;
        width: 100%
        overflow: hidden;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0px 0px 15px 0px #80808040;
        border: 1px solid #eaeaea;
        transition: all 150ms ease 0s;
    }
    .new:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 40px -14px;
        transform: translateY(-5px)
    }
    .new:hover .content h2{
        color: #1cdcca;
    }
    img{
        height: 250px;
        width: 100%;
    }
    .content{
        padding: 16px 20px;
    }
    .content h2{
        font-size: 20px;
        font-weight: 600;
        min-height: 63px;
        color: #333;
    }
    .content p{
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        color: rgb(130, 137, 158);
    }
`
export {Container}