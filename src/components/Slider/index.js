import React from "react";
import Slider from "react-slick";
import CardSliderItem from '../SliderItem'

class SimpleSlider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: props.newData
        }
        console.log('nesssssdata', props.newData)
        
    }
    
    render() {
        const destacadas = this.state.news.map(destacada =>{
            return (
                <CardSliderItem newData={destacada} key={destacada.url}/>
            )
        })
        console.log("Slider destacadas: ", destacadas)
        const settings = {
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {destacadas}
            </Slider>
        )
        console.log("slider: ",{destacadas})
    }
}

export default SimpleSlider