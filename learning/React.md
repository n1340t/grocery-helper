## Why bind this in react class

https://gist.github.com/fongandrew/f28245920a41788e084d77877e65f22f
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
NOTES: onClick = this.test means onClick = function test() {}, so whatever call onClick (in this case is window, global) will be the context of function test. However, class in JS are executed in strict mode so window will be undefined. If not strict mode (like define in function), window will be definded

```
function Dog() {
    this.name = 'Peter';
}
Dog.prototype.jump = function() { return this};
let dog = new Dog();
dog.jump() // Dog class
let jump1= dog.jump
jump1() // window
```

## Set other input value

We need to manually set value attribute of the input
Scenario we have input A and input B. If we want input B value is calculated from input A
