var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ------------------responsiveness script-------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// ---------------google sheet config-----------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwpHruFcInBeibtmJvn-2pGfGK_jUDBJgyAcAkLG07Pg7uT57IB1yhmvMwI3GC75m_kmg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(()=>msg.innerHTML="",5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })