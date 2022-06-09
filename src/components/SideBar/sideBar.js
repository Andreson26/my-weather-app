import React, { Component } from 'react';
import { StyledSideBar, StyledLink } from './sideBar.styled';
//import {Link} from 'react-router-dom';
import Form from '../Form/form';


class SideBar extends Component {
    state = { 
        cities: []
     } 
     

     handleSubmit = (newCity) => {
         const {cities} = this.state
         const newCities = [...cities, newCity]
         this.setState({cities: newCities})
     }

     handleReset = () => {
         this.setState({cities: []})
     }

    render() { 
        return (
            
            <StyledSideBar>
                <Form handleSubmit={this.handleSubmit}/>
                <div>
                    <p>
                        <StyledLink to="/">Current Location</StyledLink>
                    </p>
                    {this.state.cities.map((city) => (
                        <p key={city}>
                            <StyledLink to={`/city/${city}`}>{city}</StyledLink>
                        </p>
                    )) }
                </div>
                {this.state.cities.length > 0 && (
                    <button onClick={this.handleReset}>Reset</button>
                )}
            </StyledSideBar>
            
            

        );
    }
}
 
export default SideBar;
