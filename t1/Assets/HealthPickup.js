#pragma strict
var healthvalue : int;

function OnTriggerEnter(object: Collider){

Debug.Log("health pickup!!!!");

	if (object.gameObject.FindGameObjectWithTag("Player")){
	Destroy(this.gameObject);
	GameObject.Find("HealthBar").SendMessage ("ApplyHealthPickup", healthvalue);
	}

}