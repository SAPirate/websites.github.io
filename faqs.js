// faqs
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click",() => {
        faq.classList.toggle("active");
    });
});

// 

function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // 