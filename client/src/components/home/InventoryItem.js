import ItemButtons from './ItemButtons'

const InventoryItem = ({ }) => {
    return (
        <div className='list-item'>
            <div className="item-description">
                <h4 className="item-header"> </h4>
                <p className="item-price">  </p>
            </div>
            <ItemButtons />
        </div> 
    )
}

export default InventoryItem
