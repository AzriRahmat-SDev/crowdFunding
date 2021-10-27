var backProject = document.getElementById('backThisProjectBtn');

var bookmark = document.getElementById('bookmarkBtn');

var closeBtn = document.getElementsByClassName('close-modal-btn')[0];

// Event listeners 'click' for example
backProject.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

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