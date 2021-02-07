let score = 100;
document.querySelector(".score").innerHTML = score;
let bet = 0;
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let whichCar = "";
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let hasWinner = false;
let properlyWinner = (type)=>{
	if (bet<=0 || score<=0) {
		alert("Ты не сделал ставку или твой счёт равен нулю")
	}
	else{
		hasWinner = false;
		speedCar(car1,"light");
		speedCar(car2,"sport");
		whichCar = type;
		score-=bet;
		document.querySelector(".score").innerHTML = score;
	}
}

plus.onclick = ()=> {
	if (bet>=score) {
		plus.disabled = true;
	}else {
		minus.disabled = false;
		bet +=10;
		document.querySelector(".bet").innerHTML = bet;
	}
}
minus.onclick = ()=> {
	if (bet<=0) {
		minus.disabled = true;
	}else {
		plus.disabled = false;
		bet -=10;
		document.querySelector(".bet").innerHTML = bet;
	}
}
let speedCar = (car,type)=>{
	let margin = 0;
	let interval = setInterval(()=>{
		let speed = Math.random()*0.1;
		margin = margin + speed;
		car.style.marginLeft=margin+"%";
		if (margin>95) {
			hasWinner = true;
			if (whichCar==type) {
				score += bet*2;
				document.querySelector(".score").innerHTML = score;
				console.log("great choise");
			}else {
				console.log("lose");
			}
		}
		if (hasWinner == true) {
			clearInterval(interval);
		}
	},5)
}



