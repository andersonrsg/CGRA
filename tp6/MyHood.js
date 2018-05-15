/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyHood extends CGFobject
{
	constructor(scene, minS, maxS, minT, maxT, slices, width) {

		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		this.slices = slices;
		this.width = width;

		this.initBuffers();
	};

	initBuffers() 
	{


		var start = 0 - (this.width/2);

		var dist = this.width / this.slices;

		this.vertices = [];
		this.indices = [];
		this.normals = [];


		for (var j = 0; j < this.slices + 1 ; j++) {

			var d = dist * j;

			for (var i = 0; i < this.slices ; i++) {

				this.vertices.push(start + i*dist, start + d, 0);
				this.normals.push(0, 0, 1);

			}
			
		}
		

		var x = 0;
		for (i = 0; i < this.slices ; i++) {
			for (j = 0; j < this.slices ; j++) {
				if (j == this.slices-1) {
					this.indices.push(x, 	x-(this.slices-1),	x+this.slices);
					this.indices.push(x+1,	x+this.slices,		x-(this.slices-1));
				} else {
					this.indices.push(x,				x+1,			x+this.slices);
					this.indices.push(x+1+this.slices, 	this.slices+x, 	x+1);
				}
				x+=1;
			}
		}


		// 	this.texCoords = [
		// 		this.minS, this.minT,
		// 		this.maxS, this.minT,
		// 		this.minS, this.maxT,
		// 		this.maxS, this.maxT
		// 	];


		// this.primitiveType = this.scene.gl.TRIANGLES;
		// this.initGLBuffers();
	};

	display() {
		// super.display();
	};
};
