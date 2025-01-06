function toCamelCase(obj) {
    const newObj = {};
    for (const key in obj) {
        const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        newObj[camelKey] = obj[key];
    }
    return newObj;
}

const snakeCaseObj = {
    "first_name": "John",
    "last_name": "Doe",
    "email_address": "john.doe@example.com"
};

const camelCaseObj = toCamelCase(snakeCaseObj);
console.log(camelCaseObj);
