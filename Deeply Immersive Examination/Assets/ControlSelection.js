var selectiontime = 0.0;
var linkToScriptB : MoveNext;
var soundplayed: boolean;
var timelastact = 0.0;


function Start() {
    soundplayed = false;
}


function Update(){
    if (selectiontime >0) {
      //  selectiontime = selectiontime - (Time.deltaTime);
       // print(selectiontime);
        transform.Rotate (0,selectiontime*6,0);

    }
 }

function Highlite () {
    timelastact = Time.time;
    selectiontime += Time.deltaTime * 1;
    if (selectiontime > 12) {
        print("Keuze gemaakt");

        if (!soundplayed) {
        
            soundplayed = true;
            var audio: AudioSource = GetComponent.<AudioSource>();
            audio.Play();
            audio.Play(44100);

        }

        transform.Rotate(0,0,0);
        linkToScriptB = GetComponent(MoveNext);
        linkToScriptB.MoveOn();
    } else {
        transform.Rotate (0,selectiontime* 4,0);
    }
}
