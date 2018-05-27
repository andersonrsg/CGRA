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
var purpleTexture = "../resources/images/roxo.png"
var greenArmyTexture = "../resources/images/verde_tropa.png"
var blueTexture = "../resources/images/azul_turquesa.png"
var camuflageTexture = "../resources/images/camuflagem_militar.png"
var carbonTexture = "../resources/images/fibra_de_carbono.png"
var redTexture = "../resources/images/vermelho.png"
var yellowTexture = "../resources/images/amarelo.png"
var metalTexture = "../resources/images/metal.jpg"

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

		// MENU
		// Initial Config
		this.Axis = false;
		this.Smooth_Deceleration = true;
		this.Visible_Lights = false;
		this.Speed = 0.15;

		// Lights
		this.Luz_Global = true;

		this.Light_Pole1 = true;
		this.Light_Pole2 = true;
		this.Light_Pole3 = true;


		// Car Textures
		this.RoofTexture = 0;
		this.SideTexture = 1;
		this.WindsheetTexture = 2;
		this.BackTexture = 3;
		this.HoodTexture = 4;
		this.EngineTexture = 5;

		// State Control
		this.keysPressed = false;


		this.oldCurrTime = 0;
		this.gl.clearColor(0.49, 0.81, 0.92, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.axis = new CGFaxis(this);

		// this.myLamp = new MyLamp(this, 6, 20);

		// Texture Initialization
		this.materialDefault = new CGFappearance(this);

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
		this.boardAppearance.loadTexture(boardTexture);

		this.clockAppearance = new CGFappearance(this);
		this.clockAppearance.setSpecular(0,0.5,0.5,0.5);
		this.clockAppearance.setShininess(150);
		this.clockAppearance.setDiffuse(1,1,1,1);
		this.clockAppearance.setTextureWrap("CLAMP_TO_EDGE", "CLAMP_TO_EDGE");
		this.clockAppearance.loadTexture(clockTexture);

		this.materialA = new CGFappearance(this);
		this.materialA.setAmbient(0.3,0.3,0.3,1);
		this.materialA.setDiffuse(0.6,0.6,0.6,1);
		this.materialA.setSpecular(0,0.2,0.8,1);
		this.materialA.setShininess(10);
		this.materialA.setShininess(120);

		this.materialB = new CGFappearance(this);
		this.materialB.setAmbient(0.3,0.3,0.3,1);
		this.materialB.setDiffuse(0.6,0.6,0.6,1);
		this.materialB.setSpecular(0.8,0.8,0.8,1);
		this.materialB.setShininess(120);

		this.metal = new CGFappearance(this);
		this.metal.setSpecular(0.5,0.5,0.5,1);
		this.metal.setShininess(200);
		this.metal.setDiffuse(1,1,1,1);
		this.metal.loadTexture(metalTexture);

		// CAR TEXTURES
		this.purpleCar = new CGFappearance(this);
		this.purpleCar.setSpecular(0,0.2,0.2,0.2);
		this.purpleCar.setShininess(10);
		this.purpleCar.setDiffuse(1,1,1,1);
		this.purpleCar.loadTexture(purpleTexture);

		this.blueCar = new CGFappearance(this);
		this.blueCar.setSpecular(0,0.2,0.2,0.2);
		this.blueCar.setShininess(10);
		this.blueCar.setDiffuse(1,1,1,1);
		this.blueCar.loadTexture(blueTexture);

		this.armyCar = new CGFappearance(this);
		this.armyCar.setSpecular(0,0.2,0.2,0.2);
		this.armyCar.setShininess(1);
		this.armyCar.setDiffuse(0.3,0.3,0.3,1);
		this.armyCar.loadTexture(greenArmyTexture);

		this.camuflageCar = new CGFappearance(this);
		this.camuflageCar.setSpecular(0,0.2,0.2,0.2);
		this.camuflageCar.setShininess(10);
		this.camuflageCar.setDiffuse(0.3,0.3,0.3,1);
		this.camuflageCar.loadTexture(camuflageTexture);

		this.carbonCar = new CGFappearance(this);
		this.carbonCar.setSpecular(0,0.2,0.2,0.2);
		this.carbonCar.setShininess(10);
		this.carbonCar.setDiffuse(1,1,1,1);
		this.carbonCar.loadTexture(carbonTexture);

		this.redCar = new CGFappearance(this);
		this.redCar.setSpecular(0,0.2,0.2,0.2);
		this.redCar.setShininess(10);
		this.redCar.setDiffuse(1,1,1,1);
		this.redCar.loadTexture(redTexture);

		this.yellowCar = new CGFappearance(this);
		this.yellowCar.setSpecular(0,0.2,0.2,0.2);
		this.yellowCar.setShininess(10);
		this.yellowCar.setDiffuse(1,1,1,1);
		this.yellowCar.loadTexture(yellowTexture);



		// T6

		this.vehicle = new MyVehicle(this);


		this.dirtAppearance = new CGFappearance(this);
		this.dirtAppearance.setSpecular(0,0.2,0.2,0.2);
		this.dirtAppearance.setShininess(10);
		this.dirtAppearance.setDiffuse(1,1,1,1);
		this.dirtAppearance.loadTexture(dirtTexture);




		this.setUpdatePeriod(1);

		// Poles
		this.pole1 = new MyPole(this);
		this.pole2 = new MyPole(this);
		this.pole3 = new MyPole(this);



		//example for nrDivs = 8 -> grid of 9x9 vertices
		this.altimetry= [
		[ 2.0 , 3.0 , 2.0, 4.0, 2.5, 2.4, 2.3, 2.3, 1.2, 1.1, 0.0, 0.0 ],
		[ 2.0 , 3.0 , 2.0, 4.0, 7.5, 6.4, 4.3, 2.3, 3.2, 2.1, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 2.6, 2.2, 2.1, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 2.0, 4.0, 2.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 2.0, 4.0, 3.5, 0.0, 0.0, 0.0, 2.2, 3.1, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.2, 2.1, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.2, 3.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.2, 2.5, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 2.0, 4.0, 3.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 0.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
		[ 10.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
		];

		this.terrain = new MyTerrain(this, 11, this.altimetry);

		this.vehicleAppearances = [this.materialDefault, this.purpleCar, this.blueCar, this.armyCar,
		this.camuflageCar, this.carbonCar, this.redCar, this.yellowCar];

		this.vehicleAppearanceList = { Default : 0, Purple: 1, Blue: 2, Army: 3,
			Camuflage: 4, Carbon: 5, Red: 6, Yellow: 7};

			this.crane = new MyCrane(this);



		};

		initCameras()
		{
			this.camera = new CGFcamera(0.8, 0.1, 700, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
		};

		update(currTime) {

			var newCurrTime = currTime - this.oldCurrTime;
			this.oldCurrTime = currTime;

			this.vehicle.update(newCurrTime);
			this.crane.update(newCurrTime);

			this.checkKeys();
		};

		initLights()
		{
			this.setGlobalAmbientLight(0.5,0.5,0.5, 1.0);
		// this.setGlobalAmbientLight(0,0,0, 1.0);

		this.lights[0].setPosition(-4, 6, 1, 1);
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);

		this.lights[1].setPosition(3, 6, 1, 1);
		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);


		this.lights[2].setPosition(0, 6.3, -17.2, 1);
		this.lights[2].setVisible(true);
		this.lights[2].setAmbient(0, 0, 0.2, 1);
		this.lights[2].setDiffuse(1, 1, 0.2, 1);
		this.lights[2].setSpecular(1,1,0,1);
		this.lights[2].setLinearAttenuation(0.1);


		this.lights[3].setPosition(-7, 6.2, 14.6, 1);
		this.lights[3].setVisible(true);
		this.lights[3].setAmbient(0, 0, 0.2, 1);
		this.lights[3].setDiffuse(1, 1, 0.2, 1);
		this.lights[3].setSpecular(1,1,0,1);
		this.lights[3].setLinearAttenuation(0.1);


		this.lights[4].setPosition(12.6, 6.3, 0, 1);
		this.lights[4].setVisible(true);
		this.lights[4].setAmbient(0, 0, 0.2, 1);
		this.lights[4].setDiffuse(1, 1, 0.2, 1);
		this.lights[4].setSpecular(1,1,0,1);
		this.lights[4].setLinearAttenuation(0.1);

		
	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	Controls()
	{

	};

	checkKeys()
	{
		this.keysPressed = false;
		var text="Keys pressed: ";

		if (this.vehicle.isOn == true) {

			if (this.gui.isKeyPressed("KeyW"))
			{
				text += " W ";
				this.keysPressed = true;

				if (this.vehicle.speed <= this.vehicle.maxSpeed) {
					this.vehicle.speed += this.vehicle.acceleration;
				}

			}
			if (this.gui.isKeyPressed("KeyS"))
			{
				text += " S ";
				this.keysPressed = true;

				if (this.vehicle.speed >= -this.vehicle.maxSpeed) {
					this.vehicle.speed -= this.vehicle.acceleration;
				}
			}
			if (this.gui.isKeyPressed("KeyA"))
			{
				text += " A ";
				this.keysPressed = true;

				if (this.vehicle.wheelRotationCounter < Math.PI/4) {
					this.vehicle.wheelRotationCounter += 0.02;
				}
				if (this.vehicle.speed > 0) {
					this.vehicle.angleAlpha -= 0.01;
				} else if (this.vehicle.speed < 0) {
					this.vehicle.angleAlpha += 0.01;
				}
			}

			if (this.gui.isKeyPressed("KeyD"))
			{
				text += " D ";
				this.keysPressed = true;

				if (this.vehicle.wheelRotationCounter > -Math.PI/4) {
					this.vehicle.wheelRotationCounter -= 0.02;
				}

				if (this.vehicle.speed > 0) {
					this.vehicle.angleAlpha += 0.01;
				} else if (this.vehicle.speed < 0) {
					this.vehicle.angleAlpha -= 0.01;
				}

			}


			if (this.keysPressed) {
				console.log(text);
			} else {
				this.vehicle.wheelRotationAngle	= 0;

				if (this.Smooth_Deceleration == true) {
					if (this.vehicle.speed > 0) {
						this.vehicle.speed -= 0.01;
					}
					if (this.vehicle.speed < 0) {
						this.vehicle.speed += 0.01;
					}

				}

				if (this.vehicle.speed > -0.011 && this.vehicle.speed < 0.011) {
					this.vehicle.speed = 0;
				}

				if (this.vehicle.wheelRotationCounter > -0.021 && this.vehicle.wheelRotationCounter < 0.021) {
					this.vehicle.wheelRotationCounter = 0;
				}

			}

			if (!this.gui.isKeyPressed("KeyD") && !this.gui.isKeyPressed("KeyA")) {
				if (this.vehicle.wheelRotationCounter < 0) {
					this.vehicle.wheelRotationCounter += 0.02;
				}
				if (this.vehicle.wheelRotationCounter > 0) {
					this.vehicle.wheelRotationCounter -= 0.02;
				}
			}
		}

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

		////////////////// GUI UPDATES  //////////////////

		// Draw axis
		if (this.Axis != false) {
			this.axis.display();
		}


		// this.materialDefault.apply();



		// Lights
		if (this.Light_Pole1 == true) {
			this.lights[2].enable();
		}
		if (this.Light_Pole1 == false) {
			this.lights[2].disable();
		}

		if (this.Light_Pole2 == true) {
			this.lights[3].enable();
		}
		if (this.Light_Pole2 == false) {
			this.lights[3].disable();
		}

		if (this.Light_Pole3 == true) {
			this.lights[4].enable();
		}
		if (this.Light_Pole3 == false) {
			this.lights[4].disable();
		}

		


		if (this.Luz_Global == true) {
			this.lights[0].enable();
			this.lights[1].enable();
		} else {
			this.lights[0].disable();
			this.lights[1].disable();
		}


		if (this.Visible_Lights == true) {
			for (var i = 0; i < this.lights.length ; i++)
				this.lights[i].setVisible(true);
		} else {
			for (var i = 0; i < this.lights.length ; i++)
				this.lights[i].setVisible(false);
		}


		//TERRAIN
		this.pushMatrix();
		this.terrain.display();
		this.popMatrix();

		//CRANE
		this.pushMatrix();
		this.crane.display();
		this.popMatrix();

		//LIGHT POLES
		this.pushMatrix();
		this.translate(0, 2, -18);
		this.rotate(-Math.PI/2, 0, 1, 0);
		this.pole1.display();
		this.popMatrix();

		this.pushMatrix();
		this.translate(-7, 2, 15);
		this.rotate(Math.PI/2, 0, 1, 0);
		this.pole2.display();
		this.popMatrix();

		this.pushMatrix();
		this.translate(13, 2, 0);
		this.rotate(Math.PI, 0, 1, 0);
		this.pole3.display();
		this.popMatrix();

		//VEÍCULO
		this.vehicle.maxSpeed = this.Speed;

		if (!(this.crane.currentState == 2 || this.crane.currentState == 3 || this.crane.currentState == 4)) {
			this.pushMatrix();
			this.vehicle.display();
			this.popMatrix();
		}

	};
};
