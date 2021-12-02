import LogoService from '../LogoService'

const Brand = ({ brand }) => {

    return (
        <div className="brand">
            <img className="brand-img" src= { LogoService.fetchLogo(brand) } alt={ brand.brandDesc } />
        </div>
    )
}

export default Brand
