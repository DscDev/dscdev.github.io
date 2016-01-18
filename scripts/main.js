
 window.addEventListener("scroll",changeHeader);

 function changeHeader(){
 	var $header = document.getElementsByClassName("header")[0];
 	if(window.scrollY === 0 ){
 		$header.className ="header header_max";
 	}else{
 		$header.className ="header header_min";
 	}
 }