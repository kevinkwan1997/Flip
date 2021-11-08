package com.techelevator.tenmo.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;

import com.techelevator.tenmo.model.SoldItem;

public class JdbcSoldItemDao implements SoldItemDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcSoldItemDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public SoldItem addItem(SoldItem soldItem) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<SoldItem> getAllSoldItems(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
