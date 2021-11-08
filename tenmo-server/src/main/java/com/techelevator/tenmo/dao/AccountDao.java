package com.techelevator.tenmo.dao;

import com.techelevator.tenmo.model.Account;

public interface AccountDao {
	
	 //Account is created along with user upon registration
	
	Account getAccountByUserId(Long userId);
	
	Account updateBalance(Account account);
	
}
