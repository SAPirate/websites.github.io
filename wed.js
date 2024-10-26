function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
  
//
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