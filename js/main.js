var numArray = [];
function addArray() {
    numArray.push(parseInt(document.getElementById("inputArray").value));
    console.log(numArray);
    document.getElementById("txtArray").innerHTML = numArray;
}
