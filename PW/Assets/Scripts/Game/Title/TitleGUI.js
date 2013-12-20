var customSkin:GUISkin;
function OnGUI () {
GUI.skin = customSkin;

// button width:
var buttonW:int = 100;
// button height:
var buttonH:int = 50;

//haflf of the Screen width:
var halfScreenW:float = Screen.width/2;
var halfScreenH:float = Screen.height/2;
//half of the button width:
var halfButtonW:float = buttonW/2;
var halfButtonH:float = buttonH/2;


if(GUI.Button(Rect(halfScreenW-halfButtonW,halfScreenH + halfScreenH /2,buttonW,buttonH),"Play game")) 
	{
		Application.LoadLevel("main");
	}
}