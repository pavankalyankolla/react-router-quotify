import React from "react";
import axios from "axios";
import doll from "./doll.gif";



function Heading(props){
    return <h1>{props.title}</h1>
}

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes : {},
            local : [],
            btndisalbe : false,
            saveTo : 'save to local',
            isLoaded : false
        }
        this.getData = this.getData.bind(this)
        this.getQuote = this.getQuote.bind(this)
        this.saveToLocal = this.saveToLocal.bind(this)
        this.displayQuote = this.displayQuote.bind(this)
    }
    

componentDidMount() {
    this.getData();
}
getData(){
    setTimeout(() => {
        axios.get('https://talaikis.com/api/quotes/random/').then((response) => {
            console.log(response.data.quote);
            this.setState({
                quotes : response.data,
                isLoaded : true
            })
        });   
    },2000  )
}

getQuote(){
    this.getData();
    this.setState({
        btndisalbe : false,
        saveTo : 'save to local'
    })

}

saveToLocal() {
    this.setState(prevState => {
        prevState.local.push(prevState.quotes);
        console.log(prevState.local)
        localStorage.setItem("key",JSON.stringify(prevState.local))
    })
    this.setState({
        btndisalbe : true,
        saveTo : 'saved'
    })
}
displayQuote(){
    return (
        <div className="card">
            <div className="card-body" >
            <h2 className="alert alert-light" >{this.state.quotes.quote} </h2>
            <h4  className="alert alert-info">{this.state.quotes.author}</h4>
            <button className="btn-group btn-outline-primary" onClick={this.getQuote}>new quote</button>
            <button className="btn-group btn-outline-info" onClick={this.saveToLocal} disabled={this.state.btndisalbe}>{this.state.saveTo}</button>
            </div>
        </div>
    )
}
render(){
    return (
        <div>
            {this.state.isLoaded ? this.displayQuote() : <img alt="" src={doll} />}
        </div>
    )
}
}

function App1(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default App1;