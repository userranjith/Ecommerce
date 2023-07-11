package com.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.Entity.Product;

public interface ProductRepo extends JpaRepository<Product, String>{

}
