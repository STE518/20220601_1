var inputElement
var txts = []
var colors = "ffbe0b-fb5607-ff006e-8338ec-3a86ff".split("-").map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput("Hello")
  inputElement.position(50,50)
	//inputElement.style("font-size",'25px')
	//inputElement.style("color",'purple')
	inputElement.input(userInput)
}
function userInput(){
  txts.push({
		text: this.value(),
		x: width/2,
		y: 50,
		vx:random(-5,5),
		vy: 1,
		color: random(colors)
	})	
	this.value('')
	//print(txts)
}
function draw() {
	background(0);
	fill(255)
	textSize(50)
	for(var i = 0;i<txts.length;i++){
	  let txt = txts[i]
		fill(txt.color)
	  text(txt.text,txt.x,txt.y)
		txt.x = txt.x + txt.vx  
		txt.y = txt.y + txt.vy
		txt.vy = txt.vy + 0.1  //往下速率vy，再加0.1
		txt.vx = txt.vx * 0.995 //產生一點在x軸上的磨擦力 
		txt.vy = txt.vy * 0.995 //產生一點在y軸上的磨擦力
		if(txt.y>height){
		  txt.vy = -abs(txt.vy)  //abs取絕對值
		}
	}
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}