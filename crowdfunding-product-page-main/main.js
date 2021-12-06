var backProject = document.getElementById("backThisProjectBtn");

var bookmark = document.querySelector("#bookmarkBtn");

var closeBtn = document.getElementsByClassName("close-modal-btn")[0];

var closeBtnMouseHoverHandler = document.querySelector("#close-btn");

var showPledge3 = document.getElementById("pledge3");

var hidePledge3 = document.getElementById("pledge2");

var showPledge2 = document.getElementById("pledge2");

var hidePledge2 = document.getElementById("pledge3");

showPledge2.addEventListener("click", () => {
	if (document.querySelector("#pledge2").checked) {
		document.getElementById("pledge-box2").style.display = "flex";
	}
});

hidePledge2.addEventListener("click", () => {
	if (document.querySelector("#pledge3").checked) {
		document, (getElementById("pledge-box2").style.display = "none");
	}
});

// Event listeners 'click' for example
backProject.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

bookmark.addEventListener("click", bookmarkEvent);

closeBtnMouseHoverHandler.addEventListener("mouseover", closeBtnMouseOver);

closeBtnMouseHoverHandler.addEventListener("mouseleave", closeBtnMouseLeave);

showPledge3.addEventListener("click", showPledgeBox);

hidePledge3.addEventListener("click", hidePledgeBox);

//Listen for outside click
window.addEventListener("click", outsideClick);

function openModal() {
	console.log("123");
	backProjectModal.style.display = "block";
}

function closeModal() {
	console.log("close modal has been clicked");
	backProjectModal.style.display = "none";
}

function outsideClick(e) {
	console.log("outside of modal was clicked, Exiting....");
	if (e.target == backProjectModal) {
		backProjectModal.style.display = "none";
	}
}

function bookmarkEvent() {
	if (document.querySelector("#bookmark-text").textContent === "Bookmark") {
		document.querySelector("#bookmark-container").style.color =
			"hsl(176, 72%, 28%)";
		document.querySelector("#bookmark-text").textContent = "Bookmarked";
		document.querySelector("#bookmark-logo").style.background =
			"url(./images/icon-bookmarked.svg)";
	} else {
		document.querySelector("#bookmark-container").style.color =
			"hsl(0, 0%, 40%)";
		document.querySelector("#bookmark-text").textContent = "Bookmark";
		document.querySelector("#bookmark-logo").style.background =
			"url(./images/icon-bookmark.svg)";
	}
}

function closeBtnMouseOver() {
	console.log("mouse over");
	document.querySelector("#close-btn").style.backgroundImage =
		"url(./images/icon-close-menu-hover.svg)";
}

function closeBtnMouseLeave() {
	console.log("mouse leave");
	document.querySelector("#close-btn").style.backgroundImage = null;
}

function showPledgeBox() {
	if (document.querySelector("#pledge3").checked) {
		document.getElementById("pledge-box3").style.display = "flex";
	}
}

function hidePledgeBox() {
	if (!document.querySelector("#pledge3").checked) {
		document.getElementById("pledge-box3").style.display = "none";
	}
}

// var pledgeEdition = document.querySelector('#pledge-edition-bamboo');

// pledgeEdition.addEventListener('mouseover', () => {
//     document.querySelector('#pledge-edition-bamboo').style.color = "hsl(176, 50%, 47%)";
// })

// pledgeEdition.addEventListener('mouseleave', () => {
//     document.querySelector('#pledge-edition-bamboo').style.color = "hsl(0,0%,0%)";
// })

// pledgeEdition.addEventListener('click', () => {
//     if(document.querySelector('#pledge2').checked === false){
//         document.querySelector('#pledge2').checked = true
//         document.querySelector('#pledge-edition-bamboo').style.color = "hsl(176, 50%, 47%)";
//     }else{
//         document.querySelector('#pledge2').checked = false
//         document.querySelector('#pledge-edition-bamboo').style.color = "hsl(0, 0%, 0%)";
//     }

// })

// hideElement.addEventListener("click", hideElementPledge);

// showElement.addEventListener("click", showElementPledge);

// var hideElement = document.getElementById("pledge1");

// var showElement = document.getElementById("pledge2");

// function hideElementPledge() {
// 	console.log("hiding element");
// 	document.getElementById("no-reward").style.display = "none";
// }

// function showElementPledge() {
// 	console.log("showing element");
// 	if (document.querySelector("#pledge2").checked === true) {
// 		document.getElementById("no-reward").style.display = "block";
// 	}
// }
