module.exports = function(x, y, callback) {
	if(x<=0 || y<=0){
		setTimeout(function(){
			return callback(new Error("Dimension not correct."), null);
		}, 
			2000);
	}
	else{
		setTimeout(function(){
			return callback(null,
				{
					perimeter: function(){
						return 2*(x+y);
					},
					area: function() {
						return x*y;
					}
				});
		},  
			2000);
	}
};

