import styled from 'styled-components';
import Cloudy from '../images/cloudy.jpg'
import Rainy from '../images/rainy.jpg'
import Stormy from '../images/stormy.jpg'
import Windy from '../images/windy.jpg'

const weatherBackground = {

}

export const Container = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    color: black;
    width: 70%;
    background-image: url(${Cloudy});
    backgound-size: cover;

    h1 {
        font-size: 35px;
        font-family: sans-serif;
        text-align: center;
    }
    h3 {
        font-size: 20px;

    }
    
    `;
export const ContainerInfo = styled.div`

    
    h3 {
        border: 1px solid white;
        text-align: center;
        width: 190px;
        font-weight: 500;
        margin: auto;
        font-size: 35px;
        border-radius: 50%;
        box-shadow: 3px 5px #80808080;

        button {
            border: none;
            background-color: transparent;
            margin: -5px;
            cursor: pointer;
            font-size: 25px
        }
    }
    p {
        font-size: 16px;
        text-align: center;
        span {
            font-size: 18px;
            font-weight: 700;
        }
    }
    
    
`;

export const InfoCard = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
    padding: 8px;
   
    h1 {
        font-size: 30px;
        text-align: center;
       
    }
    div {
        display: flex;
        align-item: center;
        justify-content: space-evenly;
        

        span {
            font-weight: 600;
            font-size: 14px;
        }

       }

`

export const StyledForecast = styled.div`
      
`



    