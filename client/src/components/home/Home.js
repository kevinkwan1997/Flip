import Inventory from './Inventory'
import Brands from './Brands'
import Metrics from './Metrics'
import History from './History'
const Home = ({ inventory, brands, history, metric , setInventory, setHistory }) => {
      // Add Item

  // const addItem = (item) => {
  //   const id = inventory[inventory.length].id + 1;
  //   const newItem = { id, ...item }
  //   setInventory([...inventory, newItem]);
  // }

  // Edit Item

  // Remove Item

  const deleteItem = (id) => {
    console.log(id);
    setInventory(inventory.filter((item)=> item.id !== id))
  }

  // Get item from id => 

  const getItemById = (id) => {
    const index = inventory.findIndex((item) => item.id === id )
    return inventory[index];
  }

  // Move item to history

  const markSold = (id) => {
    const date = new Date();
    const now = date.getDate();
    const item = getItemById(id); 
    deleteItem(id);

  }

  // Get total items sold in history 

  const getTotal = () => {
    let total = 0;
    history.forEach((item) => {
      total += item.itemPriceSold
    })
    return total;
  }

  // Get total items listed and sold

  const getOtherMetrics = () => {
    let listedTotal = 0;
    let soldTotal = 0;
    inventory.forEach((item) => {
      listedTotal+= 1;
    })
    history.forEach((item) => {
      soldTotal +=1;
    })

    return { listedTotal, soldTotal }
  }
    return (
        <div className="app-container">
            <Inventory inventory={ inventory } deleteItem={ deleteItem } markSold={ markSold } />
            <Brands brands={ brands } />
            <History history={ history }/>
            <Metrics getTotal={ getTotal } getOtherMetrics={ getOtherMetrics } />
            
        </div>
    )
}

export default Home
