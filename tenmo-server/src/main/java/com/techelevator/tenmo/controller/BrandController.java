package com.techelevator.tenmo.controller;

import java.security.Principal;

import org.springframework.security.access.prepost.PreAuthorize;
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
import com.techelevator.tenmo.model.Brand;

@RestController
@RequestMapping("/brands")
@PreAuthorize("isAuthenticated()")
public class BrandController {
	
	private AccountDao accountDao;
	private BrandDao brandDao;
	private ItemDao itemDao;
	private SoldItemDao soldItemDao;
	private UserDao userDao;
	
	public BrandController(AccountDao accountDao, BrandDao brandDao, ItemDao itemDao, SoldItemDao soldItemDao, UserDao userDao) {
		this.accountDao = accountDao;
		this.brandDao = brandDao;
		this.itemDao = itemDao;
		this.soldItemDao = soldItemDao;
		this.userDao = userDao;
	}
	
	@RequestMapping(path = "/all", method = RequestMethod.GET)
	public List<Brand> getAllBrandByAccountId(Principal principal) {
		Account currentAccount = getAccountFromPrincipal(principal);
		return brandDao.getBrandsByAccountId(currentAccount.getAccountId());
		
	}
	
	@RequestMapping(path= "", method = RequestMethod.POST)
	public void addBrand(@RequestBody Brand brand, Principal principal) {
		Account currAccount = getAccountFromPrincipal(principal);
		brand.setAccountId(currAccount.getAccountId());
		brandDao.addBrand(brand);
		
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public void removeBrand(@PathVariable @Valid Long id, Principal principal) {
		Account currAccount = getAccountFromPrincipal(principal);
		Long currUserAccId = currAccount.getAccountId();
		Brand brand = brandDao.getBrandById(id);
		Long brandAccountId = brand.getAccountId();
		if(currUserAccId.equals(brandAccountId)) {
			brandDao.removeBrand(id);
		} 
		
	}
	
	//Retrieves account information for current logged in user
	private Account getAccountFromPrincipal(Principal principal) {
		Long userId = (long) userDao.findIdByUsername(principal.getName());
		return accountDao.getAccountByUserId(userId);
	}

}
