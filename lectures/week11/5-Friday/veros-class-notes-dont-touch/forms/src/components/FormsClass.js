import React, { Component } from 'react'

class FormsClass extends Component {

    constructor() {

        super()


        this.state = {
            textValue: "hello", 
            isValid: false, 
            selectValue: "Seattle"
        }

        // this.handleForm = this.handleForm.bind(this)
        
    }

    handleChange = (e) => {
        

        let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value


        console.log(e.target.name);

        let name = e.target.name; 


        this.setState({
            [name] : targetType
        })

        // this.setState({textValue: e.target.value})

    }

    componentWillMount() {
        
    }

    componentDidMount() {
        
    }

  render() {

    let {textValue, isValid, selectValue} = this.state
    return (
      <>
        
        <h1>React Forms using Classes</h1>

        <h2>{textValue}</h2>
        <h2>{isValid ? "true" : "false" }</h2>

        <h2>{selectValue}</h2>
        <form >

            <input type="text" name="textValue" value={textValue} onChange={this.handleChange} />

            <input type="checkbox" name="isValid" value={isValid} onChange={this.handleChange} />


            <select name="selectValue" value={selectValue} onChange={this.handleChange}>
                <option value="NewYork">New York</option>
                <option value="Houston">Houston</option>
                <option value="Atlanta">Atlanta</option>
                <option value="Seattle">Seattle</option>
                <option value="Detroit">Detroit</option>
            </select>

        </form>
      </>
    )
  }
}

export default FormsClass
