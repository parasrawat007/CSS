var backdrop=document.querySelector('.backdrop'); //it selects the first element of the selector
var modal =document.querySelector('.modal');
//var backdrop=document.querySelectorAll('.backdrop'); //it selects the all element of the selector

//console.log(backdrop);
// console.dir(backdrop);    //Dom representation of the object

var selectPlanButtons=document.querySelectorAll('.plan button');
console.dir(selectPlanButtons); 

for (var i= 0; i<selectPlanButtons.length; i++) 
{
    selectPlanButtons[i].addEventListener('click',function(){
        backdrop.style.display='block';
        modal.style.display='block'; 
    });    
}