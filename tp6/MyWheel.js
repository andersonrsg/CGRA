class MyWheel extends CGFobject {
	constructor(scene, slices, stacks) {

		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.circle = new MyCircle(this.scene, this.slices, this.stacks,0.5);

		this.cilinder = new MyCilinder(this.scene, this.slices, this.stacks,0.5);

		this.initBuffers();

	};

	/*update(currTime) {
		var diff = currTime - this.oldCurrTime;
		var aux = diff / 1000

		// var angle = currTime * 10 * Math.PI * -2;

		this.clockSecond.setAngle(360 / 60 * aux);
		this.clockMinute.setAngle(360 / 60 / 60 * aux);
		this.clockHour.setAngle(  360 / 60 / 60 / 60 * aux);

		this.oldCurrTime = currTime;
	};*/

	initBuffers() {




	};

	//teta = 2pi/slices

	display() {

		//var degToRad = Math.PI / 180.0;

		// this.primitiveType = this.scene.gl.TRIANGLES;
		// this.initGLBuffers();

		this.cilinder.display();
		this.circle.display();

	};
};
