
class MyVehicle extends CGFobject {

	constructor(scene) {

		super(scene);
		this.partDist = 0.4;
		this.ground = 0.15;
		this.width = 2.5;
		this.wheelDiameter = 0.7;
		this.side = 4

		// Movement variables
		this.acceleration = 0.05;
		this.speed = 0;
		this.maxSpeed = 0.1;

		this.posX = 7;
		this.posY = 0;
		this.posZ = -7;

		this.speedX = 0;
		this.speedZ = 0;

		this.angleAlpha = Math.PI/2;
		
		this.time = 0;

		// this.anchorX = 0;
		// this.anchorZ = 1;

		// this.anchor = 0;

		this.wheelRotationCounter = 0;
		this.wheelSelfRotation = 0
		

		// this.roofTexture;

		this.myHood = new MyQuad(scene, 0, 1, 0, 1);
		this.top = new MyQuad(scene, 0, 1, 0, 1);

		this.backRightWheel = new MyWheel(scene,100,10);
		this.backLeftWheel = new MyWheel(scene,100,10);
		this.frontRightWheel = new MyWheel(scene,100,10);
		this.frontLeftWheel = new MyWheel(scene,100,10);

		// this.windsheet = new MyHood(scene, 0, 1, 0, 1, 10, 2);

		this.windsheet = new MyQuad(scene, 0, 1, 0, 1);
		this.frontEngine = new MyQuad(scene, 0, 1, 0, 1);


		this.back = new MyQuad(scene, 0, 1, 0, 1);

		this.rightSideParachoqueTrazeiro = new MyQuad(scene, 0, 1, 0, 1);
		this.rightSideParachoqueDianteiro = new MyQuad(scene, 0, 1, 0, 1);
		this.rightSideParalamas = new MyQuad(scene, 0, 1, 0, 1);
		this.rightSideCapo = new MyQuad(scene, 0, 1, 0, 1);
		this.rightSideAll = new MyQuad(scene, 0, 1, 0, 1);

		this.leftSideParachoqueTrazeiro = new MyQuad(scene, 0, 1, 0, 1);
		this.leftSideParachoqueDianteiro = new MyQuad(scene, 0, 1, 0, 1);
		this.leftSideParalamas = new MyQuad(scene, 0, 1, 0, 1);
		this.leftSideCapo = new MyQuad(scene, 0, 1, 0, 1);
		this.leftSideAll = new MyQuad(scene, 0, 1, 0, 1);

		// this.leftSide = new MyQuad(scene, 0, 1, 0, 1);

		// this.frontLeftLght.setAmbient(0.5, 0.5, 0.5, 1);
		// this.frontLeftLght.setDiffuse(1.0, 1.0, 1.0, 1.0);
		// this.frontLeftLght.setSpecular(-1,-1,-1,1);	
		


		this.leftLight = new MyLamp(scene, 20, 20);
		this.leftRight = new MyLamp(scene, 20, 20);

		this.leftLightPos = [0,0,0];
		this.rightLightPos = [0,0,0];
		


		// this.frontLeftLght = new CGFlight(this.scene, "fl");
		// // this.frontLeftLght.setPosition(4, 6, 1, 1);

		// this.frontLeftLght.setAmbient(0.5, 0.5, 0.5, 1);
		// this.frontLeftLght.setDiffuse(1.0, 1.0, 1.0, 1.0);
		// this.frontLeftLght.setSpecular(1,1,0,1);
		// this.frontLeftLght.setVisible(true);
		// this.frontLeftLght.enable();
		// this.frontLeftLght.update();
		// this.scene.lights[1] = this.frontLeftLght;


		this.initBuffers();
	};

