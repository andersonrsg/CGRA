
class MyCircle extends CGFobject {
	constructor(scene, slices, stacks, z_pos) {

		super(scene);

		this.slices = slices;
		this.stacks = stacks;
		this.z_pos = z_pos;

		this.initBuffers();

	};


	initBuffers() {

		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var angulo = 0;
		var teta = (2 * Math.PI)/this.slices;

		this.vertices.push(0, 0, this.z_pos);
			this.normals.push(0, 0, 1);
		// this.vertices.push(Math.cos(0), Math.sin(0), 0.2);

			for (var i = 0; i < this.slices ; i++) {

				console.log(angulo);


				this.vertices.push(Math.cos(angulo), Math.sin(angulo), this.z_pos);

				this.normals.push(0, 0, 1);

				angulo = angulo + teta;
			}


			for (var i = 0; i < this.slices ; i++) {
				if (i != this.slices-1)  {
					this.indices.push(0, i+1, (i+2));
				} else {
					this.indices.push(0, i+1, 1);
				}
			}


			this.texCoords.push(0.5, 0.5);

			angulo = 0;
			for (var i = 0; i < this.slices ; i++) {
				this.texCoords.push(0.5 + (Math.cos(angulo))/2, 0.5 + (Math.sin(angulo))/2);
				angulo = angulo + teta;
			}

			// this.texCoords = [
			// 	0, 0,
			// 	1, 0,
			// 	0, 1,
			// 	1, 1
			// ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	};


};
