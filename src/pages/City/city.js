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
<<<<<<< HEAD
        isCelcius: false,
        scale: 'C'
=======
>>>>>>> 3534f5dedebca4115cbdf80d421e6df97686d654
        
     } 
     
     getWeather = async() => {
<<<<<<< HEAD
         this.setState({isLoading: true, hasError: false})
=======
         this.setState({siLoading: true})
>>>>>>> 3534f5dedebca4115cbdf80d421e6df97686d654
         const {cityId} = this.props.match.params
        
         try {
            
         const {data} = await axios(`${apiUrl}weather?q=${cityId}&units=metric&appid=${apiKey}`)
            this.setState({weatherData: data, isLoading: false})
         }catch(err) {
            this.setState({hasError: true, isLoading: false})
         }
     }

     componentDidMount() {
        this.getWeather()
     };

     componentDidUpdate(prevProps) {
        if(prevProps.match.params.cityId !== this.props.match.params.cityId) {
            this.getWeather()
        }
     }

<<<<<<< HEAD
     handleMetricChange = () => {
        if (this.state.isCelcius == false) {
            this.setState({isCelcius: true, scale: "F"})
        }else{
            this.setState({isCelcius: false, scale: "C"})
        }
     }

=======
>>>>>>> 3534f5dedebca4115cbdf80d421e6df97686d654
    render() {
        const {...rest} = this.state
        return (
            <WeatherInfo 
                {...rest}
<<<<<<< HEAD
                handleMetricChange={this.handleMetricChange}
=======
>>>>>>> 3534f5dedebca4115cbdf80d421e6df97686d654
            />
        )
      }
       
            
        

}
 
export default City;