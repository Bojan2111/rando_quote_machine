/*
	Copyright 2020 by Bojan Adzic AKA Coder::Owl
*/ 

const quoteArr = [{
	quote: "He who dares, wins!",
	author: "Derreck Trotter"
},{
	quote: "All this computer hacking is making me thirsty.",
	author: "Homer Simpson"
},{
	quote: "Veni, vidi, vici",
	author: "Caesar"
},{
	quote: "Don't run with scissors in your hands",
	author: "Mom"
},{
	quote: "A face without freckles is like a night sky without stars",
	author: "Unknown"
},{
	quote: "Yesterday is not ours to recover, but tomorrow is ours to win or to lose",
	author: "Lyndon B. Johnson"
},{
	quote: "We are bits of stellar matter that got cold by accident, bits of a star gone wrong.",
	author: "Sir Arthur Eddington"
},{
	quote: "If I have lost confidece in myself, I haave the universe against me.",
	author: "Ralph Waldo Emerson"
},{
	quote: "Resentment is anger directed at others - at what they did or did not do.",
	author: "Peter McWilliams"
},{
	quote: "Charm is a way of getting the answer yes without asking a clear question.",
	author: "Albert Camus"
}];

function rQt() {
	return Math.floor(Math.random() * quoteArr.length);
}

function clickFunc() {
	let rCol = () => {
		let colArr = []
		for (var i = 0; i < 3; i++) {
			colArr.push((Math.floor(Math.random() * 255)).toString(16));
		}
		return "#" + colArr.join('');
	}
	let randCol = rCol();
	document.getElementById("bckg").style.backgroundColor = randCol;
	let complCol = (regCol) => {
		let hexCol = regCol.slice(1);
		let hcarr = [];
		for (let i = 0; i<hexCol.length; i+=2) {
			let temp = (255 - parseInt((hexCol[i] + hexCol[i+1]), 16)).toString(16);
			hcarr.push(temp);
		}
		return "#" + hcarr.join('');
	}
	document.getElementById("quote-box").style.backgroundColor = complCol(randCol);
	document.getElementById("quote-box").style.color = randCol;
	document.getElementById("new-quote").style.backgroundColor = complCol(randCol);
	let randQt = rQt();
	document.getElementById("text").innerHTML = quoteArr[randQt].quote;
	document.getElementById("author").innerHTML = quoteArr[randQt].author;
}

function tweetQuote() {

	let qte = document.getElementById("text").innerHTML;
	let auth = document.getElementById("author").innerHTML;
	document.getElementById('tweet-quote').href='https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + qte + '" ' + auth);
}