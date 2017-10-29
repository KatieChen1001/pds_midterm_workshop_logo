var frontPoly, backPoly, bg;

var myColors = [];

var columns = 12;
var smallTriWidth = 30; //isometric triangle width

var colorsObjectArrayOut, colorsObjectArrayIn;

function setup() {
	createCanvas(800, 800);
	backPoly = new polygon(columns,smallTriWidth);
	frontPoly = new FrontPolygon(columns, smallTriWidth);
	myColors[0] = color(220, 220,220);
	myColors[1] = color(179,179,179);
	myColors[2] = color(128,128,128);



		// triangles pointing out 
		colorsObjectArrayOut = [
		{ indexNum: 0, coloring: myColors[0]},
		{ indexNum: 1, coloring: myColors[1]},
		{ indexNum: 2, coloring: myColors[2]},
		{ indexNum: 3, coloring: myColors[2]},
		{ indexNum: 4, coloring: myColors[2]},
		{ indexNum: 5, coloring: myColors[2]},
		{ indexNum: 6, coloring: myColors[2]},
		{ indexNum: 10, coloring: myColors[1]},
		{ indexNum: 11, coloring: myColors[2]},
		{ indexNum: 12, coloring: myColors[0]},
		{ indexNum: 13, coloring: myColors[1]},
		{ indexNum: 17, coloring: myColors[0]},
		{ indexNum: 18, coloring: myColors[2]},
		{ indexNum: 21, coloring: myColors[1]},
		{ indexNum: 22, coloring: myColors[2]},

		{ indexNum: 23, coloring: myColors[0]},
		{ indexNum: 24, coloring: myColors[1]},
		{ indexNum: 28, coloring: myColors[0]},
		{ indexNum: 29, coloring: myColors[2]},
		{ indexNum: 31, coloring: myColors[1]},
		{ indexNum: 32, coloring: myColors[2]},

		{ indexNum: 33, coloring: myColors[0]},
		{ indexNum: 34, coloring: myColors[1]},
		{ indexNum: 38, coloring: myColors[0]},
		{ indexNum: 39, coloring: myColors[2]},
		{ indexNum: 40, coloring: myColors[1]},
		{ indexNum: 41, coloring: myColors[2]},

		{ indexNum: 42, coloring: myColors[0]},
		{ indexNum: 43, coloring: myColors[1]},
		{ indexNum: 44, coloring: myColors[1]},
		{ indexNum: 45, coloring: myColors[1]},
		{ indexNum: 46, coloring: myColors[1]},
		{ indexNum: 47, coloring: myColors[1]},
		{ indexNum: 48, coloring: myColors[1]},
		{ indexNum: 49, coloring: myColors[2]},

		{ indexNum: 50, coloring: myColors[0] },
		{ indexNum: 51, coloring: myColors[2] },
		{ indexNum: 52, coloring: myColors[2] },
		{ indexNum: 53, coloring: myColors[2] },
		{ indexNum: 54, coloring: myColors[2] },
		{ indexNum: 55, coloring: myColors[2] },
		{ indexNum: 56, coloring: myColors[2] },





		]

	// triangles pointing inside
	colorsObjectArrayIn = [
	{ indexNum: 0, coloring: myColors[0] },
	{ indexNum: 1, coloring: myColors[1]},
	{ indexNum: 2, coloring: myColors[2]},
	{ indexNum: 3, coloring: myColors[2]},
	{ indexNum: 4, coloring: myColors[2]},
	{ indexNum: 5, coloring: myColors[0]},
	{ indexNum: 6, coloring: myColors[2]},
	{ indexNum: 9, coloring: myColors[1]},
	{ indexNum: 10, coloring: myColors[2]},
	{ indexNum: 12, coloring: myColors[0]},
	{ indexNum: 13, coloring: myColors[1]},
	{ indexNum: 17, coloring: myColors[0]},
	{ indexNum: 18, coloring: myColors[2]},
	{ indexNum: 20, coloring: myColors[1]},
	{ indexNum: 21, coloring: myColors[2]},
	{ indexNum: 23, coloring: myColors[0]},
	{ indexNum: 24, coloring: myColors[1]},
	{ indexNum: 28, coloring: myColors[0]},
	{ indexNum: 29, coloring: myColors[2]},
	{ indexNum: 30, coloring: myColors[1]},
	{ indexNum: 31, coloring: myColors[2]},

	{ indexNum: 33, coloring: myColors[0]},
	{ indexNum: 34, coloring: myColors[1]},
	{ indexNum: 38, coloring: myColors[0]},
	{ indexNum: 39, coloring: myColors[1]},
	{ indexNum: 40, coloring: myColors[2]},
	{ indexNum: 41, coloring: myColors[2]},

	{ indexNum: 42, coloring: myColors[0]},
	{ indexNum: 43, coloring: myColors[1]},
	{ indexNum: 44, coloring: myColors[1]},
	{ indexNum: 45, coloring: myColors[1]},
	{ indexNum: 46, coloring: myColors[1]},
	{ indexNum: 47, coloring: myColors[1]},
	{ indexNum: 48, coloring: myColors[2]},


	{ indexNum: 50, coloring: myColors[2] },
	{ indexNum: 51, coloring: myColors[2] },
	{ indexNum: 52, coloring: myColors[2] },
	{ indexNum: 53, coloring: myColors[2] },
	{ indexNum: 54, coloring: myColors[2] },
	{ indexNum: 55, coloring: myColors[2] },
	{ indexNum: 56, coloring: myColors[2] },
	



	]

}

function draw() {
	background(255);
	// noStroke();

		// ====== draw polygon in the back ======= //
		push();
		backPoly.position(300,100,90);
		console.log(colorsObjectArrayOut.length);
		console.log(colorsObjectArrayIn.length);
		// ======= first fill bg color ===== //
		// bg.myLerpedBg(colorA,colorB);
		// ======= then get into each individual triangle 
		// ======= to create typography/pattern ====== //
		backPoly.drawIsometric(colorsObjectArrayOut,colorsObjectArrayIn);
		pop();

		// ====== draw polygon in the front ===== //
		push();
		frontPoly.restoreCoord(150);
		frontPoly.offsetFrontPolygon(25,-smallTriWidth*cos(radians(30))*2+10);
		frontPoly.drawFrontPoly();
		pop();
		
		noLoop();


	}