import ItemButtons from './ItemButtons'

const InventoryItem = ({ inventoryItem }) => {
    return (
        <div className='list-item'>
            <div className="item-description">
                <h3> { inventoryItem.itemName }  <span className="item-brand"> { inventoryItem.brand }</span> </h3>
                <p> Current Price: { inventoryItem.price }</p>
                <p> Listed Price: { inventoryItem.priceListed }</p>
            </div>
            <ItemButtons />
        </div> 
    )
}

export default InventoryItem
