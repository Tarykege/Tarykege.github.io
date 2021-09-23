var fcan = document.getElementById("can");
var redImg, grayImg, image_Original, greenImg, blueImg, tealImg, orangeImg, yellowImg, indigoImg, violetImg=null;

function loadImage(){
    //ve anh goc len canvas va gan file anh vao bien filter
    var fimage = document.getElementById("fimage");
    image_Original = new SimpleImage(fimage);
    redImg = new SimpleImage(fimage);
    grayImg = new SimpleImage(fimage);
    greenImg= new SimpleImage(fimage);
    blueImg= new SimpleImage(fimage);
    tealImg= new SimpleImage(fimage);
    orangeImg= new SimpleImage(fimage);
    yellowImg= new SimpleImage(fimage);
    indigoImg= new SimpleImage(fimage);
    violetImg= new SimpleImage(fimage);
    image_Original.drawTo(fcan);
}
function makeOriginal(){
    //ve anh goc len canvas
    image_Original.drawTo(fcan);
}

function makeEmptyImage(){
        //xoa anh tren canvas
        canvas = fcan.getContext("2d");
        canvas.clearRect(0,0,fcan.width,fcan.height);
        image_Original=null;
        redImg=null;
        grayImg=null;
}

function imgIsLoaded(img){
    //kiem tra anh hop le va duoc nguoi dung tai len chua
    if(img==null){
        alert("Image not loaded");
        return false;
    }
    else return true;
}
function makeOne(img){
    for(var px of image_Original.values()){
        x=px.getX();
        y=px.getY();
        img.setPixel(x,y,px);
    }
}

function filterGray(){
    //truy vet het tat ca diem anh va doi gia tri mau 
    for(var px of grayImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        px.setRed(avg);
        px.setGreen(avg);
        px.setBlue(avg);
    }
}

function filterRed(){
    //truy vet het tat ca diem anh va doi gia tri mau
    for(var px of redImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setRed(avg*2);
            px.setBlue(0);
            px.setGreen(0);
        }
        else {
            px.setRed(255);
            px.setBlue(avg*2-255);
            px.setGreen(avg*2-255);
        }
    }
}

function filterGreen(){
    //truy vet het tat ca diem anh va doi gia tri mau
    for(var px of greenImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setGreen(avg*2);
            px.setBlue(0);
            px.setRed(0);
        }
        else {
            px.setGreen(255);
            px.setBlue(avg*2-255);
            px.setRed(avg*2-255);
        }
    }
}

function filterBlue(){
    
    for(var px of blueImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setBlue(avg*2);
            px.setGreen(0);
            px.setRed(0);
        }
        else {
            px.setBlue(255);
            px.setGreen(avg*2-255);
            px.setRed(avg*2-255);
        }
    }
}

function filterTeal(){
    for(var px of tealImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setBlue(153/127.5*avg);
            px.setGreen(170/127.5*avg);
            px.setRed(17/127.5*avg);
        }
        else {
            px.setBlue((2 - 153/127.5)*avg + 2*153 - 255);
            px.setGreen((2 - 170/127.5)*avg + 2*170 - 255);
            px.setRed((2 - 17/127.5)*avg + 2*17 - 255);
        }
    }
}

function filterOrange(){
    for(var px of orangeImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setBlue(0);
            px.setGreen(0.8*avg);
            px.setRed(2*avg);
        }
        else {
            px.setBlue(2*avg - 255);
            px.setGreen(1.2*avg-51);
            px.setRed(255);
        }
    }
}
function filterYellow(){
    for(var px of yellowImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setBlue(0);
            px.setGreen(2*avg);
            px.setRed(2*avg);
        }
        else {
            px.setBlue(2*avg - 255);
            px.setGreen(255);
            px.setRed(255);
        }
    }
}
function filterIndigo(){
    for(var px of indigoImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setBlue(2*avg);
            px.setGreen(0);
            px.setRed(0.8*avg);
        }
        else {
            px.setBlue(255);
            px.setGreen(2*avg-255);
            px.setRed(1.2*avg-51);
        }
    }
}
function filterViolet(){
    for(var px of violetImg.values()){
        var avg= (px.getRed()+px.getGreen()+px.getBlue())/3;
        if(avg<128){
            px.setBlue(1.6*avg);
            px.setGreen(0);
            px.setRed(1.6*avg);
        }
        else {
            px.setBlue(0.4*avg+153);
            px.setGreen(2*avg-255);
            px.setRed(0.4*avg+153);
        }
    }
}

function doGray(){
    //ra lenh to mau khi nguoi dung click vao gray button hoac thong bao anh chua load
    if(imgIsLoaded(grayImg)){
        filterGray();
        grayImg.drawTo(fcan);
        makeOne(grayImg);
    }
}

function doRed(){
    //ra lenh to mau khi nguoi dung click vao red button hoac thong bao anh chua load
    if(imgIsLoaded(redImg)){
        filterRed();
        redImg.drawTo(fcan);
        makeOne(redImg);
    }
}

function doGreen(){
    //ra lenh to mau khi nguoi dung click vao red button hoac thong bao anh chua load
    if(imgIsLoaded(greenImg)){
        filterGreen();
        greenImg.drawTo(fcan);
        makeOne(greenImg);
    }
}

function doBlue(){
    if(imgIsLoaded(blueImg)){
        filterBlue();
        blueImg.drawTo(fcan);
        makeOne(blueImg);
    }
}

function doTeal(){
    if(imgIsLoaded(tealImg)){
        filterTeal();
        tealImg.drawTo(fcan);
        makeOne(tealImg);
    }
}
function doOrange(){
    if(imgIsLoaded(orangeImg)){
        filterOrange();
        orangeImg.drawTo(fcan);
        makeOne(orangeImg);
    }
}
function doYellow(){
    if(imgIsLoaded(yellowImg)){
        filterYellow();
        yellowImg.drawTo(fcan);
        makeOne(yellowImg);
    }
}
function doIndigo(){
    if(imgIsLoaded(indigoImg)){
        filterIndigo();
        indigoImg.drawTo(fcan);
        makeOne(indigoImg);
    }
}
function doViolet(){
    if(imgIsLoaded(violetImg)){
        filterViolet();
        violetImg.drawTo(fcan);
        makeOne(violetImg);
    }
}

