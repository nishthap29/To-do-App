
var txtbox = document.getElementById('mytxtbox');
var label = document.getElementById('p1');
var chk = document.getElementsByClassName("chk");
var selAll = document.getElementById('sAll');
var btn_all = document.getElementById('all');

// For add value of textbox into the <p> element after user press "ENTER" key
txtbox.addEventListener('keypress',function(event){

	if(txtbox.value == ""){
	alert("Please enter value into the textbox");
	}
	else{
		if(event.keyCode == 13){
			alert("You pressed enterKey");
			alert(txtbox.value);
			label.innerHTML = txtbox.value;		
		}	
	}

},false);


for(var j=0; j < chk.length; j++)
{
	chk[j].addEventListener('click',chkColor,false);
	selAll.addEventListener('click',checktop,false);
	chk[j].addEventListener('click',selectAll,false);
	btn_all.addEventListener('click',btnAll,false);

}

	// if user checked any checkbox, it's color will be "red", if user unchecked a perticular checkbox it's color change again with original
	function chkColor(){
	
		if(this.checked === true){
		
			//alert(this.nextSibling.innerHTML);
			$(this).next().css({"color":"red"});
			//this.nextSibling.innerHTML;
			//alert("checked");
		}
		else if(this.checked === false){
			$(this).next().css({"color":"black"});
		}

	}

	// if user checked all the checkboxes the topper most checkbox named "select all" must be checked by itself
	function selectAll(){
		$(".chk").change(function(){
    		if ($('.chk:checked').length == $('.chk').length) {
       			document.getElementById('sAll').checked = true;
    		}
    		else{
    			document.getElementById('sAll').checked = false;
    		}

		});
	}

	function checktop(){

		if(this.checked){
			$('.chk').each(function(){
				this.checked = true;
			});
		}
		else{
			$('.chk').each(function(){
				this.checked = false;
			});
		}

		
/*
		if(chk[j].checked == true)
		{
			document.getElementById('sAll').checked = true;	
		//	sall.setAttribute('checked',true);
		}
		else{
			document.getElementById('sAll').checked = false;	
			//sall.setAttribute('checked',false);
		}*/
	}

function btnAll(){

	//alert("Click All Button");
//	document.getElementById('chk-div').setAttribute("display","block");
	document.getElementById('chk-div').style.display = "block";
}

