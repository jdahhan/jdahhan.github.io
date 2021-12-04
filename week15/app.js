var x = 0
var y = 0

document.addEventListener('mousemove', (event) => {
    x = (event.clientX - window.innerWidth/2) / 1700
    y = (event.clientY - window.innerHeight/2) / 1700
});

var heading = document.querySelector("h1")

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 7;
camera.rotation.x = - .4
var canvas = document.getElementById("BG")
var scene = new THREE.Scene()
var renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
var cubegeom = new THREE.BoxGeometry(1,1,1)
var purple = new THREE.MeshLambertMaterial({color : 0x5500FF, transparent : true})
purple.opacity = .5
var outercube = new THREE.Mesh(cubegeom, purple)

var innergeom = new THREE.BoxGeometry(.75,.75,.75)
var red = new THREE.MeshLambertMaterial({color : 0xFF0000, transparent : false, wireframe : true})
red.opacity = .6

var redflat = new THREE.MeshLambertMaterial({color : 0xFF0000, transparent : true})
redflat.opacity = .2

var blueflat = new THREE.MeshLambertMaterial({color : 0x0000FF, transparent : true})
blueflat.opacity = .2

var innercube = new THREE.Mesh(innergeom, red)

var circlegeom = new THREE.SphereGeometry(3.7,8,8)
var wireframe = new THREE.MeshBasicMaterial({color : 0xFFFFFF, wireframe : true})
var sphere = new THREE.Mesh(circlegeom, wireframe)

var pointlight = new THREE.PointLight(0xFFFFFF)
pointlight.position.set(10,10,10)
var ambient = new THREE.AmbientLight(0xFFFFFF)
ambient.position.set(10,10,10)



const triangle = new THREE.ConeGeometry(
    12, 2,
    6, 1,
    true,
    0, .5
); 

var trianglearray2 = []
var trianglearray = []
for (let i = 0 ; i < 3 ; i ++){
    trianglearray.push(new THREE.Mesh(triangle, redflat))
    trianglearray[i].rotation.y = (6.28/3) * i
    trianglearray[i].position.y = -1.5
    scene.add(trianglearray[i])
    trianglearray2.push(new THREE.Mesh(triangle, blueflat))
    trianglearray2[i].rotation.y = (6.28/3) * i
    trianglearray2[i].position.y = -2
    scene.add(trianglearray2[i])
}

const orb = new THREE.SphereGeometry(0.05, 24, 24)
const material = new THREE.MeshBasicMaterial({color: 0xffffff})

function addStar(){
    const star = new THREE.Mesh(orb, material)
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(70))
    star.position.set(x,y,z)
    scene.add(star) 
}

Array(200).fill().forEach(addStar)

scene.add(ambient, pointlight, outercube, innercube, sphere)
var render = function(){
    requestAnimationFrame(render)
    outercube.rotation.x += .01
    outercube.rotation.y += .01
    outercube.rotation.z += .01
    innercube.rotation.x -= .01
    innercube.rotation.y -= .01
    innercube.rotation.z -= .01
    sphere.rotation.y -= .005
    camera.position.y = 3.5 - y
    camera.position.x = x
    for (let i = 0 ; i < 3 ; i ++){
        trianglearray[i].rotation.y += 0.01
        trianglearray2[i].rotation.y -= 0.03
    }
    renderer.setSize( window.innerWidth, window.innerHeight );
    heading.style.top = String(y*-25) + "px"
    heading.style.left = String(x*-25) + "px"

    renderer.render(scene, camera)
}

render()