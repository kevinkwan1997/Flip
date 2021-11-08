package com.techelevator.tenmo.dao;

import org.springframework.jdbc.core.JdbcTemplate;

import com.techelevator.tenmo.model.Brand;

public class JdbcBrandDao implements BrandDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcBrandDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Brand addBrand(Brand brand) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Brand getBrandByUserId(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean removeBrand(Long brandId) {
		// TODO Auto-generated method stub
		return false;
	}

}
