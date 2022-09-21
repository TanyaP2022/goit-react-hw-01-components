import PropTypes from 'prop-types';
import { StatisticsStyle } from './Statistics.styled';
import { randomColor } from './RandomColor';


export const Statistics = ({title, stats}) => {
    return (
        <StatisticsStyle className ="statistics">
            <h2 className="title">{title.toUpperCase()}</h2>
            <ul className="list">
               {stats.map(item => (
                    <li key={item.id} className="item" style={randomColor()}>
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </StatisticsStyle>
    );
};

Statistics.propTypes = {
    // label: PropTypes.arrayOf(PropTypes.object).isRequired,
    // label: PropTypes.string.isRequired,
    // percentage: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
};