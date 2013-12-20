import Pathfinding;

class Enemy_GroundUnit extends Enemy_Base
{
	var tankTurret : Transform;
	var tankBody : Transform;


	function Start()
	{
		targetPosition = GameObject.FindWithTag("GroundTargetObject").transform.position;
		GetNewPath();
	}

	
	}

	
}