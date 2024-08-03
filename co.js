const condition = vega.isArray(val.condition) ? val.condition.map(conditionalSignalRefOrValue) : conditionalSignalRefOrValue(val.condition);
