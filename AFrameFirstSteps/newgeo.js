this.AFRAME.registerGeometry("phisphere", {
    schema : {
        phi : { default : 360, min : 0, type : "int" },
    },    
    init : function (data) {
        let phi = THREE.Math.degToRad(data.phi);
        let sphere = new THREE.SphereGeometry(1, 18, 36, 0, phi);

        let semiStart = new THREE.CircleGeometry(1, 36, 0, Math.PI);
        
        semiStart.applyMatrix(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0,0,1), Math.PI / 2));
        semiStart.applyMatrix(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1,0,0), Math.PI));

        let semiEnd = new THREE.CircleGeometry(1, 32, 0, Math.PI);
        semiStart.applyMatrix(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0,0,1), Math.PI / 2));
        semiStart.applyMatrix(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0,1,0), phi));

        let geometry = new THREE.Geometry();
        geometry.merge(sphere);
        geometry.merge(semiStart);
        geometry.merge(semiEnd);

        this.geometry = geometry;
    }
});

this.AFRAME.registerGeometry('box2', {
 	schema: {
		depth: {default: 1, min: 0},
    	height: {default: 4, min: 0},
    	width: {default: 1, min: 0},
    	segmentsHeight: {default: 1, min: 1, max: 20, type: 'int'},
    	segmentsWidth: {default: 4, min: 1, max: 20, type: 'int'},
    	segmentsDepth: {default: 1, min: 1, max: 20, type: 'int'}
    	},
		init: function (data) {
   		this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
   		}
   		});
   		
   		
this.AFRAME.registerGeometry('example', {
	schema: {
   	vertices: {
      	default: ['-10 10 0', '-10 -10 0', '10 -10 0'],
    	}
  	},
	init: function (data) {
		let geometry = new THREE.Geometry();
    	geometry.vertices = data.vertices.map(function (vertex) {
      	let points = vertex.split(' ').map(function(x){return parseInt(x);});
      	return new THREE.Vector3(points[0], points[1], points[2]);
		});
		geometry.computeBoundingBox();
    	geometry.faces.push(new THREE.Face3(0, 1, 2));
    	geometry.mergeVertices();
    	geometry.computeFaceNormals();
    	geometry.computeVertexNormals();
    	this.geometry = geometry;
  }
});

this.AFRAME.registerGeometry('example2', {
	schema: {
   	vertices: {
      	default: ['0 0 0', '1 0 0', '1 1 0', '0 1 0', '0 0 1', '1 0 1', '1 1 1', '0 1 1'],
    	}
  	},
	init: function (data) {
		let geometry = new THREE.Geometry();
    	geometry.vertices = data.vertices.map(function (vertex) {
      	let points = vertex.split(' ').map(function(x){return parseInt(x);});
      	return new THREE.Vector3(points[0], points[1], points[2]);
		});
		geometry.computeBoundingBox();
		//unten
    	geometry.faces.push(new THREE.Face3(0, 1, 2, new THREE.Vector3( 0, 0, -1 )));
    	geometry.faces.push(new THREE.Face3(2, 3, 0, new THREE.Vector3( 0, 0, -1 ))); 
    	//oben
		geometry.faces.push(new THREE.Face3(4, 5, 6, new THREE.Vector3( 0, 0, 1 )));  	
    	geometry.faces.push(new THREE.Face3(6, 7, 4, new THREE.Vector3( 0, 0, 1 )));
    	//vorne
    	geometry.faces.push(new THREE.Face3(1, 2, 6, new THREE.Vector3( 1, 0, 0 )));
    	geometry.faces.push(new THREE.Face3(6, 5, 1, new THREE.Vector3( 1, 0, 0 )));
    	//hinten
    	geometry.faces.push(new THREE.Face3(0, 3, 7, new THREE.Vector3( -1, 0, 0 )));
    	geometry.faces.push(new THREE.Face3(7, 4, 0, new THREE.Vector3( -1, 0, 0 )));
    	//rechts
    	geometry.faces.push(new THREE.Face3(6, 7, 3, new THREE.Vector3( 0, 1, 0 )));
    	geometry.faces.push(new THREE.Face3(3, 2, 6, new THREE.Vector3( 0, 1, 0 )));
    	//links
    	geometry.faces.push(new THREE.Face3(0, 1, 5, new THREE.Vector3( 0, -1, 0 )));
    	geometry.faces.push(new THREE.Face3(5, 4, 0, new THREE.Vector3( 0, -1, 0 )));
    	
    	
    	
    	geometry.mergeVertices();
    	//geometry.computeFaceNormals();
    	geometry.computeVertexNormals();
    	this.geometry = geometry;
  }
});