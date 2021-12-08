var backProject = document.getElementById("backThisProjectBtn");

var bookmark = document.querySelector("#bookmarkBtn");

var closeBtn = document.getElementsByClassName("close-modal-btn")[0];

var closeBtnMouseHoverHandler = document.querySelector("#close-btn");

var showPledge3 = document.getElementById("pledge3");

function MultipleEventSelector(pledgeId) {
	var pledgeId = pledgeId.split(" ");
	var results = [],
		item;

	for (var i = 0; i < pledgeId.length; i++) {
		item = document.getElementById(pledgeId[i]);
		if (item) {
			results.push(item);
		}
	}

	return results;
}

var hidingPledgeBox = MultipleEventSelector("pledge pledge1 pledge2 pledge3");
// Event listeners 'click' for example
backProject.addEventListener("click", openModal);

backProject.addEventListener("click", disableRadio);

closeBtn.addEventListener("click", closeModal);

bookmark.addEventListener("click", bookmarkEvent);

closeBtnMouseHoverHandler.addEventListener("mouseover", closeBtnMouseOver);

closeBtnMouseHoverHandler.addEventListener("mouseleave", closeBtnMouseLeave);

// showPledge3.addEventListener("click", showPledgeBox);

hidingPledgeBox[0].addEventListener("click", handleHidePledgeBoxClick, false);

hidingPledgeBox[1].addEventListener("click", handleHidePledgeBoxClick, false);

hidingPledgeBox[2].addEventListener("click", handleHidePledgeBoxClick, false);

hidingPledgeBox[3].addEventListener("click", handleHidePledgeBoxClick, false);

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

function handleHidePledgeBoxClick() {
	if (document.querySelector("#pledge2").checked) {
		document.getElementById("pledge-box2").style.display = "flex";
		document.getElementById("black").style.borderColor = "hsl(176,50%,47%)";
	}
	if (!document.querySelector("#pledge2").checked) {
		document.getElementById("pledge-box2").style.display = "none";
		console.log("reverting back to original color");
		document.getElementById("black").style.borderColor = "hsl(0,0%,48%)";
	}

	if (document.querySelector("#pledge1").checked) {
		console.log("opening via for loop");
		document.getElementById("pledge-box1").style.display = "flex";
		document.getElementById("bamboo").style.borderColor = "hsl(176,50%,47%)";
	}
	if (!document.querySelector("#pledge1").checked) {
		console.log("hiding via for loop");
		document.getElementById("pledge-box1").style.display = "none";
		document.getElementById("bamboo").style.borderColor = "hsl(0,0%,48%)";
	}
}

function disableRadio() {
	document.getElementById("pledge3").disabled = true;
}
