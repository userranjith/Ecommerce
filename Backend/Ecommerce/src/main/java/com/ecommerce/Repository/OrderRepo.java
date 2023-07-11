package com.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.Entity.OrderAR;

@Repository
public interface OrderRepo extends JpaRepository<OrderAR, Integer> {

}
