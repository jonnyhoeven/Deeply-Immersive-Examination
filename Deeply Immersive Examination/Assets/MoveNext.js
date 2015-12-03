
// Speed in units per sec.
var speed: float;
var target;

function MoveOn()
{

        target = transform.position + Vector3(14,0,0) ;
        transform.position = Vector3.MoveTowards(transform.position, target, 10);       

}