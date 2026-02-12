package com.example.customerbackend.model;

public record Trade(String id, String customerId, String symbol, int amount, String tradedAt) {}
