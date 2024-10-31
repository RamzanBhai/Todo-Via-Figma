let button=document.getElementById('btnn');
let mail=document.getElementById('emails');
let password=document.getElementById('passwords');
let matchmail='ramzan@gmail.com';
let passmatch='12345678';


button.addEventListener('click',()=>{

    
    if( mail.value==matchmail && password.value==passmatch){
        return window.location.href='/task/task.html';
    }
    alert('wrong details');
    reload();
})