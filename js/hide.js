
let show = document.getElementById('show');
show.addEventListener('mouseover', function run(){
    // alert('You cant copy this text')
}); 

function togglehide(){
    let buttn = document.getElementById('buttn');
    let show = document.getElementById('show');
    if(show.style.display != 'none'){
        show.style.display = "none";
    }
    else{
        show.style.display = 'block'
    }
}  