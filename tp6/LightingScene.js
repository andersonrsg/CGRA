var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

var tableTexture = "../resources/images/table.png"
var boardTexture = "../resources/images/board.png"
var floorTexture = "../resources/images/floor.png"
var dirtTexture = "../resources/images/dirtyFloor.png"
var slidesTexture = "../resources/images/slides.png"
var windowTexture = "../resources/images/window.png"
var clockTexture = "../resources/images/clock.png"

class LightingScene extends CGFscene
{
	constructor()
	{
		super();
	};

	init(application)
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		this.enableTextures(true);

		// Initial Config
		this.Eixos = false; 
		this.Luzes = false; 
		this.Seilaoq = true;
		this.speed = 3;

		this.keysPressed=false;


		// this.oldCurrTime = 0;
		this.gl.clearColor(0.49, 0.81, 0.92, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// Clock

		this.myClock = new MyClock(this, 12, 3);
		// this.myCircle = new MyCircle(this, 12, 1);
		// Scene elements
		this.table = new MyTable(this);
		// this.leftWindow = new MyQuad(this, 0, 1, 0, 1);
		this.leftWall = new MyQuad(this, -0.2, 1.2, -0.2, 1.2);
		this.rightWall = new Plane(this);
		this.floor = new MyQuad(this, 0, 10, 0, 12);

		this.myPrism = new MyPrism(this, 6, 20);
		this.myCilinder = new MyCilinder(this, 5, 20, 1)

		this.boardA = new Plane(this, BOARD_A_DIVISIONS, -0.1, 1.2, 0.1, 0.8);
		this.boardB = new Plane(this, BOARD_B_DIVISIONS, 0, 1, 0, 1);


		this.myLamp = new MyLamp(this, 6, 20);

		// Trabalho 4


		this.tableAppearance = new CGFappearance(this);
		this.tableAppearance.setSpecular(0,0.2,0.2,0.2);
		this.tableAppearance.setShininess(10);
		this.tableAppearance.setDiffuse(1,1,1,1);
		this.tableAppearance.loadTexture(tableTexture);

		this.floorAppearance = new CGFappearance(this);
		this.floorAppearance.setSpecular(0,0.2,0.2,0.2);
		this.floorAppearance.setShininess(10);
		this.floorAppearance.setDiffuse(1,1,1,1);
		this.floorAppearance.loadTexture(dirtTexture);


		this.windowAppearance = new CGFappearance(this);
		this.windowAppearance.setSpecular(0,0.2,0.2,0.2);
		this.windowAppearance.setShininess(10);
		this.windowAppearance.setDiffuse(1,1,1,1);
		this.windowAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.windowAppearance.loadTexture(windowTexture);

		this.slidesAppearance = new CGFappearance(this);
		this.slidesAppearance.setSpecular(0,0.1,0.1,0.1);
		this.slidesAppearance.setShininess(5);
		this.slidesAppearance.setDiffuse(1,1,1,1);
		this.slidesAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.slidesAppearance.loadTexture(slidesTexture);

		this.boardAppearance = new CGFappearance(this);
		this.boardAppearance.setSpecular(0,0.5,0.5,0.5);
		this.boardAppearance.setShininess(150);
		this.boardAppearance.setDiffuse(1,1,1,1);
		// this.boardAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.boardAppearance.loadTexture(boardTexture);

		this.clockAppearance = new CGFappearance(this);
		this.clockAppearance.setSpecular(0,0.5,0.5,0.5);
		this.clockAppearance.setShininess(150);
		this.clockAppearance.setDiffuse(1,1,1,1);
		this.clockAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.clockAppearance.loadTexture(clockTexture);


		//



		// Materials
		this.materialDefault = new CGFappearance(this);

		this.materialA = new CGFappearance(this);
		this.materialA.setAmbient(0.3,0.3,0.3,1);
		this.materialA.setDiffuse(0.6,0.6,0.6,1);
		// this.materialA.setSpecular(0.2,0.2,0.2,1);
		// this.materialA.setSpecular(0.8,0.8,0.8,1);
		// this.materialA.setSpecular(0,0,0.8,1);
		this.materialA.setSpecular(0,0.2,0.8,1);
		this.materialA.setShininess(10);
		this.materialA.setShininess(120);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.3,0.3,0.3,1);
		this.materialB.setDiffuse(0.6,0.6,0.6,1);
		this.materialB.setSpecular(0.8,0.8,0.8,1);
		this.materialB.setShininess(120);


