//TODO validate function in both classes, and maybe have them implement a common interface

class Rule {
    constructor (booleanOperator, conditions) {
        this.booleanOperator = booleanOperator;
        this.conditions = conditions.map(cond =>
           new Condition(cond.field, cond.operator, cond.value)
        );
    }

}

class Condition {
    constructor(field, operator, value) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }
}


module.exports = Rule;
