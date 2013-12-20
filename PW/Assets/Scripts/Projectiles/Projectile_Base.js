#pragma strict

var myExplosion : GameObject;

var myDamageAmount : float = 25;
var myDist : float;

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Air Enemy" || other.gameObject.tag == "Ground Enemy")
	{
		Explode();
	}
}