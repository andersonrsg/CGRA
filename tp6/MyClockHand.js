/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

var ClockEnum = Object.freeze({
	HOUR : {name: "HOUR"}, 
	MINUTE : {name: "MINUTE"}, 
	SECOND : {name: "SECOND"}
})


class MyClockHand extends CGFobject
{
	constructor(scene, minS, maxS, minT, maxT, clockType) 
	{
		super(scene);
		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		
		this.clockType = clockType;

		if (clockType == ClockEnum.SECOND) {
			this.height = 0.7;
			this.width = 0.010;
			console.log("segonodo");
		} else if (clockType == ClockEnum.MINUTE) {
			this.height = 0.7;
			this.width = 0.020;
		} else if (clockType == ClockEnum.HOUR) {
			this.height = 0.5;
			this.width = 0.020;
		}

		this.angle = 0;

		this.initBuffers();
	};

	setAngle(angle) {
	
		this.angle = this.angle + angle;
	
	};


	//0.05


	initBuffers() 
	{
		this.vertices = [
				-this.width, 0, 0,
				this.width, 0, 0,
				-this.width, this.height, 0,
				this.width, this.height, 0
				];

		this.indices = [
				0, 1, 2,
				2, 1, 3
			];

			this.normals = [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1
			];

			this.texCoords = [
				this.minS, this.minT,
				this.maxS, this.minT,
				this.minS, this.maxT,
				this.maxS, this.maxT
			];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

	display() {

		// super.display();		

		// this.scene.pushMatrix();
		// this.scene.translate(0, 0, 0.21);
		// this.scene.rotate(-Math.PI/2, 0, 0, 1);
		// // this.scene.translate(7.3, 7.6, 0.21);
		// this.scene.popMatrix();

		super.display();

	};

};
