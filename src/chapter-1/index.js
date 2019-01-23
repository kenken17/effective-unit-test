const TEMPLATE = {};

TEMPLATE.parse = (template, arguments = null) => {
    if (arguments === null) return template;

    for (const key of Object.keys(arguments)) {
        template = template.replace('{' + key + '}', arguments[key]);            
    }
    
    return template;
};

module.exports = TEMPLATE;