import { React, useState } from 'react'

const AddItemModal = ({ }) => {
    const [item, setItem] = useState({
        item:{ 
            brand: '',
            gender: '',
            itemName: '',
            itemTypeId: '',
            price: 0.00,
            priceListed: 0.00,
            itemDesc: '',
            itemStatusId: 2,
            accountId: 0,
            listDate: null
        }
    })

    const validateNumber = (elem) => {
        const validNum = new RegExp(/^\d*\.?\d*$/);
        const defaultNum = document.querySelector('.form-price').value
        if(validNum.test(elem)) {
            defaultNum = elem;
        } else {
            elem = defaultNum;
        }
    }

    const getDate = () => {
        const date = new Date();
        const now = date.getDate();
        return now;
    }

    const handleName = (e) => {
        setItem(prevState => {
            let item = Object.assign({}, prevState.item);
            item.itemName = e.target.value;
            return { item }
        })
    }

    const handleBrand = (e) => {
        setItem(prevState => {
            let item = Object.assign({}, prevState.item);
            item.brand = e.target.value;
            return { item }
        })
    }

    const handleGender = (e) => {
        setItem(prevState => {
            let item = Object.assign({}, prevState.item);
            item.gender = e.target.value;
            return { item }
        })
    }

    const handleItemType = (e) => {
        setItem(prevState => {
            let item = Object.assign({}, prevState.item);
            let typeId = getItemType(e.target.value);
            item.itemTypeId = typeId;
            return { item }
        })
    }

    const handlePrice = (e) => {
        const validated = e.target.value.match(/^(\d*\.{0,1}\d{0,2}$)/)
        if(validated) {
            setItem(prevState => {
                let item = Object.assign({}, prevState.item);
                item.price = e.target.value;
                item.priceListed = e.target.value;
                return { item }
            })
        }
    }

    const handleDate = (e) => {
        setItem(prevState => {
            let item = Object.assign({}, prevState.item);
            item.listDate = e.target.value;
            return { item }
    })
}

    const handleDesc = (e) => {
            setItem(prevState => {
                let item = Object.assign({}, prevState.item);
                item.itemDesc = e.target.value;
                return { item }
            })
    }

    const getItemType = (elem) => {
        const arr = ["Misc", "Electronics", "Clothing", "Furniture", "Jewelry", "Music", "Literature"]
        return arr.indexOf(elem) + 1;
    }

    return (
        <div className="add-item-modal">
            <button className="close-form"> X </button>
            <form action="" className="add-item-form" name="form">
                <label htmlFor="name" className='label'>Name</label>
                <input type="text" name='name' className='add-form-input' value={item.itemName} onChange={(e) => handleName(e) } />
                <label htmlFor="brand" className='label'>Brand</label>
                <input type="text" name='brand' className='add-form-input' value={item.brand} onChange={(e) => handleBrand(e) } />
                <label htmlFor="name" className='label'>Gender</label>
                <select name='gender' className='add-form-input' value={item.gender} onChange={(e) => handleGender(e) }>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="N/A">N/A</option>
                </select>
                <label htmlFor="itemType" className='label'>What type of item?</label>
                <select name='itemType' className='add-form-input' value={item.itemTypeId} onChange={(e) => handleItemType(e) } >
                    <option value="Misc">Misc</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Music">Music</option>
                    <option value="Literature">Literature</option>
                </select>
                <label htmlFor="price" className='label'>Price</label>
                <input type="text" name='name' className='add-form-input form-price' placeholder="0.00"  value={item.price} onChange={(e) => handlePrice(e) } />
                <label htmlFor="price" className='label'>Description</label>
                <input type="text" name='name' className='add-form-input' value={item.itemDesc} onChange={(e) => handleDesc(e) } />
                <label htmlFor="price" className='label'>List Date</label>
                <input type="date" name='name' className='add-form-input' value={item.listDate} onChange={(e) => handleDate(e) } />
                <input type="submit" htmlFor="form"></input>
            </form>
        </div>
    )
}

export default AddItemModal
