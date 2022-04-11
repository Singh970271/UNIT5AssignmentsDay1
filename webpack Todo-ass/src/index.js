  import "./index.css";
  import  "./logo.jpg"
const root=document.getElementById("root");

const h1=document.createElement("h1");
h1.innerText="Tata Motors has taken the wraps off its new electric SUV concept. The concept SUV has been christened the Curvv, and carries an SUV-coupe like design with sharp lines and futuristic design elements. Tata says that the vehicle will hit the market in two years as a part of its electric vehicle lineup and will also be followed by an ICE powered car later."
h1.setAttribute("class","colortxt")
root.append(h1);
 
// image append
const myIcon = new Image();
  myIcon.src = root;
  root.appendChild(myIcon);



