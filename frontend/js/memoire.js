"use strict";

var random ;
var randomTb=[];
var check=0;
var resultat=[];
var essai=0;
var reussite=0;
function generer(){
	if (check===0){
		if (essai===5){
			alert("Vous Avez reussis "+reussite +" paternes /5");
			essai=0;
			reussite=0;
		}
		else{
			check=1;
			essai=essai+1;
			document.getElementById("nrTry").innerHTML="vous ete a votre essai "+essai+"/5";
			
			for(let i=1;i<31;i++){
				document.getElementById("case"+i).style.backgroundColor="#FFF";
				randomTb=[];
				resultat=[];
			}			
			for(let i=0;i<19;i++){
				random= Math.floor(Math.random() * 30)+1; 
				randomTb.push(random);
				document.getElementById("case"+random).style.backgroundColor="#000";
			}
			for(let i=0;i<randomTb.length;i++){
				randomTb=randomTb.sort();
				if (randomTb[i]===randomTb[i+1]){
				randomTb.splice(i,1);
				i=i-1;
				}
			}
			setTimeout("debut()",5000);
		}
	}
}

function debut() {
	for(let i=1;i<31;i++){
			document.getElementById("case"+i).style.backgroundColor="#FFF";
		}	
	check=2;	
}
function action(o){
	if(check===2){	
		if(o.style.backgroundColor==="rgb(0, 0, 0)"){o.style.backgroundColor="#fff";}
		else{o.style.backgroundColor="#000";}
	}
}
function result(){
	if (check===2){
		for(let i=1;i<31;i++){
				if (document.getElementById("case"+i).style.backgroundColor==="rgb(0, 0, 0)"){
					resultat.push(i);
				}
			}
		if(resultat.sort().join()===randomTb.join()){
			alert("BRAVO PATERNE RECONSTITUEE");
			reussite=reussite+1;
			}
		else{
			alert("echec");
		}
		check=0;
		
	}
}
