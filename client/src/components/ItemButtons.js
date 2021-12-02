import Button  from 'react-bootstrap/Button'

const ItemButtons = () => {
    return (
        <div className="item-buttons">
            <Button variant='primary' className='mark-sold custom-btn'>Mark Sold</Button>
            <Button variant='primary' className='custom-btn'>Edit</Button>
            <Button variant='darkaccent' className='custom-btn'>Remove</Button>
        </div>
    )
}
export default ItemButtons
