import ItemButtons from './ItemButtons'

const InventoryItem = ({ inventoryItem, deleteItem, markSold }) => {
    return (
        <div className='list-item'>
            <div className="item-description">
                <h4 className="item-header"> { inventoryItem.itemName }</h4>
                <p className="item-price"> ${ inventoryItem.price } </p>
            </div>
            <ItemButtons deleteItem={ deleteItem } markSold={ markSold } itemId={ inventoryItem.id }  />
        </div> 
    )
}

export default InventoryItem
