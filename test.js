var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

scene.add(new THREE.GridHelper(10, 10));

var geom = new THREE.CylinderGeometry(1, 1, 7, 16, 1);
geom.rotateZ(-Math.PI * 0.5); // rotate 90 degrees clockwise around z-axis

var cylinder = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
    color: "aqua",
    wireframe: true
}));
scene.add(cylinder);

render();

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}