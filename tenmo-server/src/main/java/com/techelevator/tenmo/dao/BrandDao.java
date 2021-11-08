package com.techelevator.tenmo.dao;

import com.techelevator.tenmo.model.Brand;

public interface BrandDao {
	
	Brand addBrand(Brand brand);
	
	Brand getBrandByUserId(Long userId);
	
	boolean removeBrand(Long brandId);

}
