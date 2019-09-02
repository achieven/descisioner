const fields = {
	browser : 'browser',
	amount  : 'amount',
	email   : 'email'
};

const booleanOperators = {
	AND : 'AND',
	OR  : 'OR'
};

const conditionOperators = {
	eq         : 'eq',
	gt 		   : 'gt',
	lt		   : 'lt',
	gte        : 'gte',
	lte        : 'lte',
	endsWith   : 'endsWith',
	startsWith : 'startsWith',
	any		   : 'any',
	every	   : 'every',
	first	   : 'first',
	last	   : 'last'
};

exports.fields = fields;
exports.booleanOperators = booleanOperators;
exports.conditionOperators = conditionOperators;