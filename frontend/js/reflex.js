"use strict";

var check =0;
var echec=0;
var resultat =[];
function afficherRandom(){
	if (check === 0){
		echec=0;
		if(resultat.length>=5){
			time=0;
			let resultaffiche ="";
			for(let l=1;l<resultat.length+1;l++){
				if(resultat[l-1]!='echec'){
					resultaffiche+= " essai "+l+": "+resultat[l-1]+" millisecondes" +"<br>";
				}
				else{resultaffiche+= " essai "+l+": echec de l'essai <br>";}
				console.log(resultaffiche); 
			}
			let resultatTri= resultat.filter(unit => unit !='echec');
			let somme=0;
			for (let i=0 ;i<resultatTri.length;i++){
				somme+= resultatTri[i];
			}
			let moyenne = Math.round((somme/resultatTri.length)*100)/100
			resultaffiche += "<br>moyenne : "+moyenne+" millisecondes";
			document.getElementById("resultat").innerHTML = resultaffiche;
			resultat=[];
		}
		else{
			document.getElementById("nrTry").innerHTML = "ceci est votre essai " +(resultat.length+1)+"/5";
		var random = Math.random()*10000 ;
			while(random<2000|| random>7000){
				random = Math.random()*10000 ;
			};
			check = 1;
			
			document.getElementById("afficherRng").innerHTML = "pret!";
		
			setTimeout(function(){ 
							if(echec===0){
								document.getElementById("case1").style.backgroundColor="#0f0"; 
								startTimer();
								document.getElementById("afficherRng").innerHTML = "top!";
							}
							else{echec=0;
								check=0;
								document.getElementById("afficherRng").innerHTML = "retry";
							}
						},random
						)
			
		}
	}
}
function action(){
	 if(document.getElementById("case1").style.backgroundColor =="rgb(0, 255, 0)" ){
		 stopTimer();
		 if(i<20){
			alert("vous avez mis "+Math.round((i*10)+(i*1.15))+" millisecondes a repondre.Bravo ! cela est plus rapide que la moyenne mondial ");
		 }
		 else{alert("vous avez mis "+Math.round((i*10)+(i*1.15))+" millisecondes a repondre")}
		resultat.push(Math.round((i*10)+(i*1.15))); // le i*1.15 ajouté au resultat est due au temp que l'ordinateur met a executer la boucle "startTimer" (+-1.15ms ) (temp calculé en faisant correspondre l'evoltion de i a un chronometre sur une duree de 10 min)
		 i=0;
		document.getElementById("case1").style.backgroundColor= "red" ;
		document.getElementById("afficherRng").innerHTML = "retry";
		check=0;
	 }
	 else{
		 if(check==1&& echec==0){
			echec=1;
			time=0;
			i=0;
			alert("echec");
			resultat.push("echec");
			document.getElementById("afficherRng").innerHTML = "echec";
			
		 }
	 }
 }
var i=0;
var time;
function startTimer(){
i=i+1;
time=setTimeout("startTimer()",10);
}

function stopTimer(){
clearTimeout(time);
time=0;
}


document.addEventListener('DOMContentLoaded',onloadPage);

function onloadPage(){
	document.getElementById("formulaireUser").addEventListener("submit",formSubmit);	
}

function formSubmit (event){
	event.preventDefault();
	envoieAjax(this.UserName.value,this.UserNaissance.value);
	console.log(this.UserName.value,this.UserNaissance.value); 
}

function envoieAjax(userName,userNaissance){
let xhr= new XMLHttpRequest();
	let webService="localhost:81/formVerif";

	xhr.open('get',webService+"?p="+document.getElementById('UserName').value+"&n="+document.getElementById('UserNaissance').value,true);
	xhr.onload= function(){
		console.log("salut");}
	xhr.send();
}
