import React, { Component } from 'react';
import WeatherInfo from '../../components/WeatherInfo/weatherInfo';
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY ;
const apiUrl = process.env.REACT_APP_API_URL;

class  City extends Component {
    
    state = { 
        isLoading: false,
        hasError: false,
        weatherData: null,
        
     } 
     
     getWeather = async() => {
         this.setState({siLoading: true})
         const {cityId} = this.props.match.params
        
         try {
            
         const {data} = await axios(`${apiUrl}weather?q=${cityId}&units=metric&appid=${apiKey}`)
           
            this.setState({weatherData: data, isLoading: false})
         }catch(err) {
            this.setState({hasError: true, isLoading: false})
         }
     }

     componentDidMount() {
        console.log("we are here")
         this.getWeather()
        
     };

     componentDidUpdate(prevProps) {
        if(prevProps.match.params.cityId !== this.props.match.params.cityId) {
            this.getWeather()
            
        }
        console.log("im Here")
    }

    
      render() {
        const {...rest} = this.state
        return (
            <WeatherInfo 
                {...rest}
            />
        )
      }
       
            
        

}
 
export default City;