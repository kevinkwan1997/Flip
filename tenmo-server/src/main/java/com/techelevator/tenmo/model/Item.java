package com.techelevator.tenmo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Item {
	
	private Long itemId;
	private String brand;
	private String gender;
	private String itemName;
	private Long itemTypeId;
	private BigDecimal price;
	private BigDecimal priceListed;
	private String itemDesc;
	private Long itemStatusId;
	private Long accountId;
	private LocalDate listDate;
	
	
	
	public Item(Long itemId, String brand, String gender, String itemName, Long itemTypeId, BigDecimal price,
			BigDecimal priceListed, String itemDesc, Long itemStatusId, Long accountId, LocalDate listDate) {
		this.itemId = itemId;
		this.brand = brand;
		this.gender = gender;
		this.itemName = itemName;
		this.itemTypeId = itemTypeId;
		this.price = price;
		this.priceListed = priceListed;
		this.itemDesc = itemDesc;
		this.itemStatusId = itemStatusId;
		this.accountId = accountId;
		this.listDate = listDate;
	}
	
	public Long getItemId() {
		return itemId;
	}
	public void setItemId(Long itemId) {
		this.itemId = itemId;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public Long getItemTypeId() {
		return itemTypeId;
	}
	public void setItemTypeId(Long itemTypeId) {
		this.itemTypeId = itemTypeId;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public BigDecimal getPriceListed() {
		return priceListed;
	}
	public void setPriceListed(BigDecimal priceListed) {
		this.priceListed = priceListed;
	}
	public String getItemDesc() {
		return itemDesc;
	}
	public void setItemDesc(String itemDesc) {
		this.itemDesc = itemDesc;
	}
	public Long getItemStatusId() {
		return itemStatusId;
	}
	public void setItemStatusId(Long itemStatusId) {
		this.itemStatusId = itemStatusId;
	}
	public Long getAccountId() {
		return accountId;
	}
	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}
	public LocalDate getListDate() {
		return listDate;
	}
	public void setListDate(LocalDate listDate) {
		this.listDate = listDate;
	}
	
	

}
