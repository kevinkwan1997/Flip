import React from 'react'
import ItemButtons from '../home/ItemButtons'

const InventoryItemFull = ({ inventoryItem, deleteItem, markSold }) => {
    return (
        <div className='list-item-full'>
            <div className="item-description">
                <h4 className="item-header"> { inventoryItem.itemName }</h4>
                <p className="item-price"> { inventoryItem.brand } </p>
                {(inventoryItem.gender) ? (
                    <p className="item-price"> { inventoryItem.gender }</p>
                ) : (
                    <p className="item-price"> No gender </p>
                )}
                <p className="item-price"> { inventoryItem.itemDesc } </p>
                <p className="item-price"> Listed: { inventoryItem.listDate } </p>
            </div>
            <ItemButtons deleteItem={ deleteItem } markSold={ markSold } itemId={ inventoryItem.id }  />
        </div> 
    )
}

export default InventoryItemFull
