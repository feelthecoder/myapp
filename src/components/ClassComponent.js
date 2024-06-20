import React from "react";

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { count:0,data:''};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({count:this.state.count+1})
    }

    componentDidMount(){
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": "DEMO-API-KEY"
          });
          
          var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
          };
          
          fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({data:result}))
            .catch(error => console.log('error', error)); 
    }

    componentDidUpdate(prevProps,prevState){
        console.log('CurrentState Count '+this.state.count);
        console.log('PreviousState Count '+this.state.count);

        console.log('CurrentState Data '+this.state.data);
        console.log('PreviousState Data '+this.state.data);
    }

    componentWillUnmount(){
        console.log('Component Destroyed!!!!!')
    }


    render(){
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default MyComponent;