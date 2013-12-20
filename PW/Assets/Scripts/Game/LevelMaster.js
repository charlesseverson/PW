#pragma strict

var AstarController : AstarPath;
var waveActive : boolean = false;
var spawnEnemies : boolean = false;

var respawnMaxBase : float = 10.0;
private var respawnMin : float = 3.0;
private var respawnMax : float = 10.0;
var respawnInterval : float = 2.5;
var enemyCount : int = 0;
private var lastSpawnTime : float = 0;

var placementLayerMask : LayerMask;
private var originalMat : Material;
private var lastHitObj : GameObject;
private var focusedPlane : PlacementPlane;
private var structureToUpgrade : Turret_Base;
private var upgradeStructure : GameObject;
private var upgradeCost : int;

function Start()
{
	structureIndex = 0;
	UpdateGUI();
	
	flyerSpawnPoints = new Transform[flyerSpawns.childCount];

	
	groundSpawnPoints = new Transform[groundSpawns.childCount];
	var g : int = 0;


	SetNextWave(); 
	StartNewWave(); 
	
}

function Update () 
{
	if(buildPanelOpen) 
	{	
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
	

		if(lastHitObj) 
			{
				lastHitObj.renderer.material = originalMat; 
				lastHitObj = null; 
			}
		}
}

