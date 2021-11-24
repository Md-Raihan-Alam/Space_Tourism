const underlineClassAll=document.querySelectorAll('.option');
const mediaBorderLineMenu=document.querySelectorAll('.media_menu .menu .option');
let updateUnderline=document.querySelectorAll('.underline');
const barMenu=document.querySelector('.bar');
const crossMenu=document.querySelector('.cross');
const mediaMenu=document.querySelector('.media_menu');
//dekstop and tab menu
underlineClassAll.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        let selectedClass=e2.target.parentNode.classList[1];
        let selectedUnderline=document.querySelector(`.${selectedClass} .underline`);
        updateUnderline.forEach((e)=>{
            e.classList.remove('active');
        });
        selectedUnderline.classList.add('active');
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