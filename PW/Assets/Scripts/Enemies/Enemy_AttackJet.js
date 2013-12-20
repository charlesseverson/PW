#pragma strict

class Enemy_AttackJet extends Enemy_Base
{

	function Update () 
	{	
		transform.Translate(Vector3.forward * (forwardSpeed * Time.deltaTime));
	}
}