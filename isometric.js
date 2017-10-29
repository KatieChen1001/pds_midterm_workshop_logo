"use strict"

class polygon{
	constructor(_cols, tw){
		this.col = _cols;
		this.row = this.col/2;
		this.w = tw; // width of each individual triangle
		this.tileNumberR = 0;
		this.tileNumberL = 0;
	}


	position(x,y,angle){
		translate(x,y);
		rotate(radians(angle));
	}


	// coloring the traingles pointing to the right located the right half of the polygon 
	coloringR(coa){
		for (var k = 0; k < coa.length; k++ ){
			if (coa[k].indexNum === this.tileNumberR ){
				fill(coa[k].coloring, 100,50);
				// noStroke();
				break;
			}
			else{
				noFill();
			}
		}
	}

	coloringL(coa){
		for (var k = 0; k < coa.length; k++ ){
			if (coa[k].indexNum === this.tileNumberL ){
				fill(coa[k].coloring, 100,50);
				// noStroke();
				break;
			}
			else{
				noFill();
			}
		}
	}



	// draw isometric grid + individually color each triangle
	drawIsometric(coaOut,coaIn){


		var w = this.w;
		var h = w * sin(radians(60));

		push();
		colorMode(RGB);
		for(var j = 0; j < this.row; j++) {
			for (var i = 0; i < this.col; i++) {
				push();
				this.coloringR(coaOut);
				triangle(w * i, 0, w / 2 + w * i, -h, w + w * i, 0);
				if(i < this.col-1) {
					this.coloringR(coaIn);
					triangle(w + w * i, 0, w + w * i - w / 2, -h, w + w * i + w / 2, -h);  
				}
				this.tileNumberR++;
				pop();
			}
			translate(w/2, -h);
			this.col--;  
		}

		translate(-w/2 * this.row, h * this.row);

		for(var j = 0; j < this.row; j++) {
			for (var i = 0; i < this.col + this.row; i++) {
				push();
				this.coloringL(coaOut);
				triangle(w * i, 0, w / 2 + w * i, h, w + w * i, 0);
				if(i < this.col+this.row-1) {
					this.coloringL(coaIn);
					triangle(w + w * i, 0, w + w * i - w / 2, h, w + w * i + w / 2, h);  
				}
				this.tileNumberL++;
			}
			translate(w/2, h);
			this.col--;  
		}
		pop();

	}

}