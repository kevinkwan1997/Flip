package com.techelevator.tenmo.dao;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import com.techelevator.tenmo.model.SoldItem;

@Component
public class JdbcSoldItemDao implements SoldItemDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcSoldItemDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	public SoldItem getById(Long soldItemId) {
		String sql = "SELECT * FROM sold_items WHERE item_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, soldItemId);
		SoldItem soldItem = null;
		if(rs.next()) {
			soldItem = mapSoldItem(rs);
		}
		
		return soldItem;
	}

	@Override
	public SoldItem addItem(SoldItem soldItem) {
		String sql = "INSERT INTO sold_items (account_id, item_name, item_price_listed, item_price_sold, net, list_date, sold_date) "
				+ "VALUES(?, ?, ?, ?, ?, ?, ?)";
		Long itemId = (long) jdbcTemplate.update(sql, soldItem.getAccountId(), soldItem.getItemName(), soldItem.getItemPriceListed(), soldItem.getItemPriceSold(), soldItem.getNet(), soldItem.getListDate(), soldItem.getSoldDate());
		return getById(itemId);
	}

	@Override
	public List<SoldItem> getAllSoldItems(Long accountId) {
		List<SoldItem> allSoldItemsByUser = new ArrayList<>();
		String sql = "SELECT * FROM sold_items WHERE account_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, accountId);
		while(rs.next()) {
			SoldItem si = mapSoldItem(rs);
			allSoldItemsByUser.add(si);
		}
		return allSoldItemsByUser;
	}
	
	private SoldItem mapSoldItem(SqlRowSet rs) {
		Long soldItemId = rs.getLong("sold_item_id");
		Long itemId = rs.getLong("item_id");
		Long accountId = rs.getLong("account_id");
		String itemName = rs.getString("item_name");
		BigDecimal priceListed = rs.getBigDecimal("item_price_listed");
		BigDecimal priceSold = rs.getBigDecimal("item_price_sold");
		BigDecimal net = priceListed.subtract(priceSold);
		LocalDate listDate = rs.getDate("list_date").toLocalDate();
		LocalDate soldDate = rs.getDate("sold_date").toLocalDate();
		return new SoldItem(soldItemId, itemId, accountId, itemName, priceListed, priceSold, listDate, soldDate);
		
		
	}

}
