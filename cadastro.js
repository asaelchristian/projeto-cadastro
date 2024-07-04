/*Código Javascript*/


function onYes(){  
    Swal.fire({
title: "Você deseja receber notificações da Paris Chansons?",
text: "Somos a maior e melhor companhia do ramo imobiliário do mundo, segundo a última pesquisa da Forbes feita em Julho de 2024.",
color: "#FFFFFF",
icon: "question",
background: "url('imagens/city-night.jpg') no-repeat center center",
showCancelButton: true,
cancelButtonText: "Não!",
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Sim!"
}).then((result) => {
if (result.isConfirmed) {
Swal.fire({
title: "Confirmado!",
text: "Enviaremos nossas últimas novidades a você.",
icon: "success"
});
}
});
}

function button(){
Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Não foi possível encontrar sua busca :(",
    footer: '<b>Trágico!</b>'
  });
}