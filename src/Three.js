import React from "react";

class Three extends React.Component {
    name = "ReactJs";
    count = 0;
constructor(){
    super();
    this.state = {
        number : 1
    }
    console.log("Constructor is called");
}
componentDidMount(){
    console.log("Mounted");
    console.log(this.count);
    console.log(this.count+1);
}
componentWillUnmount(){
    console.log("UnMounted");
}
funcEightBtnClk = ()=> {
    console.log("Button clicked");
    console.log(this.name)
    this.setState({number: this.state.number+1});//update the state
}
componentDidUpdate(){
    console.log("Component updated")
}
render(){
    return(
        <div>
            <h2>This is a class Component {this.name}{this.count}{this.state.number}</h2>
            <button type="button" class="btn btn-primary" onClick={this.funcEightBtnClk}>Click here</button>
        </div>
    );
}
}
export default Three;