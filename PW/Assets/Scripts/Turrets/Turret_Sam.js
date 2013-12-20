#pragma strict

class Turret_Sam extends Turret_Base
{
	var myProjectile : GameObject;
	var reloadTime : float = 1f;
	var turnSpeed : float = 5f;

	var aim_Pan : Transform;
	var aim_Tilt : Transform;

	private var nextFireTime : float;

	function Start () 
	{

	}

	function Update () 
	{
		if(myTarget)
		{
			aim_Pan.LookAt(myTarget);
			aim_Pan.eulerAngles = Vector3(0, aim_Pan.eulerAngles.y, 0);

			
	
		}
	}

	



	function OnTriggerExit(other : Collider)
	{
		if(other.gameObject.transform == myTarget)
		{
			myTarget = null;
		}
	}

	function FireProjectile()
	{
		nextFireTime = Time.time+reloadTime;
		

	}
}