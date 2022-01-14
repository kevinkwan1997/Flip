import Inventory from './Inventory'
import Brands from './Brands'
import Metrics from './Metrics'
import History from './History'
const Home = ({}) => {

    return (
        <div className="app-container">
            <Inventory />
            <Brands />
            <History />
            <Metrics  />
            
        </div>
    )
}

export default Home
