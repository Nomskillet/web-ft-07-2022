
import React, { Component } from 'react'


// mount 
// 
class News extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0, 
            articles: []
        }

        console.log("inside constructor");
    }

    handleClick = () => {
       
        this.setState({count: this.state.count + 1})
    }

    // componentWillMount() {
    //     console.log('component will mount');
    // }

    componentDidMount() {
        // this happens once and only after the components has mounted
        //api calls

            console.log('inside component did mount');
    }   

  render() {

    console.log('inside of render');
    return (
      <>
        
       <h1> {this.state.count}</h1>

        <button onClick={this.handleClick}>Increment</button>
      </>
    )
  }
}

export default News
