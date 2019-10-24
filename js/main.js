/*
There are 2 sign up links. one is styled with btn styling and the other as a simple link. 

function changeSignUpBtn runs when the humbgurger icon for the nav bar is clicked. 
when clicked, check if the sign-up linked styled like a btn is hidden, if it does remove the class styling that hides the sign-up link that is not stlyed as a button.

if it does not, hide the sign up link that is styled as a button.
*/
let navToggler = document.getElementsByClassName("navbar-toggler")[0];


navToggler.addEventListener("click", changeSignUpBtn)
function changeSignUpBtn () {
let signupBtn = document.getElementById("signup-btn").classList.contains("hide-sign-up");

    if(signupBtn){
    document.getElementById("signup-link").classList.remove("hide-sign-up");
    }
    else{

        document.getElementById("signup-btn").classList.add("hide-sign-up");
    }
}

/*
if the client window width is greater than 992, then the hamburger icon is not seen. Therefore, hide the sign up link that is not styled as button.
*/

window.addEventListener("resize",changeSignUpBtn2)
function changeSignUpBtn2 ()  {
    if (window.innerWidth > 992 ){

    let signupBtn2 = document.getElementById("signup-link");
    signupBtn2.classList.add("hide-sign-up");

    let signupBtn = document.getElementById("signup-btn").classList.contains("hide-sign-up");

        if(signupBtn){
        document.getElementById("signup-btn").classList.remove("hide-sign-up");
        }
    }
    
}

window.addEventListener("resize",ulNavBar)
function ulNavBar () {
    if(window.innerWidth<425){
        let ulNavBar = document.getElementById("ul-navbar");
        ulNavBar.classList.add("ul-navbar")
    }
    else{
        let ulNavBar = document.getElementById("ul-navbar");
        ulNavBar.classList.remove("ul-navbar")
    }
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}