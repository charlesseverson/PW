#pragma strict

class Turret_Cannon extends Turret_Base
{
	var myProjectile : GameObject;
	var reloadTime : float = 1f;

	private var nextFireTime : float;
	private var nextMoveTime : float;




	function Update () 
	{
		if(myTarget)
		{
			if(Time.time >= nextMoveTime)
			{
				CalculateAimPosition(myTarget.position);
				turretBall.rotation = Quaternion.Lerp(turretBall.rotation, desiredRotation, Time.deltaTime*turnSpeed);
			}
			
	
		}
	}

	function OnTriggerEnter(other : Collider)
	{
		if(other.gameObject.tag == "Ground Enemy")
		{
			nextFireTime = Time.time+(reloadTime*.5);
			myTarget = other.gameObject.transform;
		}
	}


	function CalculateAimError()
	{
		aimError = Random.Range(-errorAmount, errorAmount);	
	}


	}
}