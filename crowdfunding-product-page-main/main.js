var backProject = document.getElementById('backThisProjectBtn');

var bookmark = document.querySelector('#bookmarkBtn');

var closeBtn = document.getElementsByClassName('close-modal-btn')[0];

var closeBtnMouseHoverHandler = document.querySelector("#close-btn");

var pledgeEdition = document.querySelector('#pledge-edition-bamboo');

// Event listeners 'click' for example
backProject.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

bookmark.addEventListener('click', bookmarkEvent);

closeBtnMouseHoverHandler.addEventListener('mouseover', closeBtnMouseOver);

closeBtnMouseHoverHandler.addEventListener('mouseleave',  closeBtnMouseLeave);

pledgeEdition.addEventListener('mouseover', () => {
    document.querySelector('#pledge-edition-bamboo').style.color = "hsl(176, 50%, 47%)";
})

// pledgeEdition.addEventListener('mouseleave', () => {
//     document.querySelector('#pledge-edition-bamboo').style.color = "hsl(0,0%,0%)";
// })

pledgeEdition.addEventListener('click', () => {
    if(document.querySelector('#pledge2').checked === false){
        document.querySelector('#pledge2').checked = true
        document.querySelector('#pledge-edition-bamboo').style.color = "hsl(176, 50%, 47%)";
    }else{
        document.querySelector('#pledge2').checked = false
        document.querySelector('#pledge-edition-bamboo').style.color = "hsl(0, 0%, 0%)";
    }
    
})

//Listen for outside click
window.addEventListener('click', outsideClick);

function openModal(){
    console.log('123')
    backProjectModal.style.display = 'block'
}

function closeModal(){
    console.log('close modal has been clicked')
    backProjectModal.style.display = 'none'
}

function outsideClick(e){
    console.log('outside of modal was clicked, Exiting....')
    if(e.target == backProjectModal){
        backProjectModal.style.display = 'none'
    }
}

function bookmarkEvent(){
    if(document.querySelector("#bookmark-text").textContent === "Bookmark"){
        document.querySelector("#bookmark-container").style.color = "hsl(176, 72%, 28%)";
        document.querySelector("#bookmark-text").textContent = "Bookmarked";
        document.querySelector("#bookmark-logo").style.background =  "url(./images/icon-bookmarked.svg)";
    }else{
        document.querySelector("#bookmark-container").style.color = "hsl(0, 0%, 40%)";
        document.querySelector("#bookmark-text").textContent = "Bookmark";
        document.querySelector("#bookmark-logo").style.background =  "url(./images/icon-bookmark.svg)";
    }
}

function closeBtnMouseOver(){
    console.log('mouse over');
    document.querySelector("#close-btn").style.backgroundImage = "url(./images/icon-close-menu-hover.svg)";
}

function closeBtnMouseLeave(){
    console.log('mouse leave')
    document.querySelector("#close-btn").style.backgroundImage = null;
}