		// T6

		this.vehicle = new MyVehicle(this);

	//	this.terrain = new MyTerrain(this, 8, this.altimetry);

		this.dirtAppearance = new CGFappearance(this);
		this.dirtAppearance.setSpecular(0,0.2,0.2,0.2);
		this.dirtAppearance.setShininess(10);
		this.dirtAppearance.setDiffuse(1,1,1,1);
		this.dirtAppearance.loadTexture(dirtTexture);

		this.frontLeftLght = new CGFlight(this, "fl");
		this.frontLeftLght.setPosition(0,1,0,1);

		this.frontLeftLght.setAmbient(0.5, 0, 0, 1);
		this.frontLeftLght.setDiffuse(1.0, 0, 0, 1.0);
		this.frontLeftLght.setSpecular(1,0,0,1);



		this.setUpdatePeriod(100);

		//alinea 6

		//example for nrDivs = 8 -> grid of 9x9 vertices
this.altimetry= [[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 1.3 ],
[ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 1.3 ],
[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
[ 0.0 , 0.0 , 2.0, 4.0, 2.5, 2.4, 0.0, 0.0 ],
[ 0.0 , 0.0 , 2.0, 4.0, 3.5, 2.4, 0.0, 0.0 ],
[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
[ 2.0 , 3.0 , 2.0, 1.0, 2.5, 2.4, 2.3, 1.3 ]
];

this.terrain = new MyTerrain(this, 8, this.altimetry);

	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	update(currTime) {
		// var newCurrTime = currTime - oldCurrTime;
		// this.oldCurrTime = currTime;

		this.myClock.update(currTime);

		if (!this.keysPressed) {
			if (this.vehicle.acceleration > 0) {
				this.vehicle.acceleration -= 0.01;
			}
			if (this.vehicle.acceleration < 0) {
				this.vehicle.acceleration += 0.01;
			}
		}

		this.checkKeys();		
	};

	initLights()
	{
		this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);
		// this.setGlobalAmbientLight(0,0,0, 1.0);

		// Positions for four lights
		this.lights[0].setPosition(4, 6, 1, 1);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)

		// this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
		this.lights[1].setPosition(-4, 6, 1, 1);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)

		this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
		// this.lights[2].setVisible(true); // show marker on light position (different from enabled)

		this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
		// this.lights[3].setVisible(true); // show marker on light position (different from enabled)

