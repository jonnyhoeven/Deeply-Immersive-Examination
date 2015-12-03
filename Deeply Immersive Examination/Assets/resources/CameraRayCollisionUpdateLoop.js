private var hit : RaycastHit;
private var target: GameObject;
private var ControlSelectionScript : ControlSelection;


function Update() { // checks with a raycast if we are looking at a controlselection object and calls it's highlight
    var fwd = transform.TransformDirection (Vector3.forward);
    if (Physics.Raycast (transform.position, fwd, hit)) {
        target = hit.collider.transform.gameObject;

        ControlSelectionScript = target.GetComponent(ControlSelection);
        ControlSelectionScript.Highlight();       
    }
}