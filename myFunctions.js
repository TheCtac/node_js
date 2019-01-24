module.exports.getToday = function () {
    return 'today - ' + Date();
};

module.exports.someValue = 666;

module.exports.myCalc = function(a, b, c) {
    return `${a} ${c} ${b} = ${a * b}`;
};

module.exports.objBrow = function(obj, space) {
  if (space === undefined) {
	    var space = '&nbsp';
  }
  if (t === undefined) {
      var t = "<div style='text-align:left;'>";
  }
  for (key in obj){
	  t = t + space + key + (typeof obj[key] == 'object' ? ' ' + obj[key]+' -> ' : ' = '+obj[key]) + '<br>' ;
    if (typeof obj[key] == 'object') {
		    t = t + objBrow( obj[key], space + '&nbsp&nbsp&nbsp' );
    };
  }
  t = t + '</div>';
  return t;
}
