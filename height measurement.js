let body= document.querySelector('body')


let distance;

let distancesubmit= document.getElementById('distancesubmit')
distancesubmit.addEventListener('click',function () {
    let dis= document.getElementById('distanceinput').value
    distance=dis;

    document.getElementById('distanceinput').style.display="none"
    document.getElementById('distancesubmit').style.display="none"
    
    document.getElementById('labledistance').style.display="none"


})



body.onload = function(){

   
    window.addEventListener("deviceorientation",onOrientationChange)


    navigator.mediaDevices.getUserMedia({video:{
        facingMode: 'environment'

    }})
    .then (function(signal){
    const video=document.getElementById("myvideo");
    video.srcObject=signal;
    video.play();
    
    })


};






function onOrientationChange (event){
    let angel=event.beta-90;
    if (angel<0) {
        angel=0;
    }



const height= Math.tan(angel*Math.PI/180)*distance;



let heightInfo= document.getElementById('heightInfo')
heightInfo.innerHTML=` <h5>   ${ height.toFixed(1)} <span style="   font-size: 15px;    ">Meters</span>  </h5> `
}

