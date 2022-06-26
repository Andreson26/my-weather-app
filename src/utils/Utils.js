

<<<<<<< HEAD
export const getDateAndTime = (weatherData, isCelcius) => {
=======
export const getDateAndTime = (weatherData) => {
>>>>>>> 3534f5dedebca4115cbdf80d421e6df97686d654
    let queryDate = weatherData && new Date(weatherData.dt * 1000)
    //console.log(queryDate)
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
<<<<<<< HEAD
=======
   console.log('hello')
>>>>>>> 3534f5dedebca4115cbdf80d421e6df97686d654
    const celTemp = cel
    const celToFahr =Math.ceil(celTemp  * 9 / 5 + 32);
    return celToFahr
        
}

