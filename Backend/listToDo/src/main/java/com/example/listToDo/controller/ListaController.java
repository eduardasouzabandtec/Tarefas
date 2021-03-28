package com.example.listToDo.controller;

import com.example.listToDo.dominios.Lista;
import com.example.listToDo.repositorios.ListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class ListaController {
    @Autowired
    private ListaRepository repository;

    @GetMapping
    public ResponseEntity getLista(){
        try {
            return  ResponseEntity.ok(repository.findAll());
        }catch(Exception error){
            return  ResponseEntity.noContent().build();
        }
    }

    @PostMapping
    public  ResponseEntity cadastrarToDo(@RequestBody Lista lista){
        try {
            if (lista.getStatus()== null){
                lista.setStatus(false);
            }
            repository.save(lista);
            return  ResponseEntity.created(null).build();
        }catch (Exception error){
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping("/apagar")
    public ResponseEntity deleteLista(@RequestParam Integer id){
        try {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }catch (Exception error){
            return  ResponseEntity.noContent().build();
        }

    }
}
