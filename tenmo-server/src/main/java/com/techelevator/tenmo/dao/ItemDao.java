package com.techelevator.tenmo.dao;

import java.util.List;
import com.techelevator.tenmo.model.Item;

public interface ItemDao {
	
	Item addItem(Item item);
	
	Item getItemById(Long itemId);
	
	List<Item> getAllItemsByAccountId(Long accountId);
	
	Item updateItem(Item item, Long itemId);
	
	Item changeStatus(Item item);
	
	void deleteItem(Item item);

}
