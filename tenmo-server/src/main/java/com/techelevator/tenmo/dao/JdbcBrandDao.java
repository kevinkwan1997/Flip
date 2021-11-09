package com.techelevator.tenmo.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import com.techelevator.tenmo.model.Brand;

@Component
public class JdbcBrandDao implements BrandDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcBrandDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Brand addBrand(Brand brand) {
		String sql = "INSERT INTO brands_to_look_for (brand_desc, item_type_id, account_id "
				+ "VALUES (?, ?, ?)";
		Long id = (long) jdbcTemplate.update(sql, brand.getBrandDesc(), brand.getItemTypeId(), brand.getAccountId());
		return getBrandById(id);
	}
	
	@Override
	public Brand getBrandById(Long brandId) {
		Brand brand = null;
		String sql = "SELECT * FROM brands_to_look_for WHERE account_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, brandId);
		if (rs.next()) {
			brand = mapBrand(rs);
		}
		return brand;
	}

	@Override
	public List<Brand> getBrandsByAccountId(Long accountId) {
		List<Brand> list = new ArrayList<>();
		String sql = "SELECT * FROM brands_to_look_for WHERE account_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, accountId);
		while(rs.next()) {
			Brand brand = mapBrand(rs);
			list.add(brand);
		}
		return list;
	}

	@Override
	public boolean removeBrand(Long brandId) {
		String sql = "DELETE FROM brands_to_look_for WHERE brand_id = ?";
		try {
			jdbcTemplate.update(sql, brandId);
			return true;
		} catch(Exception e) {
			e.getMessage();
			return false;
		}
	}

	@Override
	public List<Brand> getUserBrandByCategory(Long accountId, Long categoryId) {
		List<Brand> list = new ArrayList<>();
		String sql = "SELECT * FROM brands_to_look_for WHERE account_id = ? AND category_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, accountId, categoryId);
		while(rs.next()) {
			Brand brand = mapBrand(rs);
			list.add(brand);
		}
		return list;
	}
	
	public Brand mapBrand(SqlRowSet rs) {
		Long brandId = rs.getLong("brand_id");
		String brandDesc = rs.getString("brand_desc");
		Long itemTypeId = rs.getLong("item_type_id");
		Long accountId = rs.getLong("account_id");
		return new Brand(brandId, brandDesc, itemTypeId, accountId);
	}


}
