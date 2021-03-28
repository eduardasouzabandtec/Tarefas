package com.example.listToDo.repositorios;

import com.example.listToDo.dominios.Lista;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ListaRepository extends CrudRepository<Lista,Integer> {
    List<Lista> findAll();
}
