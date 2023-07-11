package com.ecommerce.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="Products")
public class Product {

	@Id
	private String id;
	private String name;
	private String description;
	private int oldprice;
	private int newprice;
	private String img;
	private String category;
	private double rating;
	private int stock;
	
	

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(String id, String name, String description, int oldprice, int newprice, String img, String category,
			double rating, int stock, OrderAR o) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.oldprice = oldprice;
		this.newprice = newprice;
		this.img = img;
		this.category = category;
		this.rating = rating;
		this.stock = stock;
		
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getOldprice() {
		return oldprice;
	}
	public void setOldprice(int oldprice) {
		this.oldprice = oldprice;
	}
	public int getNewprice() {
		return newprice;
	}
	public void setNewprice(int newprice) {
		this.newprice = newprice;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", oldprice=" + oldprice
				+ ", newprice=" + newprice + ", img=" + img + ", category=" + category + ", rating=" + rating
				+ ", stock=" + stock + "]";
	}
	

	
	
	
	
	
}
