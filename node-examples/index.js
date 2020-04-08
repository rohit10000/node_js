var rect = require('./rectangle');

// var rect = function(x, y, callback) {
// 	if(x<=0 || y<=0){
// 		setTimeout(function(){
// 			return callback(new Error("Dimension not correct."), null);
// 		}, 
// 			2000);
// 	}
// 	else{
// 		setTimeout(function(){
// 			return callback(null,
// 				{
// 					perimeter: function(){
// 						return 2*(x+y);
// 					},
// 					area: function() {
// 						return x*y;
// 					}
// 				});
// 		},  
// 			2000);
// 	}
// }

function solveRect(l, b){
	
	rect(l, b, function(err, rectangle){
		if(err){
			console.log("ERROR: ", err.message);
		}
		else{
			console.log("The area of the rectangle: " + rectangle.area());
			console.log("The perimeter of the rectangle:  " + rectangle.perimeter());
		}
	});
	console.log("This statement is after the call to rect()");
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);