class MyCrane extends CGFobject {

	constructor(scene) {

		super(scene);
		//BASE
		 this.base = new MyCilinder(scene,100,1,5);
		 this.baseCircle1 = new MyCircle(scene,100,1,5);
		 this.baseCircle2 = new MyCircle(scene,100,1,0);
		//FIRST ARM
		 this.firstArm = new MyPrism(scene,4,1);
		 this.firstArmBase1 = new MyQuad(scene,0,1,0,1);
		 this.firstArmBase2 = new MyQuad(scene,0,1,0,1);

		 //HINGE
		 this.hinge = new MyCilinder(scene,100,1,6);

		 //SECOND ARM
		 this.secondprism = new MyPrism(scene,4,1);

		 //WIRE
		 this.wire = new MyCilinder(scene,100,1,10);

		 //MAGNET
		 this.magnet = new MyCilinder(scene,100,1,2);


		this.initBuffers();
	};

	update(currTime) {

	};


	display() {
		this.scene.materialDefault.apply()

		//CRANE BASE
		this.scene.pushMatrix()
		this.scene.rotate(-Math.PI/2,1,0,0)
		this.scene.scale(0.35,0.35,0.07)
		this.base.display()
		this.baseCircle1.display()
		this.scene.pushMatrix()
		this.scene.rotate(Math.PI,0,1,0)
		this.baseCircle2.display()
		this.scene.popMatrix()
		this.scene.popMatrix()

		//CRANE FIRST ARM

		this.scene.pushMatrix()
		this.scene.rotate(Math.PI/4,0,0,1);
		this.scene.scale(0.3,0.3,5)
		this.firstArm.display()
		this.scene.popMatrix()
		this.scene.pushMatrix()
		this.scene.translate(0,0,5);
		this.scene.scale(0.3,0.3,1)
		this.firstArmBase1.display()
		this.scene.popMatrix()




	};
};
