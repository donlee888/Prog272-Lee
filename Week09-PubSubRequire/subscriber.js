var pubSub = {
        publisher: null,
        subscriber: null,
        init: function()
        {
            this.publisher = new pubSub.publisher();
            this.subscriber = new pubSub.subscriber();
        }
    };

pubSub.subscriber = ( function()
{
    function subscriber()
    {
        $.topic( "addition" ).subscribe( add );
        $.topic( "multiplication" ).subscribe( multiply );
        $.topic( "subtraction" ).subscribe( subtract );
    }
    
    function add( number )
    {
        number.answer( parseInt( number.num1 ) + parseInt( number.num2 ) );
    }
    
    function multiply( number )
    {
        number.answer( number.num1 * number.num2 );
    }
    
    function subtract( number )
    {
        number.answer( number.num1 - number.num2 );
    }
    
    return subscriber;
    
}() );