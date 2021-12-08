const LogoService = {
    fetchLogo: function(brand) {

        //Removes all non alphanumerical characters from brand name, allowing us to search for most brand logos
        const brandName = brand.brandDesc.replace(/\W/g, '')
        const apiLink = '//logo.clearbit.com/' + brandName + '.com'

        return apiLink
    },

    fetchLogoNameOnly: function(brand) {

        //Removes all non alphanumerical characters from brand name, allowing us to search for most brand logos
        const brandName = brand.replace(/\W/g, '')
        const apiLink = '//logo.clearbit.com/' + brandName + '.com'

        return apiLink
    }
    
}

export default LogoService;