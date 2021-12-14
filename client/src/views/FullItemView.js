import React from 'react'
import InventoryItemFull from '../components/inventory/InventoryItemFull'

const FullItemView = ({ inventory, deleteItem, markSold }) => {
    return (
        <div className="view-container">
            <div className="view-inner full-item-view">
            {
                    inventory.map((inventoryItem) => {
                        return <InventoryItemFull key={ inventoryItem.itemId } inventoryItem={ inventoryItem } deleteItem={ deleteItem } markSold={ markSold } />
                    })
                }
            </div>
        </div>
    )
}

export default FullItemView
