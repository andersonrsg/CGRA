
class MyCilinder extends CGFobject {
	constructor(scene, slices, stacks, thichness) {

		super(scene);

		this.slices = slices; 
		this.stacks = stacks;
		this.thichness = thichness;

		this.initBuffers();

	};

	initBuffers() {

		this.vertices = [];
		this.indices = [];
		this.normals = [];
		
		var angulo = 0;
		var x = 0;
		var normal = 0;
		var teta = (2 * Math.PI)/this.slices;

		var desiredZ = this.thichness;
		var mainZ = desiredZ / this.stacks;
		var z = 0;
		var z2 = 0;

		for (var j = 0; j < this.stacks + 1 ; j++) {

			z = mainZ * j;
			z2 = z + mainZ;

			for (var i = 0; i < this.slices ; i++) {

				// console.log(angulo);

				normal = i * teta;
				
				this.vertices.push(Math.cos(angulo), Math.sin(angulo), z);
				// this.vertices.push(Math.cos(angulo), Math.sin(angulo), z2);
				
				// this.vertices.push(Math.cos(angulo + teta), Math.sin(angulo + teta), z);
				// this.vertices.push(Math.cos(angulo + teta), Math.sin(angulo + teta), z2);

				// this.indices.push(x, x+2, x+3);
				// this.indices.push(x+3, x+1, x);

				this.normals.push(Math.cos(normal), Math.sin(normal), 0);
				// this.normals.push(Math.cos(normal), Math.sin(normal), 0);

				// this.normals.push(Math.cos(normal), Math.sin(normal), 0);
				// this.normals.push(Math.cos(normal), Math.sin(normal), 0);
				
				angulo = angulo + teta;
				// x = x+4;
				// console.log(x);
			}
			
		}
		
		for (i = 0; i < this.stacks ; i++) {
			for (j = 0; j < this.slices ; j++) {
				if (j==this.slices-1) {
					this.indices.push(x,x-(this.slices-1),x+this.slices);
					this.indices.push(x+1,x+this.slices,x-(this.slices-1));
					// console.log(x);
				} else {
					this.indices.push(x,x+1,x+this.slices);
					this.indices.push(x+1+this.slices,this.slices+x,x+1);
				}
				x+=1;
			}
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	};

};
