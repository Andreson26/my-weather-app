import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledSideBar = styled.div`
   text-align: center;
    width: 30%;
    background-color: rgba(0,0,0,0.5);
    padding: 50px 10px;

    div {

        margin: 50px;
    
    }
    
    

    button {
        margin-top: 10px;
        padding: 10px 15px;
        text-transform: uppercase;
        background-color: rgb(168, 204, 218);
        border: none;
        border-radius: 10px;
        color: rgb(77, 75, 75);
        cursor: pointer;
    }
    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    fornt-size: 20px;
    color: white;
    margin-top: 10px;
    align-item: center;
    text-transform: capitalize;
    
`
   
