
exports.min = function min (array) {
	if (Array.isArray(array) && array.length > 1) {
    	return Math.min(...array);
    }
    return 0;
}

exports.max = function max (array) {
	if (Array.isArray(array) && array.length > 1) {
    	return Math.max(...array);
    }
    return 0;
}


exports.avg = function avg (array) {
	if (Array.isArray(array) && array.length > 1) {
    	return array.reduce((sum, current) => sum + current, 0)/array.length;
    }
    return 0;
}
