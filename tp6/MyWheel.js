class MyWheel extends CGFobject {
	constructor(scene, slices, stacks) {

		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.circle = new MyCircle(this.scene, this.slices, this.stacks,0.5);

		this.cilinder = new MyCilinder(this.scene, this.slices, this.stacks,0.5);

		this.initBuffers();

	};


	initBuffers() {

	};

	display() {

		this.scene.camuflageCar.apply();
		this.cilinder.display();

		this.scene.tableAppearance.apply();
		this.circle.display();

		this.scene.materialDefault.apply();

	};
};
