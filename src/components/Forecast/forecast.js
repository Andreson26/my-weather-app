import axios from 'axios';
import React, { Component } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

class Forecast extends Component {
    state = { 
        isloading: false,
        hasError: false,
        forecastData: null
     } 

     getForecast = async() => {
        this.setState({isLoading: true})
         const {lat, long} = this.props
         try {
             
             const {data} = await axios(`${apiUrl}weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`)
             this.setState({forecastData: data, isloading: false})
             console.log(data)
         }catch(err) {
             this.setState({hasError:false, isloading: true})
         }
     }

     componentDidMount() {
         this.getForecast()
     }
    render() { 
        return (
            <div><h1>Hello</h1></div>
        );
    }
}
 
export default Forecast;