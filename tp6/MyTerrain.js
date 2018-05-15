class MyTerrain extends Plane{

	constructor(scene, nrDivs, minS, maxS, minT, maxT, xScale, zScale)
	{
		super(scene, nrDivs, minS, maxS, minT, maxT);

    this.xScale = xScale;
    this.zScale = zScale;
	};

  display(){
    var degToRad = Math.PI / 180.0;

    this.scene.pushMatrix();
    this.scene.dirtAppearance.apply()
    this.scene.scale(this.xScale, 1, this.zScale);
    this.scene.rotate(-90 * degToRad, 1, 0, 0)
    super.display();
    this.scene.popMatrix();
  };
}
