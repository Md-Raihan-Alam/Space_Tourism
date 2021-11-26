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
        // updateSection.innerHTML=``;
    }else{
        document.body.className="";
        // updateSection.innerHTML="";
    }
}
updateInfo('2');
let planetMenu=document.querySelectorAll('.planetOpt .planet');
planetMenu.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        planetMenu.forEach((e)=>{
            e.classList.remove('active');
        });
        e2.target.parentNode.classList.add('active');
    });
});