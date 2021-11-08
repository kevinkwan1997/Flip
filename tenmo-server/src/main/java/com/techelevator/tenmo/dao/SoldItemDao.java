package com.techelevator.tenmo.dao;

import java.util.List;
import com.techelevator.tenmo.model.SoldItem;

public interface SoldItemDao {
	
	SoldItem addItem(SoldItem soldItem);
	
	List<SoldItem> getAllSoldItems(Long userId);
	
	

}
