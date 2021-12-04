const Metrics = ({ getTotal, getOtherMetrics }) => {
    return (
        <div className='metrics'>
            <h3>Total Sales: ${ getTotal() }</h3>
            <h4>Items Listed: { getOtherMetrics().listedTotal }</h4>
            <h4>Items Sold: { getOtherMetrics().soldTotal }</h4>
        </div>
    )
}

export default Metrics
