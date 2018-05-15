
class MyLamp extends CGFobject {
	constructor(scene, slices, stacks) {

		super(scene);

		this.slices = slices; 
		this.stacks = stacks;

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

		var desiredZ = 1;
		var mainZ = desiredZ / this.stacks;
		var z = 0;
		var z2 = 0;

		var aux = Math.PI/(2*this.stacks);

		for (var j = 0; j < this.stacks + 1 ; j++) {

			z = mainZ * j;
			z2 = z + mainZ;

			for (var i = 0; i < this.slices ; i++) {

				console.log(angulo);

				normal = i * teta;

				this.vertices.push(	Math.sin(j*aux) * Math.cos(i*(2*Math.PI)/this.slices),
				 					Math.sin(j*aux) * Math.sin(i*(2*Math.PI)/this.slices),
				  					z);

               	this.normals.push(	Math.sin(j*aux) * Math.cos(i*(2*Math.PI)/this.slices), 
               						Math.sin(j*aux) * Math.sin(i*(2*Math.PI)/this.slices), 
               						z);


				angulo = angulo + teta;
			
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
