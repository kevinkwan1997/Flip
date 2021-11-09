package com.techelevator.tenmo.model;

public class Brand {
	
	private Long brandId;
	private String brandDesc;
	private Long itemTypeId;
	private Long accountId;
	
	public Brand(Long brandId, String brandDesc, Long itemTypeId, Long accountId) {
		this.brandId = brandId;
		this.brandDesc = brandDesc;
		this.itemTypeId = itemTypeId;
		this.accountId = accountId;
	}

	public Long getBrandId() {
		return brandId;
	}

	public void setBrandId(Long brandId) {
		this.brandId = brandId;
	}

	public String getBrandDesc() {
		return brandDesc;
	}

	public void setBrandDesc(String brandDesc) {
		this.brandDesc = brandDesc;
	}

	public Long getItemTypeId() {
		return itemTypeId;
	}

	public void setItemTypeId(Long itemTypeId) {
		this.itemTypeId = itemTypeId;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}
	
	
	

}
