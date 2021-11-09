package com.techelevator.tenmo.dao;

import java.math.BigDecimal;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import com.techelevator.tenmo.model.Account;

@Component
public class JdbcAccountDao implements AccountDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcAccountDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Account getAccountByUserId(Long userId) {
		Account account = null;
		String sql = "SELECT * FROM accounts WHERE user_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, userId);
		
		while(rs.next()) {
			account = mapAccount(rs);
		}
		
		return account;
	}

	@Override
	public Account updateBalance(Account account) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public Account mapAccount(SqlRowSet rs) {
		Long accountId = rs.getLong("account_id");
		Long userId = rs.getLong("user_id");
		BigDecimal balance = rs.getBigDecimal("balance");
		
		return new Account(accountId, userId, balance);
	}

}
