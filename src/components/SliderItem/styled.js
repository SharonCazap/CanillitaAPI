import styled from 'styled-components'

const ContainerSliderItem = styled.div`
    a{
        width: 100%;
        text-decoration: none;
    }
    .new{
        margin: 0;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        transition: all 150ms ease 0s;
    }
    .new:hover .content{
        background-color: #0fb2a2;
    }
    .new:hover .content h2{
        color: #eaeaea;
    }
    img{
        height: 380px;
        width: 100%;
    }
    .content{
        padding: 16px 20px;
        width: 100%;
        position: absolute;
        z-index: 99;
        left: 0;
        top: 100%;
        transform: translate(0, -100%);
        background-color: rgba(28, 220, 202, 0.72);
    }
    .content h2{
        font-size: 20px;
        font-weight: 600;
        color: #333;
    }
    .content p{
        margin-top: 10px;
        font-weight: 400;
        font-size: 18px;
        color: #fafafa;
    }
`
export {ContainerSliderItem}