"use strict";document.addEventListener("DOMContentLoaded",function(){function e(){for(;i.firstChild;)i.removeChild(i.firstChild);i.innerHTML=templates.feedbackThanks,a=document.getElementsByClassName("okBackToPage")[0],this.removeEventListener("click",e),a.addEventListener("click",t)}function t(){for(;i.firstChild;)i.removeChild(i.firstChild);i.innerHTML=templates.feedbackPopUp,s=document.getElementsByClassName("feedbackMessage")[0],s.addEventListener("click",e),a.removeEventListener("click",t)}var n,s,a,i;n=document.getElementsByClassName("contacts-map")[0],i=document.createElement("div"),i.innerHTML=templates.feedbackPopUp,n.appendChild(i),s=document.getElementsByClassName("feedbackMessage")[0],s.addEventListener("click",e)});