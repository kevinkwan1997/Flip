package com.techelevator.tenmo.controller;

import java.security.Principal;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.techelevator.tenmo.model.SoldItem;
import com.techelevator.tenmo.dao.AccountDao;
import com.techelevator.tenmo.dao.BrandDao;
import com.techelevator.tenmo.dao.ItemDao;
import com.techelevator.tenmo.dao.SoldItemDao;
import com.techelevator.tenmo.dao.UserDao;
import com.techelevator.tenmo.model.Account;

@RestController
@RequestMapping("/history")
@PreAuthorize("isAuthenticated()")
@CrossOrigin(origins = "http://localhost:3000")
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
	
	@RequestMapping(value="", method = RequestMethod.GET)
	public List<SoldItem> getAllHistory(Principal principal) {
		Account account = getAccountFromPrincipal(principal);
		return soldItemDao.getAllSoldItems(account.getAccountId());
	}
	
	
	
	//Retrieves account information for current logged in user
	private Account getAccountFromPrincipal(Principal principal) {
		Long userId = (long) userDao.findIdByUsername(principal.getName());
		return accountDao.getAccountByUserId(userId);
	}

}
