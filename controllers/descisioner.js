const constants = require('../constants/constants');
const Rule = require('../models/rule');

//TODO get from file
const rules = [
    {
        booleanOperator: constants.booleanOperators.AND,
        conditions: [
            {
                field: constants.fields.browser,
                operator: constants.conditionOperators.eq,
                value: 'chrome'
            },
            {
                field: constants.fields.amount,
                operator: constants.conditionOperators.gt,
                value: 500
            }
        ]
    },
    {
        conditions: [
            {
                field: constants.fields.email,
                operator: constants.conditionOperators.endsWith,
                value: 'gmail.com'
            }
        ]
    }
];

//TODO implement in Condition class
function validateCondition (order, condition) {
    let validationResult = false;
    switch (condition.operator) {
        case constants.conditionOperators.eq:
            validationResult = order[condition.field] === condition.value ;
            break;
        case constants.conditionOperators.gt:
            validationResult = order[condition.field] > condition.value;
            break;
        case constants.conditionOperators.lt:
            validationResult = order[condition.field] < condition.value;
            break;
        case constants.conditionOperators.gte:
            validationResult = order[condition.field] >= condition.value;
            break;
        case constants.conditionOperators.lte:
            validationResult = order[condition.field] <= condition.value;
            break;
        case constants.conditionOperators.endsWith:
            validationResult = order[condition.field].endsWith(condition.value);
            break;
        case constants.conditionOperators.startsWith:
            validationResult = order[condition.field].startsWith(condition.value);
            break;
        default:
            throw new Error("validateCondition - operator not found");
    }

    return validationResult;
}

//TODO implement in Rule class
function validateRule(order, rule) {
    let validationResult = false;
    if (1 === rule.conditions.length) {
        validationResult = validateCondition(order, rule.conditions[0]);
    } else {
        switch (rule.booleanOperator) {
            case constants.booleanOperators.AND:
                validationResult = validateCondition(order, rule.conditions[0]) && validateCondition(order, rule.conditions[1]);//TODO implement with every
                break;
            case constants.booleanOperators.OR:
                validationResult = validateCondition(order, rule.conditions[0]) || validateCondition(order, rule.conditions[1]);//TODO implement with some
                break;
            default:
                throw new Error("validateRule - booleanOperator not found");

        }
    }

    return validationResult;
};

module.exports = (order)  => {
    return rules.some((r) => {
        let rule = new Rule(r.booleanOperator, r.conditions);
        return validateRule(order, rule);
    });
};