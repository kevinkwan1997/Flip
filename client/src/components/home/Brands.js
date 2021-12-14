import Brand from "./Brand"

const Brands = ({ brands }) => {
    return (
        <div className='brands'>
            {
                brands.map((brand) => {
                    return <Brand brand={ brand } key={brand.brandId} />
                })
            }
        </div>
    )
}

export default Brands
