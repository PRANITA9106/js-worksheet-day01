# JS-worksheet-day01
Pre placement prep

Related Topic Questions

**Section 1**

Dynamic vs Static typing 

Compare and contrast the behavior of dynamic typing in JavaScript with the type coercion mechanism. Provide an example demonstrating both.

-->Dyanmic typing allows us reassign the variable with any datatype it may differ from the datatype used to initializ the variable.
Whereas type coersion is the process that converts the datatype while performing some operation on the value stored in the variable


**Section 2**

String Concatenation and Type Coercion

Discuss how type coercion differs in equality checks (== vs. ===). Provide an example.

-->While comparing using == (loose equality operator) type coersion is performed before checking the values, whereas, while comparing using === (strict equality operator) type coersion is not performed.


**Section 3**

Functions: Declarative, Expression, Anonymous, Arrow

How do arrow functions differ from function expressions in terms of scope and this behavior? Provide an example.

-->Function expression has access to the scope of object or class where it is called and this keyword can access the current instance and properties of object where operations are being performed dynamically.However, when it comes to arrow functions the scope is limited to the arguments passed and the lexical scope and this keyword can also access only the arguments of the function.


**Section 4**

Methods: Function vs. Arrow Function and this

Discuss the pros and cons of arrow functions vs. regular functions when used as methods.

--> Arrow function are useful when method has compact short and simple definition.Arrow function increase the readibilty of code. As, Arrow functions are anonymous it is diffcult to debug.While defining complex methods like constructor regular function are preferred.


**Section 5**

Global Execution Context and Functional Execution Context with Call Stacks

How does this behave differently in the global execution context compared to FEC?

--> this keyword refers to current 












