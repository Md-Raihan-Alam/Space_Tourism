const underlineClassAll=document.querySelectorAll('.option');
let updateUnderline=document.querySelectorAll('.underline');
console.log(updateUnderline);
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