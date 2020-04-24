var i=0;
var images =[];
var time = 2000;

//Listing the images
images[0]= "assets/images/capmap.jpg";
images[1]="assets/images/ironman.jpg";
images[2]= ""assets/images/tho.jpg";  
images[3]="assets/images/hulk.jpg";

//Now changing them

function changeImg(){
		document.slide.src=images[i];
		
	if (i < images.length -1){
		i++;
	}else{
		i=0;
	}
		setTimeout("changeImg()", time);
}

window.onload=changeImg;