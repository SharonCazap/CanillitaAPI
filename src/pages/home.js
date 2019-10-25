import React from "react"
import dayjs from "dayjs"
import { jsxAttribute } from "@babel/types"
import Grilla from '../components/Grilla'
import Loading from '../components/Loading'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }

    componentDidMount(){
        this.fetchCategoryNews()
    }

    async fetchCategoryNews(){
        const date = dayjs()
        const dateFormatted = date.format('YYYY[-]MM[-]DD')
        try {
            const response = await fetch(`https://api.canillitapp.com/latest/${dateFormatted}`);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json)
            this.setState({ 
              news: json, 
              isLoading: false
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return(
            <div>
                {this.state.isLoading && (<Loading/>)}
                {!this.state.isLoading && (<Grilla news={this.state.news}/>)}
            </div>
            
        )
    }
}

export default Home