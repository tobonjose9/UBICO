package com.doo.ubico.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public  final class EstadoAulaEntity {
    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private int id;
    private String nombre;
}
