import Pathfinding;


var targetPosition : Vector3; 
var controller : CharacterController; 
var nextWaypointDistance : float = 3.0; 
private var currentWaypoint : int = 0; 

function Start()
{
	targetPosition = GameObject.FindWithTag("GroundTargetObject").transform.position;
	GetNewPath();
}

}

function FixedUpdate()
{

	
    if (Vector3.Distance (transform.position,path.vectorPath[currentWaypoint]) < nextWaypointDistance) 
    {
        currentWaypoint++; 
    }
}