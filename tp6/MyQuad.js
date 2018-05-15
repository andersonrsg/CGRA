/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyQuad extends CGFobject
{
	constructor(scene, minS, maxS, minT, maxT) 
	{
		super(scene);
		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		
		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [
				-0.5, -0.5, 0,
				0.5, -0.5, 0,
				-0.5, 0.5, 0,
				0.5, 0.5, 0,
				-1, 0.5, 0
				];

		this.indices = [
				0, 1, 2,
				2, 1, 3
			];

			this.normals = [
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1,
				0, 0, 1
			];

			// this.texCoords = [
			// 	0.5, 0.5,
			// 	1, 0.5,
			// 	0.5, 1,
			// 	1, 1
			// ];

			this.texCoords = [
				this.minS, this.minT,
				this.maxS, this.minT,
				this.minS, this.maxT,
				this.maxS, this.maxT
			];

			// var angul = 0;
			// for () {
			// 	vertices.push(cos(angulo), sin(angulo), 0);
			// 	angulo = angulo + (2 * Math.PI)/this.slices;
			// }


			// pode ser 2 , 1 , 3 por regra da mao direita? ???teste
			// translate x y z e depois rotate 30º
			// translate rotate e myobj.display pra mostrar
			// translate(x,y,z).rotate(30º,0,1,0).p
			// <----- ordem de execucao

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

	display() {
		super.display();
	};

};
