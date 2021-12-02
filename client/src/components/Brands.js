import Brand from "./Brand"

const Brands = ({ brands }) => {
    return (
        <div className='brands'>
            {
                brands.map((brand) => {
                    return <Brand brand={ brand } />
                })
            }
        </div>
    )
}

export default Brands
