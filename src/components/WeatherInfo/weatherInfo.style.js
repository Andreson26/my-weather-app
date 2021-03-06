import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    color: rgb(77, 75, 75);
    width: 70%;
    background-color: rgb(168, 204, 218);

    h1 {
        font-size: 50px;
        font-family: sans-serif
    }
    h3 {
        font-size: 50px;

    }
    
    `;
export const ContainerInfo = styled.div`
    
    h3 {
        border: 1px solid white;
        text-align: center;
        width: 200px;
        font-weight: 500;
        margin: auto;
        font-size: 80px;
        border-radius: 50%;
        box-shadow: 3px 5px #80808080;

        button {
            border: none;
            background-color: transparent;
            margin: -5px;
            cursor: pointer;
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
        font-size: 40px;
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



    