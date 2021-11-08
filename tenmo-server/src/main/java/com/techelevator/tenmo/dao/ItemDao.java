package com.techelevator.tenmo.dao;

import java.util.List;
import com.techelevator.tenmo.model.Item;

public interface ItemDao {
	
	Item addItem(Item item);
	
	List<Item> getAllItemsByAccountId(Long accountId);
	
	Item updateItem(Item item);
	
	boolean deleteItem(Item item);

}
