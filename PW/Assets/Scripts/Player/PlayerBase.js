#pragma strict

var levelMaster : LevelMaster;

function Start () 
{
	levelMaster = GameObject.FindWithTag("LevelMaster").GetComponent(LevelMaster);
}

function OnTriggerEnter (other : Collider)
{
	if(other.gameObject.tag == "Ground Enemy" || other.gameObject.tag == "Air Enemy")
	{

		levelMaster.UpdateGUI();
	}
}