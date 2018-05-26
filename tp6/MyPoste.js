/**
 * MyTable
 * @constructor
 */
 class MyPoste extends CGFobject
 {
	constructor(scene) 
	{
		super(scene);

		this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene, 0.5, 1, 0.5, 1);

	};

	display() 
	{
		// legs

		this.scene.materialB.apply();

		this.scene.pushMatrix();
		this.scene.translate(0, 4.5 / 2, 0);
		this.scene.scale(0.3, 4.5, 0.3);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();


		// table top

		this.scene.tableAppearance.apply();

		this.scene.pushMatrix();
		this.scene.translate(0.3, 4.5, 0);
		this.scene.scale(1, 0.1, 0.5);
		this.myUnitCubeQuad.display();
		this.scene.popMatrix();
	};
 };

