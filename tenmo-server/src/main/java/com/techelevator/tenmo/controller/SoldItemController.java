package com.techelevator.tenmo.controller;

import java.security.Principal;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techelevator.tenmo.dao.AccountDao;
import com.techelevator.tenmo.dao.BrandDao;
import com.techelevator.tenmo.dao.ItemDao;
import com.techelevator.tenmo.dao.SoldItemDao;
import com.techelevator.tenmo.dao.UserDao;
import com.techelevator.tenmo.model.Account;

@RestController
@RequestMapping("/items")
@PreAuthorize("isAuthenticated()")
public class SoldItemController {
	
	private AccountDao accountDao;
	private BrandDao brandDao;
	private ItemDao itemDao;
	private SoldItemDao soldItemDao;
	private UserDao userDao;
	
	public SoldItemController(AccountDao accountDao, BrandDao brandDao, ItemDao itemDao, SoldItemDao soldItemDao, UserDao userDao) {
		this.accountDao = accountDao;
		this.brandDao = brandDao;
		this.itemDao = itemDao;
		this.soldItemDao = soldItemDao;
		this.userDao = userDao;
	}
	
	
	
	//Retrieves account information for current logged in user
	private Account getAccountFromPrincipal(Principal principal) {
		Long userId = (long) userDao.findIdByUsername(principal.getName());
		return accountDao.getAccountByUserId(userId);
	}

}