		// this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setAmbient(0.5, 0.5, 0.5, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,0,1);
		this.lights[0].enable();

		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].enable();

		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setSpecular(1,1,1,1);

		//kc
		this.lights[2].setConstantAttenuation(0)
		//kl
		// this.lights[2].setLinearAttenuation(0.2)
		this.lights[2].setLinearAttenuation(1)
		//kq
		this.lights[2].setQuadraticAttenuation(0)
		// this.lights[2].enable();

		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setSpecular(1,1,0,1);
		//kc
		this.lights[3].setConstantAttenuation(0)
		//kl
		// this.lights[2].setLinearAttenuation(0.2)
		this.lights[3].setLinearAttenuation(0)
		//kq
		this.lights[3].setQuadraticAttenuation(1)
		// this.lights[3].enable();

		this.lights[4].setPosition(15, 2, 5, 1);
        this.lights[4].setDiffuse(1.0,1.0,1.0,1.0);
        this.lights[4].enable();
        this.lights[4].update();




	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	Controles()
	{ 
		// if (this.Eixos == false) {
		// 	this.axis = null;
		// } else {
		// 	this.axis = new CGFaxis(this);
		// }
	};

	checkKeys()
	{
		var text="Keys pressed: ";
		if (this.gui.isKeyPressed("KeyW"))
		{
			text += " W ";
			this.keysPressed = true;

			if (this.vehicle.acceleration < 0.3 && this.vehicle.acceleration > -0.9 ) {
				this.vehicle.acceleration += 0.01;	
			}
			
		}
		if (this.gui.isKeyPressed("KeyS"))
		{
			text += " S ";
			this.keysPressed = true;
			if (this.vehicle.acceleration < 0.3 && this.vehicle.acceleration > -0.9 ) {
				this.vehicle.acceleration -= 0.01;	
			}
		}
		if (this.gui.isKeyPressed("KeyA"))
		{
			text += " A ";
			this.keysPressed = true;
			if (this.vehicle.acceleration != 0) {
				this.vehicle.angleAlpha += 0.01;	
			}
		}
		if (this.gui.isKeyPressed("KeyD"))
		{
			text += " D ";
			this.keysPressed = true;
			if (this.vehicle.acceleration != 0) {
				this.vehicle.angleAlpha -= 0.01;	
			}
		}

		if (this.keysPressed)
			console.log(text);
	}

	display()
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		if (this.Eixos != false) {
			this.axis.display();
		} 

		if (this.Luzes) {

		} else {

		}


		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section

		// Floor
	/*	this.floorAppearance.apply();
		this.pushMatrix();
			this.translate(7.5, 0, 7.5);
			this.rotate(-90 * degToRad, 1, 0, 0);
			this.scale(15, 15, 0.2);
			// this.floorAppearance.apply();
			this.floor.display();
		this.popMatrix(); */

		// Left Wall
		// this.pushMatrix();
		// 	this.translate(0, 4, 7.5);
		// 	this.rotate(90 * degToRad, 0, 1, 0);
		// 	this.scale(15, 8, 0.2);
		// 	this.windowAppearance.apply();
		// 	this.leftWindow.display();
		// this.popMatrix();

		// this.pushMatrix();
		// this.translate(7.3, 7.6, 0);
		// this.myClock.display();
		// this.popMatrix();
		// Plane Wall
		// this.materialDefault.apply();
		// this.windowAppearance.apply();
		// this.pushMatrix();
		// 	this.translate(0, 4, 7.5);
		// 	this.rotate(90 * degToRad, 0, 1, 0);
		// 	this.rotate(180 * degToRad, 0, 0, 1);
		// 	this.scale(15, 8, 0.2);
		// 	this.leftWall.display();
		// this.popMatrix();

		// Plane Wall

		// this.materialDefault.apply();
		// this.pushMatrix();
		// 	this.translate(7.5, 4, 0);
		// 	this.scale(15, 8, 0.2);
		// 	this.rightWall.display();
		// this.popMatrix();

		// First Table
		// this.pushMatrix();
		// 	this.translate(5, 0, 8);
		// 	this.table.display();
		// 	// this.tableAppearance.apply();
		// this.popMatrix();

		// // Second Table
		// this.pushMatrix();
		// 	this.translate(12, 0, 8);
		// 	this.table.display();
		// this.popMatrix();

		// Board A
		// this.pushMatrix();
		// this.slidesAppearance.apply();
		// 	this.translate(4, 4.5, 0.2);
		// 	this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		// 	this.boardA.display();
		// this.popMatrix();

		// // Board B
		// this.pushMatrix();
		// this.boardAppearance.apply();
		// 	this.translate(10.5, 4.5, 0.2);
		// 	this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		// 	this.boardB.display();
		// this.popMatrix();

		// ---- END Scene drawing section

		this.pushMatrix();

		// this.translate(3,1,-2);
		// this.rotate(-Math.PI/2, 1, 0, 0);
		// this.scale(1,1,3);
		// this.translate(3,-3,0);

		// this.translate(3,1,1);
		// this.myCilinder.display();
		this.popMatrix();


		this.pushMatrix();

		// this.translate(3,1,-2);
		// this.rotate(-Math.PI/2, 1, 0, 0);
		// this.scale(1,1,3);
		// this.translate(3,-3,0);

		// this.translate(3,1,1);
		// this.myPrism.display();
		this.popMatrix();


		// this.pushMatrix();
		// this.myLamp.display();
		// this.popMatrix();


		// CAR

		this.pushMatrix();
		
		this.translate(this.vehicle.acceleration, 0, 0);
		this.rotate(this.vehicle.angleAlpha, 0, this.vehicle.angleAlpha, 0);
		
		//if luzes ligadas


		this.frontLeftLght.enable();
		this.frontLeftLght.update();


		this.vehicle.display();
		this.popMatrix();

		//TERRAIN
		this.pushMatrix();
		this.terrain.display();
		this.popMatrix();
	};
};
