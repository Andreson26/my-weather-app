

export const getDateAndTime = (weatherData) => {
    let queryDate = weatherData && new Date(weatherData.dt * 1000)
   const newDate =  new Date(Date.parse(queryDate))
   console.log(newDate)
   /* const currentTime =new Date(newDate).toLocaleString('en-US')
        
    console.log(currentTime)
    const currentDate = new Date(queryDate).toLocaleString("en-US", {
    }).split(",")[0]
    console.log(currentDate)
return [currentDate, currentTime]*/

}


export function convertToF(cel) {
   
    const celTemp = cel
    const celToFahr =Math.ceil(celTemp  * 9 / 5 + 32);
    return celToFahr
        
}

