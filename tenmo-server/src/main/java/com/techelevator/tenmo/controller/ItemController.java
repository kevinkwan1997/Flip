package com.techelevator.tenmo.controller;

import java.security.Principal;
import java.time.LocalDate;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import com.techelevator.tenmo.dao.AccountDao;
import com.techelevator.tenmo.dao.BrandDao;
import com.techelevator.tenmo.dao.ItemDao;
import com.techelevator.tenmo.dao.SoldItemDao;
import com.techelevator.tenmo.dao.UserDao;
import com.techelevator.tenmo.model.Account;
import com.techelevator.tenmo.model.Item;
import com.techelevator.tenmo.model.SoldItem;

@RestController
@RequestMapping("/items")
@PreAuthorize("isAuthenticated()")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {
	
	private AccountDao accountDao;
	private BrandDao brandDao;
	private ItemDao itemDao;
	private SoldItemDao soldItemDao;
	private UserDao userDao;
	
	public ItemController(AccountDao accountDao, BrandDao brandDao, ItemDao itemDao, SoldItemDao soldItemDao, UserDao userDao) {
		this.accountDao = accountDao;
		this.brandDao = brandDao;
		this.itemDao = itemDao;
		this.soldItemDao = soldItemDao;
		this.userDao = userDao;
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.GET)
	public Item getItemById(Principal principal, @PathVariable Long id) {
		return itemDao.getItemById(id);
	}
	
	@RequestMapping(value="/all", method = RequestMethod.GET) 
	public List<Item> getAllItems(Principal principal) {
		Account account = getAccountFromPrincipal(principal);
		return itemDao.getAllItemsByAccountId(account.getAccountId());
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method = RequestMethod.POST) 
	public Item addItem(@RequestBody Item item, Principal principal) {
		Account account = getAccountFromPrincipal(principal);
		item.setAccountId(account.getAccountId());
		
		return itemDao.addItem(item);
		
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PUT) 
	public void updateItem(@RequestBody Item item, @PathVariable @Valid Long id, Principal principal ) {
		itemDao.updateItem(item, id);
		
	}
	
	@RequestMapping(value="/status/{id}", method = RequestMethod.PUT)
	public Item changeStatus(@PathVariable @Valid Long id, Principal principal) {
		Item item = getItemById(principal, id);
		return itemDao.changeStatus(item);
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE) 
	public boolean deleteItem(@PathVariable @Valid Long id) {
		try {
			itemDao.deleteItem(id);
			return true;
		} catch(Exception e) {
			e.getMessage();
			return false;
		}
	}
	
	@RequestMapping(value="/sell/{id}", method = RequestMethod.DELETE) 
	public void markSold(@PathVariable @Valid Long id, Principal principal) {
		Item item = itemDao.getItemById(id);
		Account currAccount = getAccountFromPrincipal(principal);
		LocalDate todayDate = LocalDate.now();
		SoldItem soldItem = new SoldItem(null, item.getItemId(), item.getAccountId(), item.getItemName(), item.getPriceListed(), item.getPrice(), item.getListDate(),todayDate);
		soldItemDao.addItem(soldItem);
		itemDao.deleteItem(id);

	}
	
	//Retrieves account information for current logged in user
	private Account getAccountFromPrincipal(Principal principal) {
		Long userId = (long) userDao.findIdByUsername(principal.getName());
		return accountDao.getAccountByUserId(userId);
	}
	
	
}
