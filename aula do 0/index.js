function somar() {
    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;
    var resultado = Number(x) + Number(y);
    document.getElementById("resultado").innerHTML = resultado;
    alert('Seu resultado é ' + resultado);
    alert('Vai Corinthians!');
  
    var myImage = document.getElementById("coringa");
    if (resultado == 2012) {
     //myImage.setAttribute("src", "imagens\coringas2.jpg");
     document.getElementById("imagemCassio").style.display="inline-block";     
     const audio = document.getElementById("auau");
  audio.play();

  }
  if(resultado == 2007){
    document.getElementById("trist").style.display="inline-block";
    
    const audio = document.getElementById("triste");
  audio.play();
  }
}

function subtrair(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x-y;

    document.getElementById("resultado").innerHTML=resultado;

    alert ('seu resultado é ' + resultado);
    alert("vai corinthians !");
    
    
    var myImage = document.getElementById("coringa");
    if (resultado == 2012) {
     //myImage.setAttribute("src", "imagens\coringas2.jpg");
     document.getElementById("imagemCassio").style.display="inline-block";     
  }
}

function multiplicar(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x*y;

    document.getElementById("resultado").innerHTML=resultado;

    alert ('seu resultado é ' + resultado)
    alert("vai corinthians !");

    var myImage = document.getElementById("coringa");
    if (resultado == 2012) {
     //myImage.setAttribute("src", "imagens\coringas2.jpg");
     document.getElementById("imagemCassio").style.display="inline-block";     
  }

}

function dividir(){

    var x = document.getElementById("valor1").value;
    var y = document.getElementById("valor2").value;

    var resultado = x/y;

    document.getElementById("resultado").innerHTML=resultado;
    alert ('seu resultado é ' + resultado)
    alert("vai corinthians !");

    var myImage = document.getElementById("coringa");
    if (resultado == 2012) {
     //myImage.setAttribute("src", "imagens\coringas2.jpg");
     document.getElementById("imagemCassio").style.display="inline-block";     
  }
    
}
