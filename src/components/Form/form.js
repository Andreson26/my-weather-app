   import React, { Component } from 'react';
   import {StyledInput} from './form.style'
   class Form extends Component {
       state = { 
           value: ''
        } 

        handleChange = (e) => {
            this.setState({value: e.target.value})
        }

       

        handleSubmit = (e) => {
            e.preventDefault()
            this.setState({value: ''})
            this.props.handleSubmit(this.state.value)
        }
       render() { 
           return (
               <form onSubmit={this.handleSubmit}>
                   <StyledInput 
                    value={this.state.value}
                    placeholder='Search city..'
                    type='text'
                    onChange={this.handleChange}
                    
                   />
               </form>
           );
       }
   }
    
   export default Form;