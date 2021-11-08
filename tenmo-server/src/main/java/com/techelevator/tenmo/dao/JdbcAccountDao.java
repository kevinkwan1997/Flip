package com.techelevator.tenmo.dao;

import org.springframework.jdbc.core.JdbcTemplate;

import com.techelevator.tenmo.model.Account;

public class JdbcAccountDao implements AccountDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcAccountDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Account getAccountByUserId(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Account updateBalance(Account account) {
		// TODO Auto-generated method stub
		return null;
	}

}
