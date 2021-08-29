//BT6: Đổi chổ

/**
 * B1: Inoput
 * countInterge đếm số nguyên 
 * B2:
 * Khai báo các biến input
 * Lập hàm để thêm giá trị từ input vào trong mảng integerArray[]
 * Dùng phương thức Number.isInteger() để kiểm tra số nguyên, nếu đúng thì tăng countInterge lên 1 đơn vị
 * B3:
 * Thể hiện kết quả lên UI
 */
//Hàm thêm giá trị vào mảng từ input
 var integerArray = [];
 function addInteger() {
     integerArray.push(parseFloat(document.getElementById("inputInteger").value));
     console.log(integerArray);
     document.getElementById("txtInteger").innerHTML = integerArray;
 }
 function countInteger() {
    var countInterge = 0;

    for (var i = 0; i < integerArray.length; i++) {
        if (Number.isInteger(integerArray[i])) {
            countInterge++;
        }
    } 
    document.getElementById("txtResult9").innerHTML = "Số nguyên: " + countInterge;
    



}