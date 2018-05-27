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

		this.scene.carbonCar.apply();
		this.cilinder.display();

		this.scene.tableAppearance.apply();
		this.circle.display();

		this.scene.materialDefault.apply();

	};
};
