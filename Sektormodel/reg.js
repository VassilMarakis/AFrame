AFRAME.registerGeometry('sektor', {
    schema: {
      vertices: {
        default: [], // hier: default ist leer, Parameter beim Erstellen eines Sektor Objekts
      }
    },

    init: function(data) {
      let geometry = new THREE.Geometry();

      // Erzeuge aus Eingabedaten Input für Vertizes und Flächenfunktion
      geometry.vertices = data.vertices.map(function(vertex) {
        let points = vertex.split(' ').map(function(x) {
          return parseFloat(x);
        });
        return new THREE.Vector3(points[0], points[1], points[2]);
      });
    // Flächenfunktionen, REIHENFOLGE wichtig fürs rendering
      geometry.computeBoundingBox();
      geometry.faces.push(new THREE.Face3(2, 1, 0));
      geometry.faces.push(new THREE.Face3(0, 3, 2));
      geometry.faces.push(new THREE.Face3(4, 5, 6));
      geometry.faces.push(new THREE.Face3(6, 7, 4));
      geometry.faces.push(new THREE.Face3(6, 5, 1));
      geometry.faces.push(new THREE.Face3(1, 2, 6));
      geometry.faces.push(new THREE.Face3(6, 2, 3));
      geometry.faces.push(new THREE.Face3(3, 7, 6));
      geometry.faces.push(new THREE.Face3(7, 3, 0));
      geometry.faces.push(new THREE.Face3(0, 4, 7));
      geometry.faces.push(new THREE.Face3(5, 4, 0));
      geometry.faces.push(new THREE.Face3(0, 1, 5));

      geometry.mergeVertices();
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();

      this.geometry = geometry;
    }
  });

  AFRAME.registerGeometry('tetraeder', {
    schema: {
      vertices: {
        default: [],
      }
    },

    init: function(data) {
      let geometry = new THREE.Geometry();
      geometry.vertices = data.vertices.map(function(vertex) {
        let points = vertex.split(' ').map(function(x) {
          return parseFloat(x);
        });
        return new THREE.Vector3(points[0], points[1], points[2]);
      });

      geometry.computeBoundingBox();
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.faces.push(new THREE.Face3(0, 2, 3));
      geometry.faces.push(new THREE.Face3(0, 3, 1));
      geometry.faces.push(new THREE.Face3(1, 3, 2));

      geometry.mergeVertices();
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();

      this.geometry = geometry;
    }
  });
