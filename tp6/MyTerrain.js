class MyTerrain extends NewPlane{

	constructor(scene, nrDivs, altimetry)
	{
		super(scene, nrDivs, 0, 1, 0, 1, altimetry);
	};

  display(){
    var degToRad = Math.PI / 180.0;

    this.scene.pushMatrix();
    this.scene.dirtAppearance.apply()
    this.scene.scale(50, 1, 50);
    this.scene.rotate(-90 * degToRad, 1, 0, 0)
    super.display();
    this.scene.popMatrix();
  };
}
