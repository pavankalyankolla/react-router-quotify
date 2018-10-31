import React from "react";

function Heading(props){
    return <h1 className="alert alert-light" role="alert">{props.title}</h1>
};



class Quotes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: []
        }
        this.removeQuote = this.removeQuote.bind(this); 
    }

    removeQuote(index){
        this.setState(prevState => {
            prevState.array.splice(index.value, 1); 
            localStorage.setItem('key', JSON.stringify(prevState.array));
        }); 
        index.parentNode.remove();
    }

    componentDidMount(){
        this.setState({
            array:  JSON.parse(localStorage.getItem('key'))
        }); 
    }

render(){
    
    return (
        <div>
                 <h4>Listing quotes</h4>
                <div>
                {this.state.array.map((quote,i) => <SingleQuote quotes={quote} index={i} key={i} removeQuote={this.removeQuote}/>)}
                </div>
        </div>
    )
}
}

class SingleQuote extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        quote:props.quotes.quote,
        author:props.quotes.author,
        index:props.index,
        editMode: false
    }
    this.changeDelete = this.changeDelete.bind(this)
    this.changeEdit = this.changeEdit.bind(this)
    this.showQuote = this.showQuote.bind(this)
    this.editForm = this.editForm.bind(this)
    this.quoteChange = this.quoteChange.bind(this)
    this.authorChange = this.authorChange.bind(this)
    this.saveQuote = this.saveQuote.bind(this)
}

showQuote() {
    return (
            <div>
                <h2 className="alert alert-success" role="alert">{this.state.quote}<br/></h2>
                <h4 className="alert alert-warning" role="alert">--{this.state.author}</h4><br/>
                <button type="button" className="btn btn-primary" onClick={this.changeEdit} value={this.state.index}>Edit</button>
                <button type="button" className="btn btn-dark" onClick={this.changeDelete} value={this.state.index}>Delete</button>
            </div>)
}


editForm() {
     
return (
    <div>
        <form>
            <div className="form-group col-md-8">
                <div className="form-group">
                    <textarea className="form-control" onChange={this.quoteChange}>{this.state.quote}</textarea><br />
                </div>
                <div className="form-group">
                    <textarea className="form-control" type="text" onChange={this.authorChange}>{this.state.author}</textarea><br />
                </div>
            </div>
            <div className="form-group col-md-4">
                <div className="btn-group">
                    <button className="form-control btn btn-success" onClick={this.saveQuote} value={this.state.index}> Update </button>
                </div>
            </div>
        </form>
    </div>
)

}

quoteChange(e) {
    this.setState({
        quote:e.target.value
    })
}

authorChange(e) {
    this.setState({
        author:e.target.value
    })
}

saveQuote(e) {
    let data = {
            quote: this.state.quote,
            author: this.state.author
        }
        let localData = JSON.parse(localStorage.getItem('key'));
        localData[e.target.value] = data
        localStorage.setItem('key',JSON.stringify(localData));

    this.setState({
        editMode:false
    })
}

changeDelete(e) {
        this.props.removeQuote(e.target); 
}

changeEdit(e) {
    this.setState({
        editMode:true
    })

}

render() {
    return (
        <div>
            { this.state.editMode ? this.editForm() : this.showQuote() }
        </div> 
    )
}
}

function ListAll(){
    return (
        <div>
            <Heading title="Quotify" />
            <Quotes />
        </div>
    )
}

export default ListAll;