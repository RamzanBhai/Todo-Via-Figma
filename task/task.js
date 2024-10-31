let logoutbtn=document.querySelector('#logout')

logoutbtn.addEventListener('click',()=>{
    window.location.href = '/main/index.html'
});
// Logout end


let btntask=document.getElementById('taskbtn');
let btnloc=document.getElementById('locbtn');
let displays=document.getElementsByClassName('right');
let display2=document.getElementsByClassName('locations');
let newtsk=document.getElementById('newshow');
let mains=document.getElementsByClassName('newMain');
let pop=document.getElementsByClassName('newtask');
let saved=document.getElementById('save');
let canceled=document.getElementById('cancel')
let parents=document.querySelector('.parent');
let summary = document.querySelector('.popupsummary');
let description=document.querySelector('.dscr');
let times=document.querySelector('.time');
let completetask=document.querySelector('.parents');



btntask.addEventListener('click',()=>{
btnloc.style.background='white';
    btnloc.style.color='black';

    btntask.style.background='black';
    btntask.style.color='white';

    for (let i = 0; i < displays.length; i++) 
        displays[i].style.display = 'block';
    for (let i = 0; i < display2.length; i++) 
        display2[i].style.display = 'none';
});

btnloc.addEventListener('click',()=>{
btntask.style.background='white';
    btntask.style.color='black';

    btnloc.style.background='black';
    btnloc.style.color='white';

    for (let i = 0; i < display2.length; i++) 
        display2[i].style.display = 'block';
    for (let i = 0; i < displays.length; i++) 
        displays[i].style.display = 'none';
});

newtsk.addEventListener('click',()=>{
    for (let i = 0; i < mains.length; i++) 
        mains[i].style.display = 'block';
    for (let i = 0; i < pop.length; i++) 
        pop[i].style.display = 'block';
});

saved.addEventListener('click',()=>{
    for (let i = 0; i < mains.length; i++) 
        mains[i].style.display = 'none';
    for (let i = 0; i < pop.length; i++) 
        pop[i].style.display = 'none';
       if(summary.value !== '' &&
        description.value !== '' &&
        times.value !== ''){ addData(summary.value,description.value,times.value)};
    summary.value = ''
    description.value = ''
    times.value = ''
})

canceled.addEventListener('click',()=>{
    for (let i = 0; i < mains.length; i++) 
        mains[i].style.display = 'none';
    for (let i = 0; i < pop.length; i++) 
        pop[i].style.display = 'none';
    summary.value = ''
    description.value = ''
    times.value = ''
})

   
function addData(sumry,descrip,date){

    let newDiv=document.createElement('div');
    newDiv.className='datas';

    let inputs=document.createElement('input')
    inputs.type='checkbox';
    newDiv.appendChild(inputs);

    let heading=document.createElement('h3')
     heading.innerHTML=sumry;
     newDiv.appendChild(heading);

     let para=document.createElement('p')
        para.innerHTML=` <i class="uil uil-clock"></i>${descrip} ${date}`
        newDiv.appendChild(para)
parents.appendChild(newDiv)
}

document.addEventListener('click',()=>{
    let alldivs = document.querySelectorAll('.datas')
    let singleitem  =alldivs.forEach(item=>{
        let checkbox = item.querySelector('input')
        let heading = item.querySelector('h3')
        if (checkbox.checked) {
            newdiv2(heading.innerHTML)
            parents.removeChild(item)
        }
    })
});

function newdiv2(heading){
  let divs=document.createElement('div')
  divs.className='complt';

  let inputed=document.createElement('input')
  inputed.type='checkbox'
  inputed.checked='true'
  divs.appendChild(inputed);

  let paras=document.createElement('p')
  paras.innerHTML=heading
  divs.appendChild(paras);
completetask.appendChild(divs);

}

        //   Tasks ended



        let btun=document.querySelector('#btns');
        let loctrac=document.querySelector('.trackloc');
        let setname= document.querySelector('.citynam');
        let p=document.querySelector('.ltd');
        let existing=document.querySelector('.exitcurr');
let latitude =0;
let longitude =0;
let final;
        btun.addEventListener('click',()=>{ 
 navigator.geolocation.getCurrentPosition(gotlocation,failedLocatoin)
            exits()
        });

function exits(){
    if (setname.innerHTML !== '') {
        let exitloc=document.createElement('div')
        exitloc.className='previous';
    
        let headingss=document.createElement('h4')
           headingss.className = 'cityname'
           headingss.innerHTML=final
            exitloc.appendChild(headingss);
    
        let pars=document.createElement('p')
          pars.innerHTML=`${latitude}; ${longitude}`
          exitloc.appendChild(pars);
    
          existing.appendChild(exitloc);
          
    }
}

function gotlocation(position){
    if(navigator.geolocation){
 latitude=`${position.coords.latitude} `
  longitude= `${position.coords.longitude} `
  getUserCurrentAddress(latitude,longitude)
    }
}

let   getUserCurrentAddress=(latitude,longitude)=>{
    let apiKey='bdc_99384fdff59d4e9690a5b278b22ad170';
        let endpoint=`https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=${apiKey}`;

    let fetchdata = fetch(endpoint).then((response)=>{
        return response.json() 
        }).then((data)=>{
         final= setname.innerHTML=`&#128205 ${data.city} , ${data.countryName}`;
              p.innerHTML=`${latitude}, ${longitude}`
              return  data.city,data.countryName;
        })  
}

function failedLocatoin(){
    console.log('User block location');
}



