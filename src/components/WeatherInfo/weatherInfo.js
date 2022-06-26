import React from 'react';
import { Container, ContainerInfo, InfoCard} from './weatherInfo.style';
import Forecast from '../Forecast/forecast';
import { getDateAndTime, convertToF } from '../../utils/Utils';



const WeatherInfo = (props) => {
    const {weatherData, isLoading, hasError, isCelcius, scale, handleMetricChange} = props
    
    const hasData = !isLoading && !!weatherData
    
    const [currentDate, currentTime] = getDateAndTime(weatherData)
    
   // const {temp, temp_max} = hasData && Math.round(weatherData.main) 
    const temp = hasData && Math.round(weatherData.main.temp)
    const temp_max = hasData && Math.round(weatherData.main.temp_max) 
    const temp_min = hasData && Math.round(weatherData.main.temp_min) 
    const feels_like = hasData && Math.round(weatherData.main.feels_like) 
    
  
    const {lat, lon} =  hasData ? weatherData.coord : {}
   
   
return ( 
        <Container>
            {isLoading && <h3>Lodading...</h3>}
            {hasError && !isLoading && (
                <h3>City not found...</h3>
            )}
            {hasData && !hasError && !isLoading && (
                <div>
                    <h1>Weather Forecast</h1>
                    <ContainerInfo>
                            <h3>{isCelcius ? convertToF(temp) : Math.ceil(temp)}°<button onClick={handleMetricChange}>{scale}</button></h3>
                            <p><span>Feels like:</span> {isCelcius ? convertToF(feels_like) : feels_like}°</p>
                        <InfoCard>
                            <h1>{weatherData.name}, {weatherData.sys.country}</h1>
                            <div>                                 
                                <span>{currentTime}</span>
                                <span>{currentDate}</span>
                                   
                            </div>
                            <div>
                                <p><span>Max:</span> {isCelcius ? convertToF(temp_max) : temp_max}°</p>
                                <p><span>Min:</span> {isCelcius ? convertToF(temp_min) : temp_min}°</p>
                            </div>
                            <div>
                                <p><span>Humidity:</span> {weatherData.main.humidity}%</p>
                                <p><span>Pressure:</span> {weatherData.main.pressure}hg</p>
                            </div>
                            <div>
                                <p><span>Wind speed:</span> {Math.ceil(weatherData.wind.speed)} m/h</p>
                                <p><span>Wind direction:</span> {weatherData.wind.deg}°</p>
                            </div>
                            <div>
                                <p><span>{weatherData.weather[0].main}:</span> {weatherData.weather[0].description}</p>
                                <p><span>Visibility:</span> {Math.ceil(weatherData.visibility)}mi</p>
                            </div>
                            <div>
                                <p><span>Sunrise:</span> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                                <p><span>Sunset:</span> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                            </div>
                            
                        </InfoCard>
                    </ContainerInfo>
                    <div style={{width: 700, color: 'white'}}>
                        <Forecast lat={lat} lon={lon} />  
                    </div>
                       
                </div> 
             )}

        </Container>
     );
}
 
export default WeatherInfo;
