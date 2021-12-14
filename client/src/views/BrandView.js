import BrandFull from "../components/brand/BrandFull"

const BrandView = ({ brands }) => {
    return (
        <div className="view-container">
            <div className="view-inner full-brand-view">
            {
                brands.map((brand) => {
                    return <BrandFull brand={ brand } key={brand.id} />
                })
            }
            </div>
            
        </div>
    )
}

export default BrandView
