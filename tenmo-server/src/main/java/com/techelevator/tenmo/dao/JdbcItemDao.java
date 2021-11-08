package com.techelevator.tenmo.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;

import com.techelevator.tenmo.model.Item;

public class JdbcItemDao implements ItemDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcItemDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Item addItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Item> getAllItemsByAccountId(Long accountId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Item updateItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteItem(Item item) {
		// TODO Auto-generated method stub
		return false;
	}

}
