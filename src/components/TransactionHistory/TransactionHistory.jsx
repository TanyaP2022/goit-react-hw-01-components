import PropTypes from 'prop-types';
import { TransactionHistoryTable, HistoryThead, HistoryTh, HistoryTbody, HistoryTr, HistoryTd} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryTable className="transaction-history">
            <HistoryThead>
                        <HistoryTh>Type</HistoryTh>
                        <HistoryTh>Amount</HistoryTh>
                        <HistoryTh>Currency</HistoryTh>
            </HistoryThead>
            <HistoryTbody>
            {items.map(item => {
                return (
                    <HistoryTr key={item.id}>
                        <HistoryTd>{item.type}</HistoryTd>
                        <HistoryTd>{item.amount}</HistoryTd>
                        <HistoryTd>{item.currency}</HistoryTd>
                    </HistoryTr>
                )
            })}
            </HistoryTbody>                    
        </TransactionHistoryTable>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}