class MyCrane extends CGFobject {

	constructor(scene) {

		super(scene);

		 this.cilinderPart = new MyCilinder(scene,100,1,5);
		 this.armPart = new MyPrism(scene,4,1);
		 this.circlePart = new MyCircle(scene,100,1,0);
		 this.quadPart = new MyQuad(scene,0,1,0,1);

		 this.angleRot = 0;

		this.initBuffers();
	};

	update(currTime) {

		while(this.angleRot < Math.PI){
			this.angleRot = this.angleRot + Math.PI/currTime;
		}

	};


	display() {
		this.scene.materialDefault.apply()

		this.scene.pushMatrix()

		this.scene.rotate(this.angleRot,0,1,0)

		//CRANE BASE CILINDER
		this.scene.pushMatrix()
		this.scene.rotate(-Math.PI/2, 1, 0, 0)
		this.scene.scale(0.4,0.4,0.1)
		this.cilinderPart.display()
		this.scene.popMatrix()

		//CRANE BASE CIRCLE 1
		this.scene.pushMatrix()
		this.scene.rotate(-Math.PI/2, 1, 0, 0)
		this.scene.scale(0.4,0.4,0.1)
		this.scene.rotate(Math.PI, 0, 1, 0)
		this.circlePart.display()
		this.scene.popMatrix()

		//CRANE BASE CIRCLE 2
		this.scene.pushMatrix()
		this.scene.rotate(-Math.PI/2, 1, 0, 0)
		this.scene.translate(0,0,0.5)
		this.scene.scale(0.4,0.4,0.1)
		this.circlePart.display()
		this.scene.popMatrix()

		//CRANE FIRST ARM

		this.scene.pushMatrix()
		this.scene.translate(0,0.2,0)
		this.scene.rotate(-Math.PI/4, 1, 0, 0)
		this.scene.rotate(Math.PI/4, 0, 0, 1)
		this.scene.scale(0.3,0.3,10)
		this.armPart.display()
		this.scene.popMatrix()

		//CRANE HINGE

		this.scene.pushMatrix()
		this.scene.translate(0,0.2,0)
		this.scene.rotate(-Math.PI/4, 1, 0, 0)
		this.scene.translate(-0.375,0,10)  //0.375 is half of 0.15*5
		this.scene.rotate(Math.PI/2, 0, 1, 0)
		this.scene.scale(0.4,0.4,0.15)
		this.cilinderPart.display()
		this.scene.popMatrix()

		//CRANE HINGE CIRCLE 1
		this.scene.pushMatrix()
		this.scene.translate(0,0.2,0)
		this.scene.rotate(-Math.PI/4, 1, 0, 0)
		this.scene.translate(-0.375,0,10)  //0.375 is half of 0.15*5
		this.scene.translate(0.75,0,0)
		this.scene.rotate(Math.PI/2, 0, 1, 0)
		this.scene.scale(0.4,0.4,1)
		this.circlePart.display()
		this.scene.popMatrix()



		//CRANE HINGE CIRCLE 2
		this.scene.pushMatrix()
		this.scene.translate(0,0.2,0)
		this.scene.rotate(-Math.PI/4, 1, 0, 0)
		this.scene.translate(-0.375,0,10)  //0.375 is half of 0.15*5
		this.scene.rotate(-Math.PI/2, 0, 1, 0)
		this.scene.scale(0.4,0.4,1)
		this.circlePart.display()
		this.scene.popMatrix()

		//CRANE SECOND ARM
		this.scene.pushMatrix()
		this.scene.translate(0,10/Math.sqrt(2)+0.2,10/Math.sqrt(2))
		this.scene.rotate(Math.PI/4, 1, 0, 0)
		this.scene.rotate(Math.PI/4, 0, 0, 1)
		this.scene.scale(0.3,0.3,3.5)
		this.armPart.display()
		this.scene.popMatrix()

		//CRANE SECOND ARM QUAD

		this.scene.pushMatrix()
		this.scene.translate(0,10/Math.sqrt(2)+0.2,10/Math.sqrt(2))
		this.scene.rotate(Math.PI/4, 1, 0, 0)
		this.scene.translate(0,0,3.5)
		this.scene.scale(0.3,0.3,1)
		this.scene.scale(Math.sqrt(2),Math.sqrt(2),1)
		this.quadPart.display()
		this.scene.popMatrix()

		//CRANE WIRE
		this.scene.pushMatrix()
		this.scene.translate(0,0.2+10/Math.sqrt(2)-3.5/Math.sqrt(2),10/Math.sqrt(2)+3.5/Math.sqrt(2)-0.05)
		this.scene.rotate(Math.PI/2,1,0,0)
		this.scene.scale(0.05,0.05,1/4)
		this.cilinderPart.display()
		this.scene.popMatrix()


		//CRANE MAGNET
		this.scene.pushMatrix()
		this.scene.translate(0,0.2+0.2+10/Math.sqrt(2)-3.5/Math.sqrt(2)-((1/4)*5),10/Math.sqrt(2)+3.5/Math.sqrt(2))
		this.scene.rotate(Math.PI/2,1,0,0)
		this.scene.scale(0.8,0.8,1/15)
		this.cilinderPart.display()
		this.scene.popMatrix()




		//CRANE MAGNET CIRCLE 1
		this.scene.pushMatrix()
		this.scene.translate(0,0.2+0.2+10/Math.sqrt(2)-3.5/Math.sqrt(2)-((1/4)*5),10/Math.sqrt(2)+3.5/Math.sqrt(2))
		this.scene.rotate(Math.PI/2,1,0,0)
		this.scene.translate(0,0,1/15*5)
		this.scene.scale(0.8,0.8,1)
		this.circlePart.display()
		this.scene.popMatrix()



		//CRANE MAGNET CIRCLE 2
		this.scene.pushMatrix()
		this.scene.translate(0,0.2+0.2+10/Math.sqrt(2)-3.5/Math.sqrt(2)-((1/4)*5),10/Math.sqrt(2)+3.5/Math.sqrt(2))
		this.scene.rotate(Math.PI/2,1,0,0)
		this.scene.rotate(Math.PI,0,1,0)
		this.scene.scale(0.8,0.8,1)
		this.circlePart.display()
		this.scene.popMatrix()



		this.scene.pushMatrix()


	};
};
