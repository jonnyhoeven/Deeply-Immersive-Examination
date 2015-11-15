var hit : RaycastHit;
var target: GameObject;
var linkToScriptB : ControlSelection;


function Update() {
    var fwd = transform.TransformDirection (Vector3.forward);
    if (Physics.Raycast (transform.position, fwd, hit)) {
        target = hit.collider.transform.gameObject;

        linkToScriptB = target.GetComponent(ControlSelection);
        linkToScriptB.Highlite();
        
    }
}