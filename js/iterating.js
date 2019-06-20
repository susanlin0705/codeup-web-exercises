(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names =["Susan", "Dane", "Alyssa","Watson"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The length of the names array is "+ names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("This is " + names[0] +" .");
    console.log("This is " + names[1] +" .");
    console.log("This is " + names[2] +" .");
    console.log("This is " + names[3] +" .");


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i= 0; i<names.length;i++){
        console.log("This name at index " + i + " is " + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (names) {
        console.log("Here is " + names + " .");
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //THIS WILL LIMIT IT
    // function first() {
    //     return names[0];
    // }



    // This is way won't limit the array!!
    function first(array){
        return array[0];
    }
    console.log("The name is "+ first(names));

    function second(array) {
        return array[1];
    }
    console.log("The name is "+ second(names));


    function last(array) {
        return array[array.length-1];
    }
    console.log("The name is "+ last(names));


})();