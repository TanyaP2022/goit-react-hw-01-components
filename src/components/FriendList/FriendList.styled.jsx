import styled from '@emotion/styled';

export const FriendListStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
padding: 10px;
margin-bottom: 40px;

border-radius: 20px;
    box-shadow: 1px 1px 1px rgb(114, 208, 252), 
                4px 4px 4px rgb(114, 208, 252), 
                1px 4px 6px rgb(114, 208, 252);

`
export const FriendListItemStyled = styled.div`
display: flex;
align-items: center;
width: 100%;
margin-bottom: 15px;

border-radius: 20px;
    box-shadow: 1px 1px 3px rgb(243, 247, 156), 
                1px 1px 1px rgb(243, 247, 156), 
                1px 1px 1px rgb(243, 247, 156), 
                1px 1px 9px rgb(243, 247, 156);

`
export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 10px;
margin-left: 10px;
padding: 5px;
background-color: ${(props) => (props.status ? 'green' : 'red')};
`

export const FriendAvatar = styled.img`
width: 60px;
margin-right: 10px;
padding: 5px;

`
export const FriendName = styled.p`
font-size: 30px;
`