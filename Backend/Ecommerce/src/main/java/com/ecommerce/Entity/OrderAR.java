package com.ecommerce.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class OrderAR {

	@Id
	@GeneratedValue
	private int orderId;
	private String name;
	private String mobile;
	private String address;
	private String productsList;
	private Double totalprice;
	public OrderAR() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderAR(int orderId, String name, String mobile, String address, String productsList, Double totalprice) {
		super();
		this.orderId = orderId;
		this.name = name;
		this.mobile = mobile;
		this.address = address;
		this.productsList = productsList;
		this.totalprice = totalprice;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getProductsList() {
		return productsList;
	}
	public void setProductsList(String productsList) {
		this.productsList = productsList;
	}
	public Double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(Double totalprice) {
		this.totalprice = totalprice;
	}
	@Override
	public String toString() {
		return "OrderAR [orderId=" + orderId + ", name=" + name + ", mobile=" + mobile + ", address=" + address
				+ ", productsList=" + productsList + ", totalprice=" + totalprice + "]";
	}
	
	

	

	
}
