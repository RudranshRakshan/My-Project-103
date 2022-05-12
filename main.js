Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML="<img id='image' src='"+data+"'>"
    })
}