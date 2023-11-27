var listaFilmes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Neot7pPLqu86Hyh6TocKuuoRlQQDXEjXTg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgJBmYg3bwnqpX9_HjFCGWnr2u3QqOZPblg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXp_OlDGtZTZ7BmML2zITm7dQaz8uqMlbNA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAPtaBPyySF6zHicrgJD9j4T7zypCrs9FMw&usqp=CAU",
]
var listaNomes = ["Aranha-verso", "Mamma Mia!", "Encanto", "Jujutsu Kaisen"]

var i = 0
while (i < listaFilmes.length) {
  if (listaFilmes[i].endsWith("=CAU")) {
    document.write("<h2>" + listaNomes[i] + "<h2>")
    document.write("<img src=" + listaFilmes[i] + ">")
  } else {
    alert("Apenas imagens com o final " + "=CAU" + " podem ser utilizadas")
    break
  }
  i++
}
