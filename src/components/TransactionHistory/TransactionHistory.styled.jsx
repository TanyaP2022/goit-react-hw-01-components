import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;

border-radius: 20px;
    box-shadow: 1px 1px 1px rgb(114, 208, 252), 
                4px 4px 4px rgb(114, 208, 252), 
                1px 4px 6px rgb(114, 208, 252);


`
export const HistoryThead = styled.thead`
margin: 10px 10px 0 10px;

`
export const HistoryTh = styled.th`
width: 100px;
padding: 10px;
border: 1px solid white;
border-radius: 5%;
background-color: #72d0fc;

`
export const HistoryTbody = styled.tbody`
margin: 0px 10px 0 10px;

`
export const HistoryTr = styled.tr`
padding: 5px;

:nth-of-type(2n){
    background-color: #e3f3fa;
}

`

export const HistoryTd = styled.td`
    text-align: center;
    width: 100px;
    padding: 10px;
    border: 1px solid white;
    border-radius: 5%;

`

