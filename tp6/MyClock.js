
class MyClock extends CGFobject {
	constructor(scene, slices, stacks) {

		super(scene);

		this.slices = slices; 
		this.stacks = stacks;

		this.circle = new MyCircle(this.scene, this.slices, this.stacks, 0.5);
		this.cilinder = new MyCilinder(this.scene, this.slices, this.stacks, 0.2);

		this.clockHour = new MyClockHand(this.scene, 0, 1, 0, 1, ClockEnum.HOUR);
		this.clockMinute = new MyClockHand(this.scene, 0, 1, 0, 1, ClockEnum.MINUTE);
		this.clockSecond = new MyClockHand(this.scene, 0, 1, 0, 1, ClockEnum.SECOND);

		this.clockHour.setAngle(90);
		this.clockMinute.setAngle(180);
		this.clockSecond.setAngle(270);


		this.initBuffers();

	};

	update(currTime) {
		var diff = currTime - this.oldCurrTime;
		var aux = diff / 1000

		// var angle = currTime * 10 * Math.PI * -2;

		this.clockSecond.setAngle(360 / 60 * aux);
		this.clockMinute.setAngle(360 / 60 / 60 * aux);
		this.clockHour.setAngle(  360 / 60 / 60 / 60 * aux);

		this.oldCurrTime = currTime;
	};

	initBuffers() {

	
		
		
	};

	//teta = 2pi/slices

	display() {

		var degToRad = Math.PI / 180.0;

		// this.primitiveType = this.scene.gl.TRIANGLES;
		// this.initGLBuffers();

		this.scene.pushMatrix();
		this.cilinder.display();
		this.scene.popMatrix();

		this.scene.clockAppearance.apply();
		this.scene.pushMatrix();
		this.circle.display();
		this.scene.popMatrix();

		this.scene.materialDefault.apply()
		this.scene.pushMatrix();
		this.scene.translate(0,0.0,0.21);
		this.scene.rotate(this.clockSecond.angle,0,0,1);
		this.clockSecond.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.0,0.21);
		this.scene.rotate(this.clockMinute.angle,0,0,1);
		this.clockMinute.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0,0.0,0.21);
		this.scene.rotate(this.clockHour.angle,0,0,1);
		this.clockHour.display();
		this.scene.popMatrix();

	};
};
