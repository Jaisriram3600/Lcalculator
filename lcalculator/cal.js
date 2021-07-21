
var rand;
function calculate()
{

     rand= Math.round(Math.random()*100)+1;
   var char1=  (document.querySelector(".ip1").value).length;
   var char2 = (document.querySelector(".ip2").value).length;
   var add2 =rand;

   if(char1==0 || char2==0)
   {
       alert("Enter the name");
   }
   
   if(char1 >3 && char2 >3)
   {
   
   if(add2<=25)
{

    document.querySelector(".result").innerHTML="TOXIC ☢ BETTER BREAKUP";
    document.querySelector(".img2").src="lcalculator/cry.gif"
}
else if (add2>25 && add2<=50)
{
    document.querySelector(".result").innerHTML="NOT ENOUGH LOVE ,YOU GUYS STILL NEED TO LOVE MORE";
    document.querySelector(".result").style.backgroundColor="yellow";
    document.querySelector(".img2").src="lcalculator/panda.gif"
}
else if (add2>50 && add2<=75)
{
    document.querySelector(".result").innerHTML="MADE FOR EACH OTHER";
    document.querySelector(".result").style.backgroundColor="#ccff99";
    document.querySelector(".img2").src="lcalculator/dance.gif";

}
else if (add2>75 && add2>=100)
{
    document.querySelector(".result").innerHTML="YOU GUYS ARE ROMEO AND JULIET";
    document.querySelector(".result").style.backgroundColor="#66ff66";
    document.querySelector(".img2").src="lcalculator/run.gif"

}
}


}
