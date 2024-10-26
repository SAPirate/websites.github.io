const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
    })

    tabs.forEach(tab => {
        tab.classList.remove('active');
})

     tab.classList.add('active');
     target.classList.add('active');
    })
});

// 
var btn_diva = document.getElementById("btn_diva");
var btn_divb = document.getElementById("btn_divb");
var btn_divc = document.getElementById("btn_divc");
var diva = document.getElementById("diva");
var divb = document.getElementById("divb");
var divc = document.getElementById("divc");
btn_diva.addEventListener('click',()=>{
    diva.style.display = "block";
    divb.style.display = "none";
    divc.style.display = "none";
});
btn_divb.addEventListener('click',()=>{
    diva.style.display = "none";
    divb.style.display = "block";
    divc.style.display = "none";
});
btn_divc.addEventListener('click',()=>{
    diva.style.display = "none";
    divb.style.display = "none";
    divc.style.display = "block";
});