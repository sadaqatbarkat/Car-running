
var count = 0


function light (){
count +=  5

var box =  document.getElementById("box")
box.style.left = count + "px"


}

var ref =  setInterval(light,30)


function stop() {
     clearInterval(ref)
}


