	update(currTime) {

		console.log("curr time: "+ currTime)
		var carTime = currTime / 100;

		// Speed Parameters
		this.speedX = this.speed * Math.cos(-this.angleAlpha);
		this.speedZ = this.speed * Math.sin(this.angleAlpha);

    	var oldX = this.posX;
    	var oldZ = this.posZ;

		this.posX += this.speedX * carTime;
		this.posZ += this.speedZ * carTime;

    	var nextPositionX = this.posX/4;
    	var nextPositionZ = this.posZ/4;

    	var nextXRounded = 0;
    	var nextZRounded = 0;

    	if (Math.abs(nextPositionX - Math.floor(nextPositionX)) > 0.49) {
    		nextXRounded = Math.ceil(nextPositionX);
    	} else {
 			nextXRounded = Math.floor(nextPositionX);
    	}
    	if (Math.abs(nextPositionZ - Math.floor(nextPositionZ)) > 0.49) {
    		nextZRounded = Math.ceil(nextPositionZ);
    	} else {
 			nextZRounded = Math.floor(nextPositionZ);
    	}
    	nextXRounded += 5;
		nextZRounded += 5;

    	console.log("nextX: "+nextPositionX);
    	console.log("nextZ: " +nextPositionX);

    	console.log("rounded: "+nextXRounded);
    	console.log("rounded: "+ nextZRounded);

    	// console.log("altimetry:" + this.scene.altimetry[][nextZRounded]);

    	if (this.scene.altimetry[nextZRounded][nextXRounded] < 0.5) {
    		this.posX = nextPositionX*4;
    		this.posZ = nextPositionZ*4;

    		if (this.speed > 0) {
    			this.wheelSelfRotation += 0.1;
    		} else {
				this.wheelSelfRotation -= 0.1;
    		}

   	 	} else {
   	 		console.log("error");
   	 		this.posX = oldX;
   	 		this.posZ = oldZ;
   	 		this.speed = 0;
   	 	}


    	

	};


	initBuffers() {

		this.vertices = [];
		this.indices = [];
		this.normals = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	};


