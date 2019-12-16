$(document).ready(function() {

		//3D CONTROLS

				// RENDERER
		var renderer = new THREE.WebGLRenderer({ canvas: document.querySelector(".builder canvas") });				
		renderer.setClearColor(0xFFFFFF, 1)
	
				//CAMERA

				// There's no reason to set the aspect here because we're going
				// to set it every frame anyway so we'll set it to 2 since 2
				// is the the aspect for the canvas default size (300w/150h = 2)
		var camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
		camera.position.z = 400;

				// SCENE
	
		var scene = new THREE.Scene();

				// LIGHTS
	
	var light1 = new THREE.PointLight(0xfff3d4, 1.2, 0);
		light1.position.set(200, 100, 300);
		scene.add(light1);

				// ARRAY FOR STORING LOADED OBJECTS

		var myObjs = {};

				//LOADING OBJECTS
	
		var loader = new THREE.OBJLoader();

		function scaling(object){
			object.scale.x = 20;
			object.scale.y = 20;
			object.scale.z = 20;

			object.position.x = 3;

			object.rotation.x = .3;
			object.rotation.y = -.75;
		};
		
				// LOADING OBJECTS
	
		var bottomBread = loader.load('/objects/bread_bottom.obj', function (object) {
				// SETTING OBJECT NAME
			object.name= 'bread_bottom';

				//OBJECT SCALING
			 scaling(object);

				// GIVING OBJECT THE MATERIAL
			object.traverse(function (child) {
				if (child instanceof THREE.Mesh) {
					child.material = italMaterial;
					child.material.autoUpdate = true;
				}
			});
				// ADDING OBJECT TO SCENE
			scene.add(object);

				// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
			myObjs['bread_bottom'] = object;
		},
			function (xhr) {
				console.log((xhr.loaded / xhr.total * 100) + "% loaded")
			},
			function (err) {
				console.error("Error loading 'bread'")
			}
		);

	var ham = loader.load('/objects/ham.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'ham';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = hamMaterial;
				child.material.autoUpdate = true;
			}
		});	

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['ham'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bread'")
		}
	);

	var turkey = loader.load('/objects/turkey.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'turkey';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = turkeyMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['turkey'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bread'")
		}
	);

	var salami = loader.load('/objects/salami.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'salami';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = salamiMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['salami'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bread'")
		}
	);

	var pepperoni = loader.load('/objects/pepperoni.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'pepperoni';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = pepperoniMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['pepperoni'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bread'")
		}
	);

	var avocado = loader.load('/objects/avocado.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'avocado';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = avocadoMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['avocado'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bread'")
		}
	);

	var american = loader.load('/objects/american.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'american';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = americanMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['american'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bread'")
		}
	);

	var bacon = loader.load('/objects/bacon.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'bacon';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = baconMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['bacon'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'bacon'")
		}
	);

	var banana_pepper = loader.load('/objects/banana_pepper.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'banana_pepper';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = bananaPepperMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['banana_pepper'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'banana_pepper'")
		}
	);

	var cheddar = loader.load('/objects/cheddar.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'cheddar';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = cheddarMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['cheddar'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'cheddar'")
		}
	);

	var green_pepper = loader.load('/objects/green_pepper.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'green_pepper';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = greenPepperMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['green_pepper'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'green_pepper'")
		}
	);

	var jalapenos = loader.load('/objects/jalapenos.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'jalapenos';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = jalapenoMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['jalapenos'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'jalapenos'")
		}
	);

	var lettuce = loader.load('/objects/lettuce.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'lettuce';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = lettuceMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['lettuce'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'lettuce'")
		}
	);

	var olives = loader.load('/objects/olives.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'olives';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = oliveMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['olives'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'olives'")
		}
	);

	var onion = loader.load('/objects/onion.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'onion';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = onionMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['onion'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'onion'")
		}
	);

	var pepperjack = loader.load('/objects/pepperjack.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'pepperjack';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = pepperjackMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['pepperjack'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'pepperjack'")
		}
	);

	var provolone = loader.load('/objects/provolone.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'provolone';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = provoloneMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['provolone'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'provolone'")
		}
	);

	var spinach = loader.load('/objects/spinach.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'spinach';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = spinachMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['spinach'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'spinach'")
		}
	);

	var swiss = loader.load('/objects/swiss.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'swiss';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = swissMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['swiss'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'swiss'")
		}
	);

	var tomato = loader.load('/objects/tomato.obj', function (object) {
		// SETTING OBJECT NAME
		object.name = 'tomato';

		//OBJECT SCALING
		scaling(object);

		// GIVING OBJECT THE MATERIAL
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tomatoMaterial;
				child.material.autoUpdate = true;
			}
		});

		// LOADING THIS OBJECT INTO THE ARRAY FOR CALLBACK
		myObjs['tomato'] = object;
	},
		function (xhr) {
			console.log((xhr.loaded / xhr.total * 100) + "% loaded")
		},
		function (err) {
			console.error("Error loading 'tomato'")
		}
	);


	
				// CANVAS RESIZE
		function resizeCanvasToDisplaySize() {

			var canvas = renderer.domElement;
			var width = canvas.clientWidth;
			var height = canvas.clientHeight;
			if (canvas.width !== width || canvas.height !== height) {
				// you must pass false here or three.js sadly fights the browser
				renderer.setSize(width, height, false);
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
	
				// set render target sizes here
			}
		}
	
	
		function animate(time) {
			time *= 0.001;  // seconds
	
			resizeCanvasToDisplaySize();
	
			renderer.render(scene, camera);
			requestAnimationFrame(animate);

		}
	
		requestAnimationFrame(animate);

				// MATERIALS

	var italMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xfff2cf,
			flatShading: THREE.SmoothShading
		}
	);

	var wheatMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xd4bc9d,
			flatShading: THREE.SmoothShading
		}
	);

	var parmMaterial = new THREE.MeshLambertMaterial(
		{ 
			color: 0xf0e6b6, 
			flatShading: THREE.SmoothShading 
		}
	);

	var hamMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xd99c9c,
			flatShading: THREE.SmoothShading
		}
	);

	var turkeyMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xffefcf,
			flatShading: THREE.SmoothShading
		}
	);

	var salamiMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xcf7878,
			flatShading: THREE.SmoothShading
		}
	);

	var pepperoniMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xc7472a,
			flatShading: THREE.SmoothShading
		}
	);

	var americanMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xfcd268,
			flatShading: THREE.SmoothShading
		}
	);

	var avocadoMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x86a641,
			flatShading: THREE.SmoothShading
		}
	);

	var baconMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x753221,
			flatShading: THREE.SmoothShading
		}
	);

	var bananaPepperMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xd1d636,
			flatShading: THREE.SmoothShading
		}
	);


	var cheddarMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xe8962a,
			flatShading: THREE.SmoothShading
		}
	);

	var greenPepperMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x2f911d,
			flatShading: THREE.SmoothShading
		}
	);

	var jalapenoMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x455911,
			flatShading: THREE.SmoothShading
		}
	);

	var lettuceMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xa2e851,
			flatShading: THREE.SmoothShading
		}
	);

	var oliveMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x242419,
			flatShading: THREE.SmoothShading
		}
	);

	var onionMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xf7e1fa,
			flatShading: THREE.SmoothShading
		}
	);

	var pepperjackMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xc9bf61,
			flatShading: THREE.SmoothShading
		}
	);

	var provoloneMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xf2ecb1,
			flatShading: THREE.SmoothShading
		}
	);

	var spinachMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x17470b,
			flatShading: THREE.SmoothShading
		}
	);

	var swissMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xe8c579,
			flatShading: THREE.SmoothShading
		}
	);

	var tomatoMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0xcf3a23,
			flatShading: THREE.SmoothShading
		}
	);



	// TAB FUNCTIONS
	$(".toggleBread").click(function() {
		if($(".bread").css("bottom") == "-120px"){
			$(".bread").css("bottom", "0");
		} else {
			$(".bread").css("bottom", "-120px");
		}
	})

	$(".toggleMeat").click(function () {
		if ($(".meat").css("bottom") == "-120px") {
			$(".meat").css("bottom", "0");
		} else {
			$(".meat").css("bottom", "-120px");
		}
	})

	$(".toggleCheese").click(function () {
		if ($(".cheese").css("bottom") == "-120px") {
			$(".cheese").css("bottom", "0");
		} else {
			$(".cheese").css("bottom", "-120px");
		}
	})

	$(".toggleVeg").click(function () {
		if ($(".veg").css("bottom") == "-120px") {
			$(".veg").css("bottom", "0");
		} else {
			$(".veg").css("bottom", "-120px");
		}
	})

	$(".toggleExtras").click(function () {
		if ($(".extras").css("bottom") == "-120px") {
			$(".extras").css("bottom", "0");
		} else {
			$(".extras").css("bottom", "-120px");
		}
	})

					
	// BREAD CHECKS


	var breads = [];

	breads['ital'] = document.getElementById("italian");
	breads['wheat'] = document.getElementById("wheat");
	breads['parm'] = document.getElementById("parm");

	$('input[name=bread]').change(function () {
		event.preventDefault();

		if (breads['ital'].checked == true) {

			breadColor = "0x66ff33"

			myObjs['bread_bottom'].traverse(function (child) {
				if (child instanceof THREE.Mesh) {
					child.material = italMaterial;
				}
				myObjs['bread_bottom'].needsUpdate = true;
			});

		}

		if (breads['wheat'].checked == true) {

			breadColor = "0x0066cc"

			myObjs['bread_bottom'].traverse(function (child) {
				if (child instanceof THREE.Mesh) {
					child.material = wheatMaterial;
				}
				myObjs['bread_bottom'].needsUpdate = true;
			});

		}

		if (breads['parm'].checked == true) {

			breadColor = "0xcc66ff"

			myObjs['bread_bottom'].traverse(function (child) {
				if (child instanceof THREE.Mesh) {
					child.material = parmMaterial;
				}
				myObjs['bread_bottom'].needsUpdate = true;
				}
				);
	
	}
}
	);


	// MEAT CHECKS

	var meats = [];

	meats['ham'] = document.getElementById("ham");
	meats['turkey'] = document.getElementById("turkey");
	meats['beef'] = document.getElementById("beef");
	meats['salami'] = document.getElementById("salami");
	meats['pep'] = document.getElementById("pepperoni");

	$('input[name=meat]').change(function () {
		event.preventDefault();

		if (meats['ham'].checked == true) {
			scene.add(myObjs['ham']);
			console.log("ham checked");
		} else if (meats['ham'].checked == false){
			scene.remove(myObjs['ham']);
			console.log("ham not checked");
		} else {
			console.log("error");
		};

		if (meats['turkey'].checked == true) {
			scene.add(myObjs['turkey']);
			console.log("turkey checked");
		} else if (meats['turkey'].checked == false) {
			scene.remove(myObjs['turkey']);
			console.log("turkey not checked");
		} else {
			console.log("error");
			console.log(meats['turkey'].checked);
		};

		if (meats['beef'].checked == true) {
			console.log("beef checked");
		} else if (meats['beef'].checked == false) {
			console.log("beef not checked");
		} else {
			console.log("error");
			console.log(meats['beef'].checked);
		};

		if (meats['salami'].checked == true) {
			scene.add(myObjs['salami']);
			console.log("salami checked");
		} else if (meats['salami'].checked == false) {
			scene.remove(myObjs['salami']);
			console.log("salami not checked");
		} else {
			console.log("error");
			console.log(meats['salami'].checked);
		};

		if (meats['pep'].checked == true) {
			scene.add(myObjs['pepperoni'])
			console.log("pep checked");
		} else if (meats['pep'].checked == false) {
			scene.remove(myObjs['pepperoni'])
			console.log("pep not checked");
		} else {
			console.log("error");
			console.log(meats['pep'].checked);
		};
	})

	// CHEESE

	var cheeses = [];

	cheeses['provolone'] = document.getElementById("provolone");
	cheeses['cheddar'] = document.getElementById("cheddar");
	cheeses['pepperjack'] = document.getElementById("pepperjack");
	cheeses['swiss'] = document.getElementById("swiss");
	cheeses['american'] = document.getElementById("american");
	cheeses['none'] = document.getElementById("nocheese");

	$('input[name=cheese]').change(function () {
		event.preventDefault();

		console.log("change");

		if (cheeses['provolone'].checked == true) {
			scene.add(myObjs['provolone']);
			console.log("provolone checked");
		} else if (cheeses['provolone'].checked == false) {
			scene.remove(myObjs['provolone']);
			console.log("provolone not checked");
		} else {
			console.log("error");
		}

		if (cheeses['cheddar'].checked == true) {

			scene.add(myObjs['cheddar']);
			console.log("cheddar checked");
		} else if (cheeses['cheddar'].checked == false) {
			scene.remove(myObjs['cheddar']);
			console.log("cheddar not checked");
			} else {
				console.log("error");
			};

		if (cheeses['pepperjack'].checked == true) {

			scene.add(myObjs['pepperjack']);
			console.log("pepperjack checked");
		} else if (cheeses['pepperjack'].checked == false) {
			scene.remove(myObjs['pepperjack']);
			console.log("pepperjack not checked");
		} else {
			console.log("error");
		};

		if (cheeses['swiss'].checked == true) {

			scene.add(myObjs['swiss']);
			console.log("swiss checked");
		} else if (cheeses['swiss'].checked == false) {
			scene.remove(myObjs['swiss']);
			console.log("swiss not checked");
		} else {
			console.log("error");
		};

		if (cheeses['american'].checked == true) {

			scene.add(myObjs['american']);
			console.log("american checked");
		} else if (cheeses['american'].checked == false) {
			scene.remove(myObjs['american']);
			console.log("american not checked");
		} else {
			console.log("error");
		};

		if (cheeses['none'].checked == true) {
			scene.remove(myObjs['american']);
			scene.remove(myObjs['swiss']);
			scene.remove(myObjs['pepperjack']);
			scene.remove(myObjs['cheddar']);
			scene.remove(myObjs['provolone']);
			console.log("no cheese checked");
		} else if (cheeses['american'].checked == false) {
		} else {
			console.log("error");
		};

	})

	
	// VEG

	var veggies = [];

	veggies['lettuce'] = document.getElementById("lettuce");
	veggies['spinach'] = document.getElementById("spinach");
	veggies['tomato'] = document.getElementById("tomato");
	veggies['onion'] = document.getElementById("onion");
	veggies['greenp'] = document.getElementById("greenp");
	veggies['yellowp'] = document.getElementById("yellowp");
	veggies['jalapenos'] = document.getElementById("jalapenos");
	veggies['olive'] = document.getElementById("olive");

	$('input[name=veg]').change(function () {
		event.preventDefault();

		if (veggies['lettuce'].checked == true) {
			scene.add(myObjs['lettuce']);
		} else if (veggies['lettuce'].checked == false) {
			scene.remove(myObjs['lettuce']);
		} else {
			console.log("error");
		};

		if (veggies['spinach'].checked == true) {
			scene.add(myObjs['spinach']);
		} else if (veggies['spinach'].checked == false) {
			scene.remove(myObjs['spinach']);
		} else {
			console.log("error");
		};

		if (veggies['tomato'].checked == true) {
			scene.add(myObjs['tomato']);
		} else if (veggies['tomato'].checked == false) {
			scene.remove(myObjs['tomato']);
		} else {
			console.log("error");
		};

		if (veggies['onion'].checked == true) {
			scene.add(myObjs['onion']);
		} else if (veggies['onion'].checked == false) {
			scene.remove(myObjs['onion']);
		} else {
			console.log("error");
		};

		if (veggies['greenp'].checked == true) {
			scene.add(myObjs['green_pepper']);
		} else if (veggies['greenp'].checked == false) {
			scene.remove(myObjs['green_pepper']);
		} else {
			console.log("error");
		};

		if (veggies['yellowp'].checked == true) {
			scene.add(myObjs['banana_pepper']);
		} else if (veggies['yellowp'].checked == false) {
			scene.remove(myObjs['banana_pepper']);
		} else {
			console.log("error");
		};

		if (veggies['jalapenos'].checked == true) {
			scene.add(myObjs['jalapenos']);
		} else if (veggies['jalapenos'].checked == false) {
			scene.remove(myObjs['jalapenos']);
		} else {
			console.log("error");
		};

		if (veggies['olive'].checked == true) {
			scene.add(myObjs['olives']);
		} else if (veggies['olive'].checked == false) {
			scene.remove(myObjs['olives']);
		} else {
			console.log("error");
		};

	})

	// EXTRAS

	var warned = false;

	var extraz = [];

	extraz['bacon'] = document.getElementById("bacon");
	extraz['avo'] = document.getElementById("avo");
	extraz['mayo'] = document.getElementById("mayo");
	extraz['mustard'] = document.getElementById("mustard");
	extraz['ranch'] = document.getElementById("ranch");
	extraz['chipotle'] = document.getElementById("chipotle");
	extraz['oil'] = document.getElementById("oil");

	$('input[name=xtra]').change(function () {
		event.preventDefault();

		if (extraz['bacon'].checked == true) {
			scene.add(myObjs['bacon']);
		} else if (extraz['bacon'].checked == false) {
			scene.remove(myObjs['bacon']);
		} else {
			console.log("error");
		};

		if (extraz['avo'].checked == true) {
			scene.add(myObjs['avocado']);
		} else if (extraz['avo'].checked == false) {
			scene.remove(myObjs['avocado']);
		} else {
			console.log("avo");
		};

		if (extraz['mayo'].checked == true) {
			
			if(warned == false){
				alert("Hey! Some condiments may not show up in the 3D view, but don't worry. They'll still be on your sandwich!")
				warned = true;
				console.log(warned);
			} else if (warned == true){
				console.log("theyve been warned") 
			}else {
				console.log("err")
			};

		} else if (extraz['mayo'].checked == false) {
			console.log("mayo not checked");
		} else {
			console.log("error");
		};

		if (extraz['mustard'].checked == true) {
			if (warned == false) {
				alert("Hey! Some condiments may not show up in the 3D view, but don't worry. They'll still be on your sandwich!")
				warned = true;
				console.log(warned);
			} else if (warned == true) {
				console.log("theyve been warned")
			} else {
				console.log("err")
			};
		} else if (extraz['mustard'].checked == false) {
			console.log("mustard not checked");
		} else {
			console.log("error");
		};

		if (extraz['ranch'].checked == true) {
			if (warned == false) {
				alert("Hey! Some condiments may not show up in the 3D view, but don't worry. They'll still be on your sandwich!")
				warned = true;
				console.log(warned);
			} else if (warned == true) {
				console.log("theyve been warned")
			} else {
				console.log("err")
			};
		} else if (extraz['ranch'].checked == false) {
			console.log("ranch not checked");
		} else {
			console.log("error");
		};

		if (extraz['chipotle'].checked == true) {
			if (warned == false) {
				alert("Hey! Some condiments may not show up in the 3D view, but don't worry. They'll still be on your sandwich!")
				warned = true;
				console.log(warned);
			} else if (warned == true) {
				console.log("theyve been warned")
			} else {
				console.log("err")
			};
		} else if (extraz['chipotle'].checked == false) {
			console.log("chipotle not checked");
		} else {
			console.log("error");
		};

		if (extraz['oil'].checked == true) {
			if (warned == false) {
				alert("Hey! Some condiments may not show up in the 3D view, but don't worry. They'll still be on your sandwich!")
				warned = true;
				console.log(warned);
			} else if (warned == true) {
				console.log("theyve been warned")
			} else {
				console.log("err")
			};
		} else if (extraz['oil'].checked == false) {
			console.log("oil not checked");
		} else {
			console.log("error");
		};
	})


	
});