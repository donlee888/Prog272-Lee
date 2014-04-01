var MyObject = (function (){

function MyObject (){
console.log("MyObject Called!");
}

MyObject.prototype.addMultiplySubtract = function (){
return 10;
};

MyObject.prototype.feetToMiles = function (){
return 5280;
};

MyObject.prototype.feetToMiles = function (miles){
return (this.feetToMiles()* miles);
};

MyObject.prototype.squareRoot = function (number){
return (number*number);
};	

return MyObject;

})();

exports.myObject = new MyObject();