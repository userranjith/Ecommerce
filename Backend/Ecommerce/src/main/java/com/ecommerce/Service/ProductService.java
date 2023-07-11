package com.ecommerce.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.Entity.Product;
import com.ecommerce.Repository.ProductRepo;

@Service
public class ProductService {

	@Autowired
	ProductRepo pr;
	
	public Product addSingleProduct(Product p)
	{
		return pr.save(p);
	}
		
	
	public List<Product> addListofProducts(List <Product> p)
	{
		List<Product> list= pr.saveAll(p);
		return list;
	}
	
	public List<Product> getAllProducts()
	{
		return pr.findAll();
	}
}
