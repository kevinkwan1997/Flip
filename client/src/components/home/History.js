import HistoryItem from "./HistoryItem"

const History = ({ history }) => {
    return (
        <div className='history'>
            {
                
                history.reverse().map((soldItem) => {
                    return <HistoryItem className="history-item" key={ soldItem.soldItemId }soldItem={ soldItem } />
                })
            }  
        </div>
    )
}

export default History
