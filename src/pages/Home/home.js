import React, { Component } from 'react';
import axios from 'axios'
import WeatherInfo from '../../components/WeatherInfo/weatherInfo';



const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

class Home extends Component {
    state = { 
        lon: null,
        lat: null,
        isLoading: false,
        hasError: false,
        weatherData: null,
        isCelcius: false
     }

     showPosition = (position) => {
         this.setState({
             lon: position.coords.longitude,
             lat: position.coords.latitude,
             isLoading: false,
         })
     }

     getLocation = async() => {
         this.setState({isLoading: true})
         if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition)
            this.setState({isLoading: false})
         }else {
             this.setState({hasError: true, isLoading: false})
         }
            
        }

     getWeather = async () => {
         this.setState({isloading: true})
         try {
             const {lon, lat} = this.state
             
              const {data} = await axios(`${apiUrl}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
            
             const newData ={
                 ...data,
                 visibility: data.visibility * 0.00062137,
                 pressure: data.main.pressure * 0.0295301,
            }
            this.setState({weatherData: newData, isLoading: false})

            }catch(err) {
                this.setState({hasError: true, isLoading: false})
         }
     }

     componentDidMount() {
         
            this.getLocation()
     }

     componentDidUpdate(prevProps, prevState) {
         if(prevState.lat !== this.state.lat) {
             this.getWeather()
         }
     };

    render() { 
        const {...rest} = this.state
        
        return (
            
            <WeatherInfo 
                   { ...rest}
            />
            
         );
    }
}
 
export default Home;