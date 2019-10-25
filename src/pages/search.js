import React from "react"
import Grilla from '../components/Grilla'
import Loading from "../components/Loading"


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news: [],
            isLoading: true
        }
    }

    async fetchSearchNews(){
        const search = this.props.match.params.slug
        this.setState({
            isLoading: true
        })
        try {
            const response = await fetch(`https://api.canillitapp.com/search/${search}`);
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

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchSearchNews()
        }
    }

    componentDidMount(){
        this.fetchSearchNews()
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

export default Search