import React, { Component } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto';
import { getDateAndTime } from '../../utils/Utils';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

class Forecast extends Component {
    state = { 
        isloading: false,
        hasError: false,
        forecastData: []
     } 

     getForecast = async() => {
        this.setState({isLoading: true})
         const {lat, lon} = this.props
         try {
             
             const {data} = await axios(`${apiUrl}onecall?lat=${lat}&lon=${lon}&exclude(minutely, alerts, daily)&units=metric&appid=${apiKey}`)
             this.setState({forecastData: data, isloading: false})
        
         }catch(err) {
             this.setState({hasError:false, isloading: true})
         }
     }

     componentDidMount() {
         this.getForecast()
     }

     componentDidUpdate(prevProps, prevState) {
        if(prevProps.lat !== this.state.lat && prevState.lon !== this.state.long) {
            this.getForecast()
        }
     }
    render() { 
        let hourList, tempList;
        const {isLoading, hasError, forecastData} = this.state

        if(!!Object.keys(forecastData).length) {
            const {hourly} = forecastData
            hourList = hourly.map((el) => getDateAndTime(el)[0]).slice(0, 12)
            
            tempList = (Object.values(forecastData.hourly)).map(el => el.temp).slice(0, 12)
        }

        const hasData = !isLoading && !!forecastData
        console.log(hasData)
        
        return (
            <div>
                {isLoading && <h3>Loading Forecast ...</h3>}

                {hasError && !isLoading && (
                    <h3>Forecast error...</h3>
                )}

                {hasData && !hasError && !isLoading && (
                    
                    <Line
                        height={65}
                        data={{
                            labels: hourList,
                            datasets: [
                                {
                                  data: tempList,
                                  fill: { target: "+1", below: "rgba(255,255,255,0.5)" },
                                  borderColor: "white",
                                  tension: 0.3
                                }
                            ]
                        }}
                    
                    />
                )}
            </div>
        );
    }
}
 
export default Forecast;