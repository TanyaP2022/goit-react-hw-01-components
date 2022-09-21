import styled from '@emotion/styled';
import { randomColor } from './RandomColor';

export const StatisticsStyle = styled.div`
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
margin: 0px;
padding: 5px;
margin-bottom: 40px;

border-radius: 20px;
    box-shadow: 1px 1px 1px rgb(114, 208, 252), 
                4px 4px 4px rgb(114, 208, 252), 
                1px 4px 6px rgb(114, 208, 252);


    .list {
        
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: #fff;
    }
    .item {
        list-style-type: none;
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-radius: 10%;
        background-color: ${randomColor};

            :last-child {border-right: 1px solid black;}
    }

    }
    .label{
        font-size: 10px;

    }
    .percentage{
        font-size: 20px;

    }

`
