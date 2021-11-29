import InventoryItem from "./InventoryItem"

const Inventory = ({ inventory }) => {
    return (
        <div className='inventory'>
                {
                    inventory.map((inventoryItem) => {
                        return <InventoryItem key={ inventoryItem.id } inventoryItem={ inventoryItem } />
                    })
                }
        </div>
    )
}

export default Inventory
