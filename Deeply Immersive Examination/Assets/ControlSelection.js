var selectiontime = 0.0;
var linkToScriptB : MoveNext;
var soundplayed: boolean;
var timelastact = 0.0;
var iamselected: boolean;
var myrenderer : Renderer;
var colorStart : Color = Color.white;
var colorEnd : Color = Color.green;
var duration : float = 1.0;
var rend: Renderer;


function Start() {
    rend = GetComponent.<Renderer>();
}


function Update(){
    var lerp: float = Mathf.PingPong(Time.time, duration) / duration;

    if (iamselected) {
        rend.material.color = Color.blue; //Color.Lerp(colorStart, colorEnd, lerp);
    }
    else{
        rend.material.color = Color.white;
        }
    }


function Highlite () {
    
    if (iamselected) {
        print("Select timer" + (Time.time - timelastact));
 
        if ((Time.time - timelastact) > selectiontime) {
         // move to next question
            print("done")       ;  
            rend.material.color = Color.red;
 
            //            linkToScriptB.MoveOn();
            iamselected = false;
        }

    }else{
        print("Start timer");
        timelastact = Time.time;
        iamselected = true;
    }
    
}
