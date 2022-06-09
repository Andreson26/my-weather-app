

export const getDateAndTime = (weatherData) => {
    let queryDate = weatherData && new Date(weatherData.dt * 1000)

   const newDate =  new Date(Date.parse(queryDate))
    const currentTime =new Date(newDate).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
    const currentDate = new Date(queryDate).toDateString("en-US")//.split(" ").slice(1).join(' ')
  
   
    return [ currentTime, currentDate]

}


export function convertToF(cel) {
   
    const celTemp = cel
    const celToFahr =Math.ceil(celTemp  * 9 / 5 + 32);
    return celToFahr
        
}

