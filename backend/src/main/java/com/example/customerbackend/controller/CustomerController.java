package com.example.customerbackend.controller;

import com.example.customerbackend.model.Customer;
import com.example.customerbackend.model.CustomerDetail;
import com.example.customerbackend.model.Trade;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

  @GetMapping
  public List<Customer> getCustomers(@RequestParam(required = false) String keyword) {
    List<Customer> list = List.of(
      new Customer("1", "山田 太郎", "taro@example.com", "A"),
      new Customer("2", "鈴木 花子", "hanako@example.com", "B")
    );
    if (keyword == null || keyword.isBlank()) return list;
    return list.stream().filter(c -> c.name().contains(keyword) || c.email().contains(keyword)).toList();
  }

  @GetMapping("/{customerId}")
  public CustomerDetail getCustomerDetail(@PathVariable String customerId) {
    return new CustomerDetail(customerId, "山田 太郎", "taro@example.com", "A", "東京都港区", "03-0000-0000");
  }

  @GetMapping("/{customerId}/trades")
  public List<Trade> getTrades(@PathVariable String customerId) {
    return List.of(
      new Trade("T1", customerId, "7203", 100, "2024-12-01"),
      new Trade("T2", customerId, "6758", 50, "2024-12-10")
    );
  }
}
