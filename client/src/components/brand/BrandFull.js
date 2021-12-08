import LogoService from '../../LogoService'
import React from 'react'

const BrandFull = ({ brand }) => {
    return (
        <div className="brand-full">
            <img className="brand-img-full" src= { LogoService.fetchLogo(brand) } alt={ brand.brandDesc } />
        </div>
    )
}

export default BrandFull
