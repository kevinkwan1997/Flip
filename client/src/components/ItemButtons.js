import Button  from 'react-bootstrap/Button'

const ItemButtons = () => {
    return (
        <div className="item-buttons">
            <Button variant='lightaccent' className='mark-sold custom-btn'>Mark Sold</Button>
            <Button variant='lightaccent' className='custom-btn'>Edit</Button>
            <Button variant='lightaccent' className='custom-btn'>Remove</Button>
        </div>
    )
}
export default ItemButtons