	display() {
		
		// this.scene.translate(-2, 0, -1.25);
		super.display();
		this.scene.translate(-2, 0, -1.25);
		// this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(this.posX, this.posY, this.posZ);
		this.scene.rotate(-this.angleAlpha, 0, 1, 0);


		this.scene.vehicleAppearances[this.scene.BackTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(0, 1+this.ground, 2.5/2);
		this.scene.rotate(-Math.PI/2, 0,1,0);
		// this.scene.rotate(Math.PI, 0,0,1);
		this.scene.scale(2.5, 2, 1);	
		this.back.display();
		this.scene.popMatrix();



		this.scene.vehicleAppearances[this.scene.SideTexture].apply();

		// Lado direito
		// Parachoque trazeiro
		this.scene.pushMatrix();
		this.scene.translate(this.partDist/2, this.ground+0.55/2, 2.5);
		this.scene.scale(0.4, 0.55, 1);	

		this.rightSideParachoqueTrazeiro.display();
		this.scene.popMatrix();

		// Parachoque Paralamas
		this.scene.pushMatrix();
		this.scene.translate(this.side/2, this.ground+0.55/2, 2.5);
		this.scene.scale(1.8, 0.55, 1);	

		this.rightSideParalamas.display();
		this.scene.popMatrix();

		// Parachoque dianteiro
		this.scene.pushMatrix();
		this.scene.translate(this.side-this.partDist/2, this.ground+0.55/2, 2.5);
		this.scene.scale(0.4, 0.55, 1);	

		this.rightSideParachoqueDianteiro.display();
		this.scene.popMatrix();

		// Parachoque All
		this.scene.pushMatrix();
		this.scene.translate((this.side-1.1)/2, 1.4, 2.5);
		this.scene.scale(this.side-this.wheelDiameter-this.partDist, 2-0.55, 1);	

		this.rightSideAll.display();
		this.scene.popMatrix();

		// Parachoque dianteiro
		this.scene.pushMatrix();
		this.scene.translate(this.side-(this.partDist+this.wheelDiameter)/2, this.ground+(0.40)/2+0.55, 2.5);
		this.scene.scale(1.1, 0.5, 1);	

		this.rightSideCapo.display();
		this.scene.popMatrix();




		// Lado esquerdo
		// Parachoque trazeiro
		this.scene.pushMatrix();
		this.scene.translate(this.partDist/2, this.ground+0.55/2, 0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.4, 0.55, 1);	

		this.leftSideParachoqueTrazeiro.display();
		this.scene.popMatrix();

		// Parachoque Paralamas
		this.scene.pushMatrix();
		this.scene.translate(this.side/2, this.ground+0.55/2, 0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(1.8, 0.55, 1);	

		this.leftSideParalamas.display();
		this.scene.popMatrix();

		// Parachoque dianteiro
		this.scene.pushMatrix();
		this.scene.translate(this.side-this.partDist/2, this.ground+0.55/2, 0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.4, 0.55, 1);	

		this.leftSideParachoqueDianteiro.display();
		this.scene.popMatrix();

		// Parachoque All
		this.scene.pushMatrix();
		this.scene.translate((this.side-1.1)/2, 1.40, 0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(this.side-this.wheelDiameter-this.partDist, 2-0.5, 1);	

		this.leftSideAll.display();
		this.scene.popMatrix();

		// Parachoque dianteiro
		this.scene.pushMatrix();
		this.scene.translate(this.side-(this.partDist+this.wheelDiameter)/2, this.ground+(0.40)/2+0.55, 0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(1.1, 0.5, 1);	

		this.leftSideCapo.display();
		this.scene.popMatrix();


		//Lado da Frente
		//Capo
		//Dimensoes Capo
		var x = 1.1;
		var z = 2.5;

		this.scene.vehicleAppearances[this.scene.HoodTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(this.side - (x/2), 1+this.ground, 2.5/2);
		this.scene.rotate(-Math.PI/2, 1,0,0);
		this.scene.scale(x, 2.5, 1);	
		this.myHood.display();
		this.scene.popMatrix();


		//Windsheet 

		this.scene.vehicleAppearances[this.scene.WindsheetTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(this.side - this.partDist-this.wheelDiameter, 1/2+1+this.ground, 2.5/2);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.scene.rotate(Math.PI, 0,0,1);
		this.scene.scale(2.5, 1, 1);	
		this.windsheet.display();
		this.scene.popMatrix();


		// Front, Engine
		this.scene.vehicleAppearances[this.scene.EngineTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(this.side, 1/2+this.ground, 2.5/2);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.scene.rotate(Math.PI, 0,0,1);
		this.scene.scale(2.5, 1, 1);	
		this.frontEngine.display();
		this.scene.popMatrix();


		// Roof

		this.scene.vehicleAppearances[this.scene.RoofTexture].apply();
		x = this.partDist * 3 + this.wheelDiameter + 1;
		
		this.scene.pushMatrix();
		this.scene.translate((x/2), 2+this.ground, 2.5/2);
		this.scene.rotate(-Math.PI/2, 1,0,0);
		this.scene.scale(x, 2.5, 1);	
		this.top.display();
		this.scene.popMatrix();


		// Farois
		this.scene.pushMatrix();
		this.scene.translate(this.side+0.2, 1/2+this.ground, 0.5);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.2, 0.2, 0.2);	
		this.leftLight.display();
		this.scene.popMatrix();
		

		this.scene.pushMatrix();
		this.scene.translate(this.side+0.2, 1/2+this.ground, 2);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.2, 0.2, 0.2);	
		this.leftRight.display();
		this.scene.popMatrix();

		

		// Wheels

		this.scene.pushMatrix();
		this.scene.translate(0.4+this.wheelDiameter/2, this.wheelDiameter/2,1.95);
		this.scene.scale(0.35,0.35,1);
		this.backRightWheel.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0.4+this.wheelDiameter/2, this.wheelDiameter/2,0.55);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.scale(0.35,0.35,1);
		this.backLeftWheel.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(0.4+this.wheelDiameter/2 + 1 + 2*0.4 + 2*0.35, this.wheelDiameter/2,1.95);
		this.scene.rotate(this.wheelRotationCounter, 0, 1, 0);	
		this.scene.rotate(this.wheelSelfRotation, 0, 0, 1);
		this.scene.scale(0.35,0.35,1);
		this.frontRightWheel.display();
		this.scene.popMatrix();


		this.scene.pushMatrix();
		this.scene.translate(0.4+this.wheelDiameter/2 + 1 + 2*0.4 + 2*0.35,this.wheelDiameter/2,0.55);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(this.wheelRotationCounter, 0, 1, 0);	
		this.scene.scale(0.35,0.35,1);
		this.frontLeftWheel.display();
		this.scene.popMatrix();


		
		// this.frontLeftLght.setPosition(this.posX+2.1, 1/2+this.ground, this.posZ, 1);
		
	};
};
