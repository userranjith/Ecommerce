package com.ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.Entity.OrderAR;
import com.ecommerce.Entity.Product;
import com.ecommerce.Service.OrderService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class OrderController {

	@Autowired
	OrderService os;
	
	/*Add single Order*/
	@PostMapping("/addorder")
	public OrderAR addOrder(@RequestBody OrderAR o)
	{
		OrderAR o1= os.addSingleOrder(o);
		return o1;
	}
	
	/*Add list of orders*/
	@PostMapping("/addorders")
	public List<OrderAR> addProducts(@RequestBody List<OrderAR> o)
	{
		List<OrderAR> l=os.addListofOrders(o);
		return l;
	}
	
	/*Show all orders*/
	@GetMapping("/showorders")
	public List<OrderAR> ShowProducts()
	{
		return os.getAllOrders();
	}
	
}
