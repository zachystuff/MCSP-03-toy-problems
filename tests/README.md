# Testing Toy Problems

Generalized approach to testing toy problems.

 ## Process
 
1. Add the file we want to test as a script tag in specRunner.html
    - Ex: <script src='evenOccurence/evenOccurence.js'></script>
2. Open problems.test.js
3. Add a new describe block to the file
4. Write 3 - 5 failing tests
5. Open specRunner.html in browser
6. Make all tests pass
    
### Test structure
- All tests should be wrapped in a describe block. This makes sure that we don't end up with a big mess of tests.
- Name the describe block with the name of the function we would like to test.
 
```
describe('evenOccurence', () => {
    
});
```

- Each test in a describe block should test one thing.
- Each test should have a description of what it is testing.
```
describe('evenOccurence', () => {
  it('should return null if there is not an even occurence', () => {
    const result = evenOccurence([1,2,3,4,5]);
    expect(result).to.equal(null);
  });
  
  it('should return the first number that appears an even number of times', () => {
    const result = evenOccurence([1,2,3,4,5,1,2]);
    expect(result).to.equal(1);
  });
 
  ... 
});
```

### Other things to note

- To compare objects use .eql instead of .equal
- If you don't want one large test file feel free to create individual test files for each problem.
    - Make sure to also add the test file to specRunner.html
- For more reading on TDD see [here](https://airbrake.io/blog/sdlc/test-driven-development).