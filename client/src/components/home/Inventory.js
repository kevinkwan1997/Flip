import InventoryItem from "./InventoryItem"

const Inventory = ({ inventory, deleteItem, markSold }) => {
    return (
        <div className='inventory'>
                {
                    inventory.map((inventoryItem) => {
                        return <InventoryItem key={ inventoryItem.itemId } inventoryItem={ inventoryItem } deleteItem={ deleteItem } markSold={ markSold } />
                    })
                }
        </div>
    )
}

export default Inventory
