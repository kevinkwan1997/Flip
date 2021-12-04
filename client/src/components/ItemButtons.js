import Button  from 'react-bootstrap/Button'

const ItemButtons = ({ deleteItem, itemId, markSold }) => {
    return (
        <div className="item-buttons">
            <Button variant='primary' className='mark-sold custom-btn' onClick={(e) => markSold(itemId)}>Mark Sold</Button>
            <Button variant='darkaccent' className='custom-btn'>Edit</Button>
            <Button variant='dark' className='custom-btn' onClick={(e) => deleteItem(itemId)}>Remove</Button>
        </div>
    )
}
export default ItemButtons
