
class MyPrism extends CGFobject
{
	constructor(scene, slices, stacks) {

		super(scene);

		this.slices = slices; 
		this.stacks = stacks;

		this.initBuffers();

	}

	initBuffers() {

		this.vertices = [];
		this.indices = [];
		this.normals = [];
		
		var angulo = 0;
		var x = 0;
		var normal = 0;
		var teta = (2 * Math.PI)/this.slices;

		var desiredSize = 1;
		var mainZ = desiredSize / this.stacks;
		var z = 0;
		var z2 = 0;

		for (var j = 0; j < this.stacks ; j++) {

			z = mainZ * j;
			z2 = z + mainZ;

			for (var i = 0; i < this.slices ; i++) {

				console.log(angulo);

				normal = (i+0.5) * teta;
				
				this.vertices.push(Math.cos(angulo), Math.sin(angulo), z);
				this.vertices.push(Math.cos(angulo), Math.sin(angulo), z2);
				
				this.vertices.push(Math.cos(angulo + teta), Math.sin(angulo + teta), z);
				this.vertices.push(Math.cos(angulo + teta), Math.sin(angulo + teta), z2);

				this.indices.push(x, x+2, x+3);
				this.indices.push(x+3, x+1, x);

				this.normals.push(Math.cos(normal), Math.sin(normal), 0);
				this.normals.push(Math.cos(normal), Math.sin(normal), 0);

				this.normals.push(Math.cos(normal), Math.sin(normal), 0);
				this.normals.push(Math.cos(normal), Math.sin(normal), 0);
				
				angulo = angulo + teta;
				x = x+4;
				// console.log(x);
			}
			
		}


		// this.vertices = [
		// -0.5, -0.5, 0,
		// 0.5, -0.5, 0,
		// -0.5, 0.5, 0,
		// 0.5, 0.5, 0,
		// -1, 0.5, 0
		// ];

		// this.indices = [
		// 0, 1, 2,
		// 2, 1, 3
		// ];

		// this.normals = [
		// 0, 0, 1,
		// 0, 0, 1,
		// 0, 0, 1,
		// 0, 0, 1,
		// 0, 0, 1
		// ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	};

	//teta = 2pi/slices

	// display() {

	// 	this.primitiveType = this.scene.gl.TRIANGLES;
	// 	this.initGLBuffers();
		
	// }
};
