# How to split a karma test suite
This is an example of how to split a karma test suite without duplicating any information in the config files.

## Why split a test suite?
Often there is reason to split test suites in a project. 
One common use case is to have one unit test suite (stable, ultra-fast) and another one for focused integration, 
they are still low-level tests and basically asserts both that I integrate well with external web services, 
message-queues, etc (inherently unstable, quite fast). 

It’s a bad idea to mix both in one test suite for many reasons, 
one of which is that they fail for different reasons. 
The focused integration tests rarely fail because of bugs my team introduced.

## But now we have duplication!
Anyway now that we have to test suites we need two karma.conf.js files, most of which will be duplicated. 
Look at the following example, only the second entry of *files* will differ between test suites  
It' a good thing that this is not only static conifiguration, but real code. 
If we have code then we have to power to eliminate duplication.

```javascript
    
config.set({
    ...
    files: [
        'src'
        'unit-test/**/*.spec.js'
    ],
    
    // lots of other properties
    ...
})

```

## A solution
It is dead-simple:
extract what differs to karma-unit.conf.js, and karma-integration.conf.js. 
These are the entry-points and they just extract a function to build the specifics into the overwhelmingly common part. 
That’s what we’ll find in buildKarmaConf.js
Here from karma-integration.conf.js

```javascript
    ...
    let testFiles = 'integration-test/**/*.spec.js'

    let karmaConfObject = buildKarmaConf(testFiles)
    config.set(karmaConfObject);
    ...
```
 
In buildKarmaConf we have something like

```javascript
function buildKarmaConf (testFiles) {
    var sourceFiles = ['src']
    var allSourcesAndSomeTestFiles = sourceFiles.concat(testFiles)

    return {
        files: allSourcesAndSomeTestFiles,
        
        // lots of other properties
        ...
    }
}
```

Well you could use a environment variable and an if-statement instead of two *.conf.js files, but as in most of our code we have better alternatives (requiring less cyclomatic complexity), like what we're doing here - composing objects. 

## What if my situation is more complicated?
Just compose further using the full power of a programming language (OO, FP). It is unlikely that the limited framework is going to solve the problem very efficiently.

## What about protractor?
The exact same thing works



