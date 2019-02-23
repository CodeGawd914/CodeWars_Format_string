/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

*/

const list = [
  {name: 'Bart'},
  {name: 'Lisa'},
  {name: 'Maggie'}
]

 function join(list){
  let string = "";

    if (list === undefined) {
        return string;
    }
    for (var i = 0; i < list.length; i++) {
    // this loop runs through each index of the array. Each one is an Object
        if (i >= list.length-2) {
        string += list[i]["name"] + " & "
        } else {
        string += list[i]["name"] + ", ";

        }
    }
    // return the sting and then eliminates the whitespace 
  return string.slice(0, string.length-2).trim()
}
