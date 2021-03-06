
class MyInterface extends CGFinterface {


	/**
	 * MyInterface
	 * @constructor
	 */
 	constructor (scene) {
 		super(scene);
 	}

	/**
	 * init
	 * @param {CGFapplication} application
	 */
	init(application) {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		// add a button:
		// the first parameter is the object that is being controlled (in this case the scene)
		// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
		// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); };

		this.gui.add(this.scene, 'Controls');

		// add a group of controls (and open/expand by defult)

		var group = this.gui.addFolder("Options");
		group.open();

		// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
		// e.g. this.option1=true; this.option2=false;

		group.add(this.scene, 'Axis');
		group.add(this.scene, 'Smooth_Deceleration');
		group.add(this.scene, 'Visible_Lights');
		group.add(this.scene, 'Luz_Global');

		// add a slider
		// must be a numeric variable of the scene, initialized in scene.init e.g.
		// this.speed=3;
		// min and max values can be specified as parameters

		this.gui.add(this.scene, 'Speed', 0.1, 3);

		var groupCarTexture = this.gui.addFolder("Texture");

    	//Car texture controls
    	groupCarTexture.add(this.scene, 'RoofTexture', this.scene.vehicleAppearanceList );
    	groupCarTexture.add(this.scene, 'SideTexture', this.scene.vehicleAppearanceList );
    	groupCarTexture.add(this.scene, 'WindsheetTexture', this.scene.vehicleAppearanceList );
    	groupCarTexture.add(this.scene, 'BackTexture', this.scene.vehicleAppearanceList );
    	groupCarTexture.add(this.scene, 'HoodTexture', this.scene.vehicleAppearanceList );
    	groupCarTexture.add(this.scene, 'EngineTexture', this.scene.vehicleAppearanceList );


		var groupLights = this.gui.addFolder("Lights");
		groupLights.add(this.scene, 'Light_Pole1');
		groupLights.add(this.scene, 'Light_Pole2');
		groupLights.add(this.scene, 'Light_Pole3');



		this.initKeys();

		return true;
	};

	initKeys() {
		this.scene.gui=this;
		this.processKeyboard=function(){};
		this.activeKeys = {};
	};

	processKeyDown(event) {
		this.activeKeys[event.code] = true;
	};

	processKeyUp(event) {
		this.activeKeys[event.code] = false;
	};

	isKeyPressed(keyCode) {
		return this.activeKeys[keyCode] || false;
	};

};
