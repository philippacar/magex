// Example module exporting a merge function
function merge$3(obj1, obj2) {
    // Function logic to merge obj1 and obj2
    return { ...obj1, ...obj2 };
}

exports.merge = merge$3;
