'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	
};

$(window).resize(function(){
	location.reload();
});
/*const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler);
};*/
function replaceHtml(el, html) {
	let oldEl = typeof el === "string" ? document.querySelector(el) : el;
	/*@cc_on // Pure innerHTML is slightly faster in IE
		oldEl.innerHTML = html;
		return oldEl;
	@*/
	let newEl = oldEl.cloneNode(false);
	newEl.innerHTML = html;
	oldEl.parentNode.replaceChild(newEl, oldEl);
	/* Since we just removed the old element from the DOM, return a reference
	to the new element, which can be used to restore variable references. */
	return newEl;
};

function getJson() {
    return fetch('https://raw.githubusercontent.com/cmb347827/results-summary-component-main/main/data.json')
     .then(response => response.json())
     .then(response => {console.log(response);return response;})
     .catch(err => {
       console.error(err);
     });  
}

async function displayData(){
	
	const results= document.querySelector('.results');
	const data= await(getJson());
	
	let array= []; let string='';
	data.forEach((element,index) => {
		//empty alt for aria as are decorative img
	    string+=`<p><img class='icon' alt='' src=${element.icon}> ${element.category}  <span class='right-dark-font${index}'>${element.score}<span class='inherit-position light-font'>/100</span></span></p>`;
    });
	//replaceHtml('.results', string)
	//results.innerHTML = array.join(' ');
	$('.results').append(string);
}


$(window).on('load',function(){
	displayData();
	const summary= document.querySelector('#summary');
	summary.textContent = `Summary`;
});