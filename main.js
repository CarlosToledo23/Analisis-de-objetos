
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
cam = document.getElementById("camara");
Webcam.attach('#camara');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="foto" src="'+ data_uri +'"/>';
    });
}
console.log("esta es la version de ml5=", ml5.version);
clasificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zvR0ZPMoi/model.json',model_loaded);
function model_loaded() {
    console.log("modelo empieza aqui");
}
function check() {
    img= document.getElementById("foto");
    clasificador.classify(img,gotresult);
}
function gotresult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}