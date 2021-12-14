package com.techelevator.tenmo.dao;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import com.techelevator.tenmo.model.Item;

@Component
public class JdbcItemDao implements ItemDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcItemDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Item getItemById(Long itemId) {
		Item item = null;
		String sql = "SELECT * FROM items WHERE item_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, itemId);
		if(rs.next()) {
			item = mapItem(rs);
		}
		return item;
	}

	@Override
	public Item addItem(Item item) {
		String sql = "INSERT INTO items (item_brand, gender, item_name, item_type_id, price, price_listed, item_desc, item_status_id, account_id, list_date )"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		int itemId = jdbcTemplate.update(
				sql, 
				item.getBrand(), 
				item.getGender(), 
				item.getItemName(), 
				item.getItemTypeId(), 
				item.getPrice(), 
				item.getPriceListed(), 
				item.getItemDesc(), 
				item.getItemStatusId(), 
				item.getAccountId(), 
				item.getListDate()
				);
		System.out.println(itemId);
		Long longId = new Long(itemId);
		return getItemById(longId)	;
	}

	@Override
	public List<Item> getAllItemsByAccountId(Long accountId) {
		List<Item> list = new ArrayList<>();
		Item item = null;
		String sql = "SELECT * FROM items WHERE account_id = ?";
		SqlRowSet rs = jdbcTemplate.queryForRowSet(sql, accountId);
		while(rs.next()) {
			item = mapItem(rs);
			list.add(item);
		}
		return list;
	}

	@Override
	public Item updateItem(Item item, Long itemId) {
		Item updateRequestItem = checkNullReturnOriginalProperties(item);
		String sql = getSql(updateRequestItem);
		int id = runCorrectUpdate(sql, updateRequestItem, itemId);
		
		return getItemById(itemId);
	}
	
	@Override
	public Item changeStatus(Item item) {
		String sql = "UPDATE items SET item_status_id = ? WHERE item_id = ?";
		int rs = 0;
		if(item.getItemStatusId() == 1) {
			rs = jdbcTemplate.update(sql, 2, item.getItemId());
		} else {
			rs = jdbcTemplate.update(sql, 1, item.getItemId());
		}
		return getItemById(new Long(rs));
	}

	@Override
	public void deleteItem(Long itemId) {
		String sql = "DELETE FROM items WHERE item_id = ?";
		jdbcTemplate.update(sql, itemId);
	}
	
	/*Helper methods*/
	
	//runs correct jdbcTemplate update depending on given attributes
	public int runCorrectUpdate(String sql, Item item, Long itemId) {
		int id = 0;
		boolean noParams = item.getItemName() == null && item.getItemDesc() == null && item.getPrice() == null;
		boolean allParams = item.getItemName() != null && item.getItemDesc() != null && item.getPrice() != null;
		boolean nameAndDesc = item.getItemName() != null && item.getItemDesc() != null && item.getPrice() == null;
		boolean nameAndPrice = item.getItemName() != null && item.getItemDesc() == null && item.getPrice() != null;
		boolean descAndPrice = item.getItemName() == null && item.getItemDesc() != null && item.getPrice() != null;
		boolean nameOnly = item.getItemName() != null && item.getItemDesc() == null && item.getPrice() == null;
		boolean descOnly = item.getItemName() == null && item.getItemDesc() != null && item.getPrice() == null;
		boolean priceOnly = item.getItemName() == null && item.getItemDesc() == null && item.getPrice() != null;
		if(allParams) {
			id = jdbcTemplate.update(sql, item.getItemName(), item.getItemDesc(), item.getPrice(), itemId);
		} else if (nameAndDesc) {
			id = jdbcTemplate.update(sql, item.getItemName(), item.getItemDesc(), itemId);
		} else if (nameAndPrice) {
			id = jdbcTemplate.update(sql, item.getItemName(), item.getPrice(), itemId);
		} else if (descAndPrice) {
			id = jdbcTemplate.update(sql, item.getItemDesc(), item.getPrice(), itemId);
		} else if (nameOnly) {
			id = jdbcTemplate.update(sql, item.getItemName(), itemId);
		} else if (descOnly) {
			id = jdbcTemplate.update(sql, item.getItemDesc(), itemId);
		} else if (priceOnly) {
			id = jdbcTemplate.update(sql, item.getPrice(), itemId);
		}
		return id;
	}
	
	//Takes parameters of request item and returns the correct SQL statement
	public String getSql(Item item) {
		String sql = null;
		boolean noParams = item.getItemName() == null && item.getItemDesc() == null && item.getPrice() == null;
		boolean allParams = item.getItemName() != null && item.getItemDesc() != null && item.getPrice() != null;
		boolean nameAndDesc = item.getItemName() != null && item.getItemDesc() != null && item.getPrice() == null;
		boolean nameAndPrice = item.getItemName() != null && item.getItemDesc() == null && item.getPrice() != null;
		boolean descAndPrice = item.getItemName() == null && item.getItemDesc() != null && item.getPrice() != null;
		boolean nameOnly = item.getItemName() != null && item.getItemDesc() == null && item.getPrice() == null;
		boolean descOnly = item.getItemName() == null && item.getItemDesc() != null && item.getPrice() == null;
		boolean priceOnly = item.getItemName() == null && item.getItemDesc() == null && item.getPrice() != null;
		if(allParams) {
			sql = "UPDATE items SET item_name = ?, item_desc = ?, price = ? WHERE item_id = ?";
		} else if (nameAndDesc) {
			sql = "UPDATE items SET item_name = ?, item_desc = ? WHERE item_id = ?";
		} else if (nameAndPrice) {
			sql = "UPDATE items SET item_name = ?, price = ? WHERE item_id = ?";
		} else if (descAndPrice) {
			sql = "UPDATE items SET item_desc = ?, price = ? WHERE item_id = ?";
		} else if (nameOnly) {
			sql = "UPDATE items SET item_name = ? WHERE item_id = ?";
		} else if (descOnly) {
			sql = "UPDATE items SET item_desc = ? WHERE item_id = ?";
		} else if (priceOnly) {
			sql = "UPDATE items SET price = ? WHERE item_id = ?";
		}
		return sql;
		
	}
	
	//Takes in an item and checks for null values in request, and replaces them with the original values before updating	
	public Item checkNullReturnOriginalProperties(Item item) {
		Item originalItem = getItemById(item.getItemId());
		String price = originalItem.getPrice().toString();
		if(item.getPrice() != null) {
			price = item.getPrice().toString();
		}
		String[] original = {originalItem.getItemName(), originalItem.getItemDesc(), price};
		
		String itemName = item.getItemName();
		String itemDesc = item.getItemDesc();
		String currPrice = originalItem.getPrice().toString();
		if(item.getPrice() != null) {
			currPrice = item.getPrice().toString();
		}
		String[] arr = {itemName, itemDesc, currPrice};
		
		for(int i = 0; i < arr.length; i++) {
			if(arr[i] == null) { 
				arr[i] = original[i];
			}
		}
		return new Item(originalItem.getItemId(), arr[0], arr[1], new BigDecimal(arr[2]));
		
	}
	
	public Item mapItem(SqlRowSet rs) {
		Long itemId = rs.getLong("item_id");
		String itemBrand = rs.getString("item_brand");
		String gender = rs.getString("gender");
		String itemName = null;
		Long itemTypeId = null;
		BigDecimal price = null;
		BigDecimal priceListed = null;
		String itemDesc = null;
		Long itemStatusId = null;
		Long accountId = null;
		LocalDate listDate = null;
		if(rs.getString("item_name") != null) {
			itemName = rs.getString("item_name");
		}
		if(rs.getLong("item_type_id") > 0) {
			itemTypeId = rs.getLong("item_type_id");
		}
		if(rs.getBigDecimal("price") != null) {
			price = rs.getBigDecimal("price");
		}
		if(rs.getBigDecimal("price_listed") != null) {
			priceListed = rs.getBigDecimal("price_listed");
		}
		if(rs.getString("item_desc") != null) {
			itemDesc = rs.getString("item_desc");
		}
		if(rs.getLong("item_status_id") > 0) {
			itemStatusId = rs.getLong("item_status_id");
		}
		if(rs.getLong("account_id") > 0) {
			accountId = rs.getLong("account_id");
		}
		if(rs.getDate("list_date") != null) {
			listDate = rs.getDate("list_date").toLocalDate();
		}
		
		return new Item(itemId, itemBrand, gender, itemName, itemTypeId, price, priceListed, itemDesc, itemStatusId, accountId, listDate);
	}


}
