const Brand = ({ brand }) => {

    const fetchLogo = (brand) => {

        //Removes all non alphanumerical characters from brand name, allowing us to search for most brand logos
        const brandName = brand.brandDesc.replace(/\W/g, '')
        const apiLink = '//logo.clearbit.com/' + brandName + '.com'

        return apiLink
    }
    
    return (
        <div className="brand">
            <img src= { fetchLogo(brand) } alt={ brand.brandDesc } />
        </div>
    )
}

export default Brand
