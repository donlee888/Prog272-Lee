pubSub.publisher = ( function()
{
    "use strict";
    
    function publisher()
    {
        $( "#input1" ).val( 3 );
        $( "#input2" ).val( 2 );
        
        $( "#addButton" ).on( "click", publishNumbers );
        $( "#multiplyButton" ).on( "click", publishNumbers );
        $( "#subtractButton" ).on( "click", publishNumbers );
    }
    
    var nums = function()
    {
        var num1 = $( "#num1" ).val();
        var num2 = $( "#num2" ).val();
        return{
            num1: num1,
            num2: num2,
            answer: function( result )
            {
                $( "#result" ).html( result );
            }
        };
    }
   
   function publishNumbers()
   {
  
       var pubName = "";
       
       switch( this.id )
       {
            case "addButton":
                pubName = "addition";
                break;
            case "multiplyButton":
                pubName = "multiplication";
                break;
            case "subtractButton":
                pubName = "subtraction";
                break;
            default:
                pubName = "";
                break;
       }
        $.topic( pubName ).publish( nums() );
   }
   
    return publisher;
}() );

$( document ).ready(function()
{
    pubSub.init();
});