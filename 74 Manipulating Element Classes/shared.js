var backdrop=document.querySelector('.backdrop'); //it selects the first element of the selector
var modal =document.querySelector('.modal');
var modalNoButton=document.querySelector('.modal__action--negative');
var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');
//var backdrop=document.querySelectorAll('.backdrop'); //it selects the all element of the selector

//console.log(backdrop);
// console.dir(backdrop);    //Dom representation of the object

var selectPlanButtons=document.querySelectorAll('.plan button');
console.dir(modalNoButton); 

for (var i= 0; i<selectPlanButtons.length; i++) 
{
    selectPlanButtons[i].addEventListener('click',function(){
        // backdrop.style.display='block';
        // modal.style.display='block'; 
        // modal.className='open';    //This will overwright the complete class name
        modal.classList.add('open');
        backdrop.classList.add('open');
    });    
}

modalNoButton.addEventListener('click',closeModal);

backdrop.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal(){
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click',function(){
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});