import PropTypes from 'prop-types';
import { FriendListStyled } from './FriendList.styled';

import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {
    return (
        <FriendListStyled className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </FriendListStyled>
    );
};

FriendList.propType = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};