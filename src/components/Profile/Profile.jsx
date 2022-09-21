import PropTypes from 'prop-types';
import{ ProfileStyle, ProfileAvatar } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileStyle className="profile">
            <div className="description">
                <ProfileAvatar
                src={avatar}
                alt={username}
                className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li className="statsItem">
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li className="statsItem">
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li className="statsItem">
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </ProfileStyle>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }),
}