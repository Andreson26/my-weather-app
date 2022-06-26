import React, { Component } from 'react';
import axios from 'axios';
import { Line} from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto'
import { getDateAndTime } from '../../utils/Utils';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

class Forecast extends Component {
    state = { 
        isLoading: false,
        hasError: false,
        forecastData: {}
     } 

     getForecast = async() => {
        this.setState({isLoading: true})
         const {lat, lon} = this.props
         setTimeout(5000)
         try {
             
             const {data} = await axios(`${apiUrl}onecall?lat=${lat}&lon=${lon}&exclude(minutely, alerts, daily)&units=metric&appid=${apiKey}`)
             this.setState({forecastData: data, isLoading: false})
    
         }catch(err) {
             this.setState({hasError:false, isLoading: false})
         }
     }

     componentDidMount() {
         this.getForecast()
     }

     componentDidUpdate(prevProps, prevState) {
        if(prevProps.lat !== this.state.lat && prevState.lon !== this.state.lon) {
            this.getForecast()
        }
     }
    render() { 
        let hourList, tempList;
        const {isLoading, hasError, forecastData} = this.state

        if(!!Object.keys(forecastData).length) {
            const {hourly} = forecastData
            hourList = hourly.map((el) => getDateAndTime(el)[0]).slice(0, 24)
            tempList = (Object.values(forecastData.hourly)).map((el) => el.temp).slice(0, 24)
        }

        const hasData = !!Object.keys(forecastData).length
        
        return (
            <div>
                 {hasError && !isLoading && (
                    <h3>Forecast error...</h3>
                )}
                {isLoading && <h3>Loading Forecast ...</h3>}

                {hasData && !hasError && !isLoading && (
                    
                    <Line
                        height= {70}
                       data={{
                            
                            labels: hourList,
                            datasets: [
                                {
                                    label: 'Temp by hour',
                                    data: tempList,
                                    fill: { target: "+1", below: "rgba(255,255,255,0.5)" },
                                    tension: 0.3,
                                    backgroundColor:  ' rgb(33, 33, 110)',
                                    borderColor: 'white',
                                    borderWidth: 2,
                                 
                                }
                            ]
                        }}
                        options={{
                            plugins: {
                              legend: true
                            },
                            elements: {
                              point: {
                                backgroundColor: "white"
                              }
                            },
                            scales: {
                                x: {
                                    ticks: {
                                        color: 'white'
                                    }
                                },
                                y: {
                                    ticks: {
                                        color: 'white'
                                    }
                                }
                            }
                            
                        }}      
                    />
                )}
            </div>
        );
    }
}
 
export default Forecast;