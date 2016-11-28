//change color of cup depend from selection
var mugColor = 'blue';
function checkColor(){
	 var el = document.getElementById('cupIMG');
	 var e = document.getElementById("selectColor");
	var test = e.options[e.selectedIndex].value;
	if(document.getElementById('selectColor').value == "green") {
	// Change the value of the class attribute.
	el.className = 'green';
	mugColor=test;
	}	

	if(document.getElementById('selectColor').value == "red") {
		el.className = 'red';
		mugColor=test;
	}
	if(document.getElementById('selectColor').value == "blue") {
		el.className = 'blue';
		mugColor=test;
	}
	if(document.getElementById('selectColor').value == "purple") {
		el.className = 'purple';
		mugColor=test;
	}
	if(document.getElementById('selectColor').value == "pink") {
		el.className = 'pink';
		mugColor=test;
	}
	showPanel();
}

var mugPrice=0; //initials global variable so changes in function checkSize could be use in difrent methods in code

function checkSize(){
	
	if(document.getElementById('getSize').value == "small_9.99") {
		 mugPrice=9.99;
	}
	
	if(document.getElementById('getSize').value == "medium_12.99") {		
		mugPrice=12.99;    
	}
	
	if(document.getElementById('getSize').value == "large_14.99") {		
		mugPrice=14.99;   
	}
	
	if(document.getElementById('getSize').value == "extraLarge_15.99") {	
		mugPrice=15.99;
	}
	if(document.getElementById('getSize').value == "0") {	
		mugPrice=0;
	}
	//display changes in basket section after evrey change of mug size
	showPanel();
}

var priceThermos=0;
var pricrBase=0;
var priceInitials=0;
var priceLogo=0;

var priceHotPlate=0;
var priceLid=0;
var priceCord=0;

var priceCoffee=0;
var priceMilk=0;
var priceTea=0;

//this method is run every time when something is selected/deselected from items for sell  
//if item is select ste price for this item 
//if item is deselected price for this item is 0 so it will dont show up in basket
function buy(){
	
	 if(document.getElementById('base').checked==true) 
        {
			pricrBase=3;
        }else pricrBase=0;

	if(document.getElementById('thermos').checked==true) 
        {
			priceThermos=7
        }else priceThermos=0;

	if(document.getElementById('printLogo').checked==true) 
        {
			priceLogo=6;
        }	else priceLogo=0;

	if(document.getElementById('initials').checked==true) 
        {
			priceInitials=2;
        } else priceInitials=0;

	if(document.getElementById('hotplate').checked==true) 
        {
			priceHotPlate=15;
        } else priceHotPlate=0;

	if(document.getElementById('lid').checked==true) 
        {
			priceLid=3;
        } else priceLid=0;

	if(document.getElementById('cord').checked==true) 
        {
			priceCord=6;
        } else priceCord=0;

	if(document.getElementById('coffee').checked==true) 
        {
			priceCoffee=15;        
        } else priceCoffee=0;

	if(document.getElementById('milk').checked==true) 
        {
			priceMilk=3;
        } else priceMilk=0;

	if(document.getElementById('tea').checked==true) 
        {
			priceTea=6;
        } else priceTea=0;
	//update basket after every change
	showPanel();	
}

var price = 0; //initializing var to be able to calculate final price and be able to recall in difrent section
function finalPrice(){
	
	price=(priceCoffee + priceMilk + priceTea +priceHotPlate + priceLid + priceCord+mugPrice+priceThermos+pricrBase+priceInitials+priceLogo);
}

var msg = '';  //initializing var so could be updateted in show panel method and be used outsiede this method
function showPanel() {
	finalPrice();

	//reset message to blank evry time when change ocure 
	msg = ''; 
	document.getElementById("submit").style.visibility = "visible";
	//if no item was selected basket will display massege that is empty
if (price == 0) {
	document.getElementById("submit").style.visibility = "hidden";
    msg = 'Your basket is empty';
  }
  
  //text in basket will be updated every time when selection/deselection will happen
	//text is depent from item selected
 else {
		if(mugPrice===9.99){
			msg += '&euro;9.99 Small mug '+ '-'+mugColor+'<br />';
		}
		if(mugPrice==12.99){
			msg += '&euro;12.99 Medium mug '+ '-'+mugColor+'<br />';
		}
		if(mugPrice==14.99){
			msg += '&euro;14.99 Large mug'+ '-'+mugColor+'<br />';
		}
		if(mugPrice==15.99){
			msg += '&euro;15.99 Xtra Large mug '+ '-'+mugColor+'<br />';
		}
		if(priceThermos>0){
			msg += '&euro;7 &emsp; Thermos '+ '<br />';
		}
		if(pricrBase>0){
			msg += '&euro;3 &emsp;Transparent Base '+ '<br />';
		}
		if(priceInitials>0){
			msg += '&euro;2 &emsp; Engraved Initals'+ '<br />';
		}
		if(priceLogo>0){
			msg += '&euro;6 &emsp; Your Logo '+ '<br />';
		}
		if(priceHotPlate>0){
			msg += '&euro;15&emsp;Hot plate for mug '+ '<br />';
		}
		if(priceLid>0){
			msg += '&euro;3 &emsp;Mug lid '+ '<br />';
		}
		if(priceCord>0){
			msg += '&euro;15&emsp;Mug pull cord '+ '<br />';
		}
		if(priceCoffee>0){
			msg += '&euro;15&emsp;1kg Coffee '+ '<br />';
		}
		if(priceMilk>0){
			msg += '&euro;3 &emsp;Condensed milk '+ '<br />';
		}
		if(priceTea>0){
			msg +='&euro;6 &emsp;1000 tea bags '+ '<br />';
		}
		//display final price of selected items;
	   msg += 'Total        &emsp;&emsp;    &euro;' +price.toFixed(2);
  }
  
  // Write the message into the page in BASKET section
var el = document.getElementById('blackboard');
el.innerHTML = msg;


}

