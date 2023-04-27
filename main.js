let input=document.getElementById("input");
let btn=document.getElementById("create");
let img=document.getElementById("qrImg");
let download=document.getElementById("download")

btn.onclick=e=>{
e.preventDefault()
if(input.value){
    btn.innerText="Generator QR Code..."
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${input.value}`
    img.onload=_=>{
    img.classList.add("actev")
    btn.innerText="Generator QR Code"
    download.style.display="block"
    }

}else{
input.classList.add("error")
    setTimeout(_=>{
        input.classList.remove("error")
    },1000)
}
}
input.oninput=_=>{
    img.classList.remove("actev")
    download.style.display="none"
}
download.onclick=_=>{
    download.href=img.src
}