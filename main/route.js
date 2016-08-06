let  commandMainPage= require('../commands/goto-main-page');

const defaultMapping = {
    "*": commandMainPage
};

let mapping = defaultMapping;
function route(input) {
    console.log(input);
    let command = mapping[input] || mapping['*'];
    console.log(command);
    console.log(command(input));
    let response = command(input);

    if (response.error) {
        return {
            text: response.error
        };
    }

    if (response.reset) {
        mapping = defaultMapping;
        return {
            text: response.text,
            rerun: true
        };
    }

    if (response.newMapping) {
        mapping = response.newMapping;
        return {
            text: response.text
        };
    }

    return {
        text: response.text
    };
}

// console.log(route(1));
// console.log(route(1));
// console.log(route(12345));
// console.log(route('12345'));
// console.log(route(2));
// console.log(route(2));
// console.log(route('ansh'));
// console.log(route('|:::||:||::::||:|::|::|::||::|:|'));
module.exports = route;