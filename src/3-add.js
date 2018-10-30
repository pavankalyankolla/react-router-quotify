import React from "react";
// import axios from "axios"


function Heading(props){
    return <h1>{props.title}</h1>
}

class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quoteValue :'',
            authorValue : ''
        }
        this.saveToDB = this.saveToDB.bind(this)
        this.changeQuote = this.changeQuote.bind(this)
        this.changeAuthor = this.changeAuthor.bind(this)
    }

    changeQuote(e){
        this.setState({
            quoteValue : e.target.value
        })
    }

    changeAuthor(e){
        this.setState({
            authorValue : e.target.value
        })
    }

    saveToDB(){
        let data = {
            author: this.state.authorValue,
            quote: this.state.quoteValue
        }
        let localData = JSON.parse(localStorage.getItem('key'));
        localData.push(data);
        localStorage.setItem('key',JSON.stringify(localData));
    }
    
render(){
    return (
        <div>
            <p>quote</p>
            <textarea onChange={this.changeQuote}></textarea>
            <br/>
            <p>Author</p>
            <input type="text" onChange={this.changeAuthor}></input>
            <br/>
            <button onClick={this.saveToDB}>Save</button>
        </div>
    )
}
}

function AddQuote(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default AddQuote;