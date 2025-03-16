/**
 * EXAMPLE to use CALL, APPLY & BIND
 * call Method: Invokes a function immediately, allowing you to specify the this context and pass arguments individually.
 * apply Method: Similar to call, but arguments are passed as an array.
 * bind Method: Returns a new function with a specified this context and initial arguments, which can be invoked later.
 * @author Maheen Nasir 
 */


/**
 * Represents a person with a first and second name.
 * @type {{first: string, second: string, getName: function(): void}}
 */
let nameObj = {
    first: 'Maheen',
    second: 'Nasir',
    /**
     * Logs the full name to the console.
     */
    getName: function () {
        console.log(this.first, this.second);
    }
};

nameObj.getName();

/************************************************************************************** */

/**
 * Represents a person with a first and second name.
 * @type {{first: string, second: string}}
 */
let nameObj1 = {
    first: 'Maheen',
    second: 'Nasir',
};

/**
 * Represents another person with a first and second name.
 * @type {{first: string, second: string}}
 */
let nameObj2 = {
    first: 'Amir',
    second: 'Khan',
};

/**
 * Logs the full name along with location details to the console.
 * @param {string} city - The city name.
 * @param {string} state - The state name.
 * @param {string} country - The country name.
 */
function getName(city, state, country) {
    console.log(this.first, this.second, " from ", city, " state ", state, " country ", country);
}

getName.call(nameObj1, 'Lahore', 'Punjab', 'Pakistan');
getName.call(nameObj2, 'Karachi', 'Sindh', 'Pak');


/************************************************************************************** */


/**
 * Represents a person with a first and second name.
 * @type {{first: string, second: string}}
 */
let nameObj3 = {
    first: 'Maheen',
    second: 'Nasir',
};

/**
 * Represents another person with a first and second name.
 * @type {{first: string, second: string}}
 */
let nameObj4 = {
    first: 'Amir',
    second: 'Khan',
};

getName.apply(nameObj3, ['Lahore', 'Punjab', 'Pakistan']);
getName.apply(nameObj4, ['Karachi', 'Sindh', 'Pak']);



/************************************************************************************** */

/**
 * Represents a person with a first and second name.
 * @type {{first: string, second: string}}
 */
let nameObj5 = {
    first: 'Maheen',
    second: 'Nasir',
};

/**
 * Represents another person with a first and second name.
 * @type {{first: string, second: string}}
 */
let nameObj6 = {
    first: 'Amir',
    second: 'Khan',
};

let myName = getName.bind(nameObj5, 'Lahore', 'Punjab', 'Pakistan');
let myName2 = getName.bind(nameObj6, 'Karachi', 'Sindh', 'Pak');

console.log("myName-> ", myName);
myName();
myName2();