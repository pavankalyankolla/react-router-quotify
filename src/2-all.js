import React from "react";


function Heading(props){
    return <h1>{props.title}</h1>
}

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes : {}
        }
        this.getData = this.getData.bind(this)
        this.getQuote = this.getQuote.bind(this)
    }
    

componentDidMount() {
    this.getData();
}
getData(){
    //console.log(JSON.parse(localStorage.getItem("key")));
    let data = JSON.parse(localStorage.getItem("key"))
    this.setState({
        quotes : data[Math.floor(Math.random()*data.length)]
    })
}

getQuote(){
    this.getData();
}

render(){
    return (
        <div className="card">
            <div className = "card-body">
            <h2 className="alert alert-light">{this.state.quotes.quote} -- {this.state.quotes.author}</h2>
            <button  className="btn-group btn-outline-secondary" onClick={this.getQuote}>Generate new quote</button>
            </div>
        </div>
    )
}
}

function LocalQuote(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default LocalQuote;
