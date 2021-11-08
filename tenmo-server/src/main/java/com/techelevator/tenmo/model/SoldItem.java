package com.techelevator.tenmo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class SoldItem {
	
	private Long itemId;
	private Long accountId;
	private String itemName;
	private BigDecimal itemPriceListed;
	private BigDecimal itemPriceSold;
	private BigDecimal net;
	private LocalDate listDate;
	private LocalDate soldDate;
	
	public SoldItem(Long itemId, Long accountId, String itemName, BigDecimal itemPriceListed, BigDecimal itemPriceSold,
			BigDecimal net, LocalDate listDate, LocalDate soldDate) {
		this.itemId = itemId;
		this.accountId = accountId;
		this.itemName = itemName;
		this.itemPriceListed = itemPriceListed;
		this.itemPriceSold = itemPriceSold;
		this.net = net;
		this.listDate = listDate;
		this.soldDate = soldDate;
	}

	public Long getItemId() {
		return itemId;
	}

	public void setItemId(Long itemId) {
		this.itemId = itemId;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public BigDecimal getItemPriceListed() {
		return itemPriceListed;
	}

	public void setItemPriceListed(BigDecimal itemPriceListed) {
		this.itemPriceListed = itemPriceListed;
	}

	public BigDecimal getItemPriceSold() {
		return itemPriceSold;
	}

	public void setItemPriceSold(BigDecimal itemPriceSold) {
		this.itemPriceSold = itemPriceSold;
	}

	public BigDecimal getNet() {
		return net;
	}

	public void setNet(BigDecimal net) {
		this.net = net;
	}

	public LocalDate getListDate() {
		return listDate;
	}

	public void setListDate(LocalDate listDate) {
		this.listDate = listDate;
	}

	public LocalDate getSoldDate() {
		return soldDate;
	}

	public void setSoldDate(LocalDate soldDate) {
		this.soldDate = soldDate;
	}
	
	
	
	

}
