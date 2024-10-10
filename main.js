import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 800 / 800, 0.1, 1000 );  // Aspect ratio is 1:1

const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild( renderer.domElement );

const capGeo = new THREE.CapsuleGeometry(2, 5, 10, 20);
const capMat = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const capsule = new THREE.Mesh( capGeo, capMat );
scene.add( capsule );
capsule.rotation.z = 1.562;

capsule.position.set(0, 0, -15);

function setRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return capMat.color.set(r / 255, g / 255, b / 255);
}

let velX = 0.05;
let velY = 0.03;
let EW = 6.45;
let NS = 9;
let count = 0;

function animate() {
    requestAnimationFrame(animate);
        
    capsule.position.x += velX;
    capsule.position.y += velY;

    if (capsule.position.x > EW || capsule.position.x < -EW) {
        velX = -velX;
        setRandomColor()
        EW = EW + 0.8;
        NS = NS + 0.4;
        capsule.scale.x -= 0.15;
        capsule.scale.y -= 0.15;
        capsule.scale.z -= 0.15;
        count++;
        if (count>=7){
            capsule.scale.set(0,0,0);
        }
    }

    if (capsule.position.y > NS || capsule.position.y < -NS) {
        velY = -velY;
        setRandomColor()
        EW = EW + 0.8;
        NS = NS + 0.4;
        capsule.scale.x -= 0.15;
        capsule.scale.y -= 0.15;
        capsule.scale.z -= 0.15;
        count++;
        if (count>=7){
            capsule.scale.set(0,0,0);
        }
    }

    renderer.render(scene, camera);
}

animate();

