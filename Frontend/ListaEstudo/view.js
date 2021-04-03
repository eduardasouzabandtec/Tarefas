const url = "http://localhost:8080";
const divlista = document.querySelector("#lista");
const divConteiner = document.querySelector("#conteiner");
const divModal = document.querySelector("#dv-modal");
const btnOpenModal = document.querySelector("#btn-Open");
const inputTitle = document.querySelector("#titulo");
const textDiscription = document.querySelector("#text-description");
const btnCloseModal = document.querySelector("#btn-close");
const errorText = document.querySelector("#erro-discription");
const errorInput = document.querySelector("#erro-titulo");
const modalErro = document.querySelector("#modal-excluir");
const btnError = document.querySelector("#btn-excluir");
const xModal = document.querySelector("#x-modal");
const xAdd = document.querySelector("#x-add");
const swiper = document.querySelector(".swipper");

let idDelete ;
let contSwipper = 0;