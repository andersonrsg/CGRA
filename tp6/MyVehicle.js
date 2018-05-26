
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

		this.posX = 0;
		this.posY = 0;
		this.posZ = -9;

		this.speedX = 0;
		this.speedZ = 0;

		this.angleAlpha = 0;
		
		this.time = 0;

		// this.anchorX = 0;
		// this.anchorZ = 1;

		// this.anchor = 0;

		// this.wheelRotationAngle = 0;
		this.wheelRotationCounter = 0;
		// this.Apressed = false;
		// this.Dpressed = false;

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
		

		/// NAO MEXER em baixo \/ para não dar conflito xD

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
		this.speedX = this.speed * Math.cos(-this.angleAlpha);// - Math.PI/2);
		this.speedZ = this.speed * Math.sin(this.angleAlpha);// + Math.PI/2);

    	//Position
    	this.posX += this.speedX * carTime;
    	this.posZ += this.speedZ * carTime;


    	// this.position += this.speed;

		// this.anchorX = 0.5 * Math.cos(this.angleAlpha) * (this.position);// + this.anchorX);
		// this.anchorZ = 0.5 * Math.sin(this.angleAlpha) * (this.position);// + this.anchorZ);

		// console.log("X: "+ this.posX);
		// console.log("Z: "+ this.posZ);
		// console.log("Speedx: "+ this.speedX);
		// console.log("Speedz: "+ this.speedZ);

		// console.log("Angle alpha: " + this.angleAlpha);

		// console.log(this.anchorX);
		// console.log("Speed: " + this.speed);

	};


	initBuffers() {

		this.vertices = [];
		this.indices = [];
		this.normals = [];

		var partDist = this.partDist;
		var ground = this.ground;
		var width = this.width;
		var wheelDiameter = this.wheelDiameter;
		var side = this.side;


		// Atrás, Baixo
		// this.vertices.push(0, ground, 0);
		// this.vertices.push(0, ground, 2.5);
		// this.vertices.push(0, ground + 2, 2.5);
		// this.vertices.push(0, ground + 2, 0);

		// this.indices.push(0, 1, 2);
		// this.indices.push(0, 2, 3);

		// this.normals.push(-1, 0, 0);
		// this.normals.push(-1, 0, 0);
		// this.normals.push(-1, 0, 0);
		// this.normals.push(-1, 0, 0);

		// // Lado Direito

		// this.vertices.push(0, ground + 0.55, width);									//4
		// this.vertices.push(side - partDist - wheelDiameter, ground + 0.55, width);		//5
		// this.vertices.push(side - partDist - wheelDiameter, ground + 2, width);			//6
		// this.vertices.push(0, ground + 2, width);										//7
		// this.indices.push(4, 5, 6);
		// this.indices.push(4, 6, 7);
		// this.normalsRightSide(4);


		// this.vertices.push(0, ground, width);											//8
		// this.vertices.push(0 + partDist, ground, width);								//9
		// this.vertices.push(0 + partDist, ground+0.55, width);							//10
		// this.indices.push(8, 9, 10);
		// this.indices.push(8, 10, 4);
		// this.normalsRightSide(3);


		// this.vertices.push(partDist+wheelDiameter			, ground		, width);					//11
		// this.vertices.push(side - partDist - wheelDiameter	, ground		, width);					//12
		// this.vertices.push(partDist+wheelDiameter			, ground + 0.55	, width);					//13
		// this.indices.push(11, 12, 5);
		// this.indices.push(11, 5, 13);
		// this.normalsRightSide(3);



		// this.vertices.push(side - partDist					, ground + 0.55 		, width);	//14
		// this.vertices.push(side - partDist 					, ground + 1	, width);	//15
		// this.vertices.push(side - partDist - wheelDiameter	, ground + 1	, width);	//16
		// this.indices.push(5, 14, 15);
		// this.indices.push(5, 15, 16);
		// this.normalsRightSide(3);


		// this.vertices.push(side - partDist	, ground 		, width);	//17
		// this.vertices.push(side 			, ground 		, width);	//18
		// this.vertices.push(side				, ground + 1	, width);	//19
		// this.indices.push(17, 18, 19);
		// this.indices.push(17, 19, 15);
		// this.normalsRightSide(3);



		// // Lado Esquerdo

		// this.vertices.push(0, ground + 0.55, 0);									//20
		// this.vertices.push(side - partDist - wheelDiameter, ground + 0.55, 0);		//21
		// this.vertices.push(side - partDist - wheelDiameter, ground + 2, 0);			//22
		// this.vertices.push(0, ground + 2, 0);										//23
		// this.indices.push(21, 20, 23);
		// this.indices.push(21, 23, 22);
		// this.normalsLeftSide(4);


		// this.vertices.push(0, ground, 0);											//24
		// this.vertices.push(0 + partDist, ground, 0);								//25
		// this.vertices.push(0 + partDist, ground+0.55, 0);							//26
		// this.indices.push(25, 24, 20);
		// this.indices.push(25, 20, 26);
		// this.normalsLeftSide(3);


		// this.vertices.push(partDist+wheelDiameter			, ground		, 0);					//27
		// this.vertices.push(side - partDist - wheelDiameter	, ground		, 0);					//28
		// this.vertices.push(partDist+wheelDiameter			, ground + 0.55	, 0);					//29
		// this.indices.push(28, 27, 29);
		// this.indices.push(28, 29, 21);
		// this.normalsLeftSide(3);



		// this.vertices.push(side - partDist					, ground + 0.55 		, 0);	//30
		// this.vertices.push(side - partDist 					, ground + 1	, 0);	//31
		// this.vertices.push(side - partDist - wheelDiameter	, ground + 1	, 0);	//32
		// this.indices.push(30, 21, 32);
		// this.indices.push(30, 32, 31);
		// this.normalsLeftSide(3);


		// this.vertices.push(side - partDist	, ground 		, 0);	//33
		// this.vertices.push(side 			, ground 		, 0);	//34
		// this.vertices.push(side				, ground + 1	, 0);	//35
		// this.indices.push(34, 33, 31);
		// this.indices.push(34, 31, 35);
		// this.normalsLeftSide(3);



		









		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	};

	// normalsRightSide(count) {
	// 	for (var i = 0; i < count ; i++) {
	// 		this.normals.push(0, 0, 1);
	// 	}
	// };

	// normalsLeftSide(count) {
	// 	for (var i = 0; i < count ; i++) {
	// 		this.normals.push(0, 0, -1);
	// 	}
	// };

	display() {
		
		super.display();
		// this.scene.rotate(this.angleAlpha, 0, 1, 0);
		// this.scene.pushMatrix();
		this.scene.translate(-2, 0, -1.25);
		// this.scene.popMatrix();
		
		// this.scene.pushMatrix();
		this.scene.translate(this.posX, this.posY, this.posZ);
		this.scene.rotate(-this.angleAlpha, 0, 1, 0);

		// this.scene.pushMatrix();
		// this.scene.translate(this.posX, 0, this.posZ);
		// this.scene.rotate(this.angleAlpha, 0, 1, 0)
		// this.scene.popMatrix();

		// this.scene.pushMatrix();
		// this.windsheet.display();
		// this.scene.popMatrix();


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

		this.scene.vehicleAppearances[this.scene.CapoTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(this.side - (x/2), 1+this.ground, 2.5/2);
		this.scene.rotate(-Math.PI/2, 1,0,0);
		this.scene.scale(x, 2.5, 1);	
		this.myHood.display();
		this.scene.popMatrix();


		//Vidro
		//Dimensoes Vidro
		// var x = 1.1;
		// var z = 2.5;

		this.scene.vehicleAppearances[this.scene.WindsheetTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(this.side - this.partDist-this.wheelDiameter, 1/2+1+this.ground, 2.5/2);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.scene.rotate(Math.PI, 0,0,1);
		this.scene.scale(2.5, 1, 1);	
		this.windsheet.display();
		this.scene.popMatrix();



		//Frente / Motor
		//Dimensoes Frente / Motor
		// var x = 1.1;
		// var z = 2.5;

		this.scene.vehicleAppearances[this.scene.MotorTexture].apply();

		this.scene.pushMatrix();
		this.scene.translate(this.side, 1/2+this.ground, 2.5/2);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.scene.rotate(Math.PI, 0,0,1);
		this.scene.scale(2.5, 1, 1);	
		this.frontEngine.display();
		this.scene.popMatrix();


		// ROOF

		this.scene.vehicleAppearances[this.scene.RoofTexture].apply();
		// Dimensoes Top
		x = this.partDist * 3 + this.wheelDiameter + 1;
		// Parte de cima
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

		



		// Rodas
		this.scene.windowAppearance.apply();

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

		// if (this.Apressed == true && this.Dpressed == false) {
			this.scene.rotate(this.wheelRotationCounter, 0, 1, 0);	
		// }
		// if (this.Dpressed == true && this.Apressed == false) {
		// 	this.scene.rotate(-Math.PI/4, 0, 1, 0);
		// }

		this.scene.scale(0.35,0.35,1);
		this.frontRightWheel.display();
		this.scene.popMatrix();



		this.scene.pushMatrix();
		this.scene.translate(0.4+this.wheelDiameter/2 + 1 + 2*0.4 + 2*0.35,this.wheelDiameter/2,0.55);
		this.scene.rotate(Math.PI, 0, 1, 0);

		// if (this.Apressed == true && this.Dpressed == false) {
		// 	this.scene.rotate(Math.PI/4, 0, 1, 0);

		// }
		// if (this.Dpressed == true && this.Apressed == false) {
		// 	this.scene.rotate(-Math.PI/4, 0, 1, 0);
		// }
		this.scene.rotate(this.wheelRotationCounter, 0, 1, 0);	

		this.scene.scale(0.35,0.35,1);
		this.frontLeftWheel.display();
		this.scene.popMatrix();


		
		// this.frontLeftLght.setPosition(this.posX+2.1, 1/2+this.ground, this.posZ, 1);
		
	};
};
