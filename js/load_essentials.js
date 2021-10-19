let header =
`<h1>IL FOTOGRAFO</h1> <p>Arturo Kermen, al tuo servizio.</p>`

document.getElementById("myHead").innerHTML = header
	
let navbar= `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="topnav" id="myTopnav">
  <a href="index.html" class="active">Home</a>
  <a href="link1.html"> Link 1</a>
  <a href="link2.html">Link 2</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
`

document.getElementById("myTopnav").innerHTML = navbar
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }



document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " by AlmaPato. </p>"
	+ '<h2> "La fotografia è un altro modo di amare la vita, catturare il tempo e fermare i sentimenti per sempre" Homero Luján</h2> '
	+ "<p id='contact'><a href='mailto:Analiajensen@gmail.com'>contatto via e-mail</a> ";

	



