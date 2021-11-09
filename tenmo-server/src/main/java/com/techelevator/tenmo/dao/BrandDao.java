package com.techelevator.tenmo.dao;

import java.util.List;
import com.techelevator.tenmo.model.Brand;

public interface BrandDao {
	
	Brand addBrand(Brand brand);
	
	List<Brand> getBrandsByAccountId(Long accountId);
	
	Brand getBrandById(Long brandId);
	
	List<Brand> getUserBrandByCategory(Long accountId, Long categoryId);
	
	boolean removeBrand(Long brandId);

}
