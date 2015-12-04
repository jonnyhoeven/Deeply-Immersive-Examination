
private var CurrentDuration = 0.0; // Duration of looking directly at the object
var IsSelected: boolean;  // Current visual state
var SelectionSpeed: float = 5.0; // speed in seconds before selection inverts
private var rend: Renderer; // our render object for interaction
var MaterialSelected: Material;
var MaterialDeselected: Material;


function Start() {
    // gets our renderobject to draw our interface selection color changes
    rend = GetComponent.<Renderer>();
}


function Update(){
    // We Always slowly decrease CurrentDuration to 0 by a factor 1, when we highlighted we increase by factor 2.
       if (CurrentDuration < 0) {
           CurrentDuration = 0.0;    // don't be negative
       }
       else {
           CurrentDuration = CurrentDuration - Time.deltaTime * 10;
       }
    
    if (CurrentDuration > SelectionSpeed) { // when we exceed our expected SelectionSpeed Standard we invert our selectionstate.
        InvertSelection();
        CurrentDuration = 0; // reset for our next inversion
    } 
}

function InvertSelection() {
    if (IsSelected) {
        print("DeSelection");  
        rend.material  = MaterialDeselected;
        IsSelected = false;
    }
    else {
        print("Selection");  
        rend.material = MaterialSelected;
        IsSelected = true;
    }
}

// this function gets called by CameraRayCollisionUpdateLoop when hitting a object containing this script.
function Highlight () {
    CurrentDuration = CurrentDuration + Time.deltaTime * 20; // increase CurrentDuration by factor 2 here
}
