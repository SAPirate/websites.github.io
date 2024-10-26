function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
  
//
function search(){
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.shop-box');
    let l = document.getElementsByTagName('h1');

    for (var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h1')[0];
        let value = a.innerHTML || a.innerText || a.textContent;

        if (value.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = "";
        }else{
            item[i].style.display = "none"; 
       
        }
    }


}