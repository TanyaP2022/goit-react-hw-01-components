import PropTypes from 'prop-types';
import{ FriendListItemStyled, FriendAvatar, FriendStatus, FriendName } from './FriendList.styled';


export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <FriendListItemStyled className="item">
            <FriendStatus className="status" status={isOnline}></FriendStatus>
            <FriendAvatar className="avatar" src={avatar} alt={name} width="48" />
            <FriendName className="name">{name}</FriendName>
        </FriendListItemStyled>
        
    );
};

FriendListItem.propTypes = {
    data: PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.string.isRequired,
        })
};