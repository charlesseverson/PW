#pragma strict

var levelMaster : LevelMaster;
var smokeTrail : ParticleEmitter;

var maxHealth : float = 100;

function Awake() 
{
	levelMaster = GameObject.FindWithTag("LevelMaster").GetComponent(LevelMaster);
	

	health*= levelMaster.difficultyMultiplier;
	maxHealth*= levelMaster.difficultyMultiplier;	
}


