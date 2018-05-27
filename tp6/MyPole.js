/**
 * MyTable
 * @constructor
 */
 class MyPole extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene, 0.5, 1, 0.5, 1);

	};

	display() 
	{
		
		// POLE

		

		this.scene.metal.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, 4.5 / 2, 0);
		this.scene.scale(0.3, 4.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();


		// TOP

		this.scene.carbonCar.apply();
		this.scene.pushMatrix();
		this.scene.translate(0.3, 4.5, 0);
		this.scene.scale(1, 0.1, 0.5);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();

		this.scene.materialDefault.apply();
	};
 };

