#pragma strict

var MoveUp : KeyCode;
var MoveDown : KeyCode;
var MoveLeft : KeyCode;
var MoveRight : KeyCode;
var Speed : float = 10;
var playeranim : Animator;
function Start() {

 
playeranim = GetComponentInChildren(Animator);

}


function Update () {

if (Input.GetKey(MoveUp)){


playeranim.SetBool("up",true);
playeranim.SetBool("down",false);
playeranim.SetBool("left",false);
playeranim.SetBool("right",false);
rigidbody.velocity.z = Speed * Time.deltaTime;



}
else if (Input.GetKey(MoveDown)){
playeranim.SetBool("down",true);
playeranim.SetBool("up",false);
playeranim.SetBool("left",false);
playeranim.SetBool("right",false);
rigidbody.velocity.magnitude.z = Speed * Time.deltaTime;

}
else if (Input.GetKey(MoveLeft)){
playeranim.SetBool("left",true);
playeranim.SetBool("down",false);
playeranim.SetBool("up",false);
playeranim.SetBool("right",false);
rigidbody.velocity.x = Speed * Time.deltaTime;

}
else if (Input.GetKey(MoveRight)){
playeranim.SetBool("right",true);
playeranim.SetBool("down",false);
playeranim.SetBool("left",false);
playeranim.SetBool("up",false);
rigidbody.velocity.x = Speed * Time.deltaTime;
}

else{
rigidbody.velocity.z = 0;
rigidbody.velocity.x = 0;
playeranim.SetBool("up",false);
playeranim.SetBool("down",false);
playeranim.SetBool("left",false);
playeranim.SetBool("right",false);
}

}