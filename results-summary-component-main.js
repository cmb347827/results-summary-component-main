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


function getJson() {
    return fetch('https://corsproxy.io/?https://www.jsonkeeper.com/b/R41L')
     .then(response => response.json())
     .then(response => {return response;})
     .catch(err => {
       console.error(err);
     });  
}

async function displayData(){
	const results= document.querySelector('.results');
	const data= await(getJson());
	let array=[];
	data.forEach((element,index) => {
		//empty alt for aria as are decorative img
	    array.push(`<p><img class='icon' alt='' src=${element.icon}> ${element.category}  <span class='right-dark-font${index}'>${element.score}<span class='inherit-position light-font'>/100</span></span></p>`);
    });
	results.innerHTML = array.join(' ');
}



$(window).on('load',function(){
	
	displayData();
	const summary= document.querySelector('#summary');
	summary.textContent = `Summary`;
});