document.getElementById('submit-btn').addEventListener('click',function(){
    var emailInput=document.getElementById('email').value;
    const isValidEmail=validator.isEmail(emailInput);
     if(isValidEmail){
       //document.getElementById('submit-link').setAttribute('href','success.html')
        document.body.innerHTML="";
       const div=document.createElement("div");
       div.className='message-box'
    const svgData=' <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>';
    const parser = new DOMParser();
   const svgElement = parser.parseFromString(svgData, "image/svg+xml").documentElement;
    div.appendChild(svgElement);
    svgElement.setAttribute('id','my-svg');
    const h1=document.createElement('h1');
    h1.innerHTML="Thanks for <br> subscribing!";
    div.appendChild(h1);
    const p=document.createElement('p');
    p.innerHTML=`A confirmation email has been sent to<br> <span class="my-span">${emailInput}</span>. Please open it and click<br> the button inside to confirm your subscription.`;
    div.appendChild(p);
    const a=document.createElement('a');
    a.setAttribute("href","");
    a.innerHTML='<input type="submit" value="Dismiss message" id="dismiss-btn">';
    div.appendChild(a);
    document.body.appendChild(div);
    }
    else  { 
     document.getElementById('email').style.border=' 1px solid #FF5670 ';
     document.getElementById('alert-message').innerHTML='Valid email required.';

    }
})