// import { uppercaseString, lowercaseString } from './exporting.js';
// //  Currently throws this error: (node:13476) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

// uppercaseString("hello");
// lowercaseString("WORLD!");

import * as stringFunctions from "./string_functions.js";
//  Currently throws this error: (node:13476) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//  Importing default
// In the last challenge, you learned about export default and its uses. 
// To import a default export, you need to use a different import syntax. 
// In the following example, add is the default export of the math_functions.js file. Here is how to import it:
import subtract from "./math_functions.js";

subtract(7,4);