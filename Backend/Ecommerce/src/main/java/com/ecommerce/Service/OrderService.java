package com.ecommerce.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.Entity.OrderAR;
import com.ecommerce.Entity.Product;
import com.ecommerce.Repository.OrderRepo;

@Service
public class OrderService {

	@Autowired
	OrderRepo or;
	
	public OrderAR addSingleOrder(OrderAR o)
	{
		return or.save(o);
	}
	public List<OrderAR> addListofOrders(List <OrderAR> o)
	{
		List<OrderAR> list= or.saveAll(o);
		return list;
	}
	
	public List<OrderAR> getAllOrders()
	{
		return or.findAll();
	}
}
