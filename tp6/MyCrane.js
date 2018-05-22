class MyCrane extends CGFobject {

	constructor(scene) {

		super(scene);
		 this.base = new MyCilider(scene,100,1,5);
		 this.firstPrism = new MyPrism(scene,4,1);
		 this.hinge = new MyCilinder(scene,100,1,6);
		 this.secondprism = new MyPrism(scene,4,1);
		 this.hire = new MyCilider(scene,100,1,10);
		 this.magnet = new MyCilider(scene,100,1,2);

		 
		this.initBuffers();
	};

	update(currTime) {

	};

	initBuffers() {














		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	};



	display() {

		super.display();





	};
};
