package com.ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ecommerce.Entity.Product;
import com.ecommerce.Service.ProductService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	ProductService ps;
	
	/*Add single product*/
	@PostMapping("/addproduct")
	public Product addProduct(@RequestBody Product p)
	{
		Product p1= ps.addSingleProduct(p);
		return p1;
	}
	
	/*Add list of Products*/
	@PostMapping("/addproducts")
	public List<Product> addProducts(@RequestBody List<Product> p)
	{
		List<Product>l=ps.addListofProducts(p);
		return l;
	}
	
	/*Show all products*/
	@GetMapping("/showproducts")
	public List<Product> ShowProducts()
	{
		return ps.getAllProducts();
	}
	
	
	

}
