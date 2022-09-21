import styled from '@emotion/styled';


export const ProfileStyle = styled.div`
    height: 300px;
    width: 300px;
    padding: 5px;
    margin-bottom: 40px;
    
    border-radius: 20px;
        box-shadow: 1px 1px 1px rgb(114, 208, 252), 
                    4px 4px 4px rgb(114, 208, 252), 
                    1px 4px 6px rgb(114, 208, 252);
}
   
.description{
    display: flex;
    flex-direction: column;
    align-items: center;
}


.name{
    font-size: 20px;
    margin: 5px;
}
.tag{
    font-size: 15px;
    padding: 5px;
    margin: 5px;
}
.location{
    font-size: 20px;
    margin: 5px;
}
.stats{
    font-size: 10px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}
.statsItem{
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background-color: #72d0fc;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-radius: 10%;

    :last-child {border-right: 1px solid black;}
}
.label{
    margin-bottom: 5px;
}
.quantity{
    margin-bottom: 5px;
}
 `;

export const ProfileAvatar = styled.img`
    width: 150px;
    padding: 0px;
    border-radius: 50%;
`;