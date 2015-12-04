#pragma strict

import System.IO;
var fileName = "/resources/QuestionData.txt";

//todo create questionair

function Start () {
    var sr = new StreamReader(Application.dataPath + "/" + fileName);
    var fileContents = sr.ReadToEnd();
    sr.Close();
 
    var Questions = fileContents.Split("\n"[0]); // split on every new line
    for (line in Questions) {
        var QItem = line.Split("|"[0]); // split on |
    }
}


function Update () {

}