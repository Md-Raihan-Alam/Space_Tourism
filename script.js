const updateSection=document.querySelector('.result_section');
const underlineClassAll=document.querySelectorAll('.option');
const mediaBorderLineMenu=document.querySelectorAll('.media_menu .menu .option');
let updateUnderline=document.querySelectorAll('.underline');
const barMenu=document.querySelector('.bar');
const crossMenu=document.querySelector('.cross');
const mediaMenu=document.querySelector('.media_menu');
//dekstop and tab menu
underlineClassAll.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        let selectedUpdateResult=e2.target.parentNode.dataset.id;
        let selectedClass=e2.target.parentNode.classList[1];
        let selectedUnderline=document.querySelector(`.${selectedClass} .underline`);
        updateUnderline.forEach((e)=>{
            e.classList.remove('active');
        });
        selectedUnderline.classList.add('active');
        console.log(selectedUpdateResult);
        updateInfo(selectedUpdateResult);
    });
});
//menu appear and dissapppear
barMenu.addEventListener('click',function(){
    mediaMenu.style.display="block";
    crossMenu.addEventListener('click',function(){
    mediaMenu.style.display="none";
    });
});
//mobile menu
mediaBorderLineMenu.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        if(e2.target.classList.contains('text')||e2.target.classList.contains('num')){
             mediaBorderLineMenu.forEach((e)=>{
                e.classList.remove('active');
             });
            e2.target.parentNode.classList.add('active');
        }
    });
});
function updateInfo(data){
    console.log(data);
    if(data==='1'){
        document.body.className="";
        document.body.className="homeImage";
        updateSection.innerHTML=`
        <div class="result_container">
            <div class="text">
                <div class="sub_header">
                    SO, YOU WANT TO TRAVEL TO
                </div>
                <div class="header">
                    SPACE
                </div>
                <div class="desc">
                    Let's face it; if you want to go to space, you might as well genuinely go to outer
                    space and not hover kind of on the edge of it. Well sit back, and relax because we'll give
                    you a truly out of this world experience!
                </div>
            </div>
            <div class="exp_img">
                <div class="exp_box">EXPLORE</div>
            </div>
        </div>`;
    }else if(data==="2"){
        document.body.className="";
        document.body.className="destinationImage"
        destinationUpdate();
    }else{
        document.body.className="";
        // updateSection.innerHTML="";
    }
}
updateInfo('2');
function destinationUpdate(){
    planetUpdate('0');
}
function planetUpdate(planetNo){
    fetch('data.json').
then((res)=>res.json()).
then((data)=>{
updateSection.innerHTML=`
    <div class="planetSection">
            <div class="planerWelcome">
                <div class="welcomeText">
                    <div class="num">01</div>
                    <div class="text">PICK YOUR DESTINATION</div>
                </div>
                <div class="planet">
                    <img src="${data.destinations[planetNo].images.webp}" class="planetSize" alt="${data.destinations[planetNo].name}"/>
                </div>
            </div>
        </div>
        <div class="plantOpDesc">
            <div class="planetOpt">
                <div class="planet one ${planetNo==='0' ? 'active':''}">
                    <div class="planetName" data-id="0">MOON</div>
                    <div class="underline"></div>
                </div>
                <div class="planet two ${planetNo==='1' ? 'active':''}">
                    <div class="planetName" data-id="1">MARS</div>
                    <div class="underline"></div>
                </div>
                <div class="planet three ${planetNo==='2' ? 'active':''}">
                    <div class="planetName" data-id="2">EUROPA</div>
                    <div class="underline"></div>
                </div>
                <div class="planet four ${planetNo==='3' ? 'active':''}">
                    <div class="planetName" data-id="3">TITAN</div>
                    <div class="underline"></div>
                </div>
            </div>
            <div class="currentPlanetName">${data.destinations[planetNo].name}</div>
            <div class="currentPlanetDesc">
                ${data.destinations[planetNo].description}
            </div>
            <div class="border_line"></div>
            <div class="planetInfo">
                <div class="planetDst">
                    <div class="dstDes">AVG. DISTANCE</div>
                    <div class="dstNum">${data.destinations[planetNo].distance}</div>
                </div>
                <div class="planetTime">
                    <div class="timeDesc">EST. TRAVEL TIME</div>
                    <div class="timeNum">${data.destinations[planetNo].travel}</div>
                </div>
            </div>
        </div>
    `;
    let planets=document.querySelectorAll('.planetName');
    planets.forEach((e)=>{
        e.addEventListener('click',(e2)=>{
            let number=e2.target.dataset.id;
            planetUpdate(number);
        });
    });
});
}