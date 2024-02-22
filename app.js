function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  
                  //... operator turns input into array
  const myFilterOutOdds = (...arguments) => arguments.filter(returnValue => returnValue % 2 === 0) 
                                                //.filter filters through array
  
  //Write a function called findMin that accept a variable number of arguments and returns the smallest argument
                                //Math.min returns the value with the lowest number
  const findMin = (...arguments) => Math.min(...arguments) //turn inputs into array using Spread Operator
  
  //Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
  
  ({a:1, b:2}, {c:3, d:4})
  
  const myMergeObjects = (objectOne, objectTwo) => ({...objectOne, ...objectTwo}) //The Spread Operator can be used to copy arrays and obejcts (but only one layer deep. Nested items will not be copied). In this case copy and combine
  
  //Write a function called doubleAndReturnArgs which accepts an array and a variablenumber of arguments. The function should return a new array with the original array values and all of the additional arguments doubled
  
                              //Arrow function that accepts an array and undetermined amount of additional values
  const myDoubleAndReturnArgs = (array, ...arguments) => [...array, ...arguments.map(value => value *2)]
                                                        //new array that returns the original array plus....
                                                        //a .map of arguments * 2. (.map creates a new array populated with the results of calling a provided function on every element in the calling array)
  
  
  
  //I will have to come back to this and work on it more because it is over my head. I understand it but had no chance of writing it unaided yet
  //I was able to simplify some of the code from the answer keys and do understand what I'm doing
  
  /** remove a random element in the items array
  and return a new array without that item. */
  
  const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);          
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => [...array1, ...array2];
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, value) => {
    let newObj = { ...obj }
    newObj[key] = value;
    return newObj;
  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key] //same logic as above just removing the key from the object here instead of adding a value to it
    return newObj;
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 }) 
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }
  