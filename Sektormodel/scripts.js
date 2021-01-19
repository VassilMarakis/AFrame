const szene = document.querySelector('a-scene');
console.log(szene);
console.log(document.querySelector('.box'));

let posdiff = new THREE.Vector3( 0,1,0);

let box001 = document.querySelector('.oben');



let oldpos =box001.getAttribute('position')

console.log('Old position is:');
console.log(box001.getAttribute('position'));

let newpos = oldpos.add(posdiff);


console.log('Added vector:');
console.log(posdiff);
console.log('New position is:');
console.log(newpos);

box001.setAttribute('position', newpos);

console.log(box001.getAttribute('position'));

console.log(box001.getAttribute('geometry'));


 let vertices0 = [
    '0 0 -1',
    '1 0 -1',
    '1 1 -2',
    '0 1 -2',
    '0 0 2',
    '1 0 2',
    '1 1 3',
    '0 1 3'
];

console.log(vertices0);

console.log(box001[geometry]);


