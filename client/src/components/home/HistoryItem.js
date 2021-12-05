const HistoryItem = ({ soldItem }) => {
    return (
        <div className="history-item">
            <h4>{ soldItem.itemName }</h4>
            <span>{ soldItem.itemPriceSold }</span>
        </div>
    )
}

export default HistoryItem
