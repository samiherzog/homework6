var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	console.log("Play Video");
	console.log(video)
	volume = document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML= (video.volume * 100) + "%";

	var play = document.querySelector(".play");
	var img = '<img src=js/play.png alt =""/>'
  play.innerHTML = img + "Play Video";
	document.querySelector("img").height = "15"
	document.querySelector("img").width = "15"

}

function pauseVid() {
	video.pause();
	console.log("Pause Video");

	var pause = document.querySelector(".pause");
	var img = '<img src=js/pause.png height = "15" width = "15" alt =""/>'
	pause.innerHTML = img + "Pause Video";
}

function decreaseSpeed() {
		video.playbackRate -= .2
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate +=.2
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	video.currentTime += 60
	console.log("Current location is "+  video.currentTime);
	if (video.ended){
		video.load();
		video.playbackRate = 1
		console.log("Current location is "+  video.currentTime);
	}
}

function mute() {
	console.log(video.muted)
	if (video.muted){
			video.muted = false;
  		console.log("Changing to Unmuted");
			var button= document.querySelector("#mute");
			button.innerHTML= "Mute"
	}
	else{
			video.muted = true;
    	console.log("Changing to Muted");
			var button= document.querySelector("#mute");
			button.innerHTML= "Unmute"
	}

}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML= (slider.value) + "%";

}

function gray() {
	video.style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	video.style = "color";
	console.log("In color")
}
