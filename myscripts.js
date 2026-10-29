function setVisibility(id) {
    
    document.querySelectorAll('button[id^="topic"]')
    var divs = document.getElementsByTagName("div"), i;
 
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    document.getElementById(id).value = 'Show Layer';
    document.getElementById(id).style.display = 'Block';
}


// When the user clicks on the button, toggle between hiding and showing the dropdown content
function togglediv(id) {
    var div = document.getElementById(id);
    var divs = ['Home', 'Standards', 'Blog', 'Training', 'Contact'];
    for (var i = 0; i < divs.length; i++) {
        if (div != document.getElementById(divs[i])) {
            document.getElementById(divs[i]).style.display = 'none';
        }
        else {
            document.getElementById(divs[i]).style.display = 'none';
        }
    }
    div.style.display = div.style.display == "block" ? "none" : "block";
}
    

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
