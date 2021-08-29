//BT6: Đổi chổ

/**
 * B1: Input
 * countPos, countNeg lần lượt chứa số lượng các số dương, âm 
 * B2:
 * Khai báo các biến input
 * Lập hàm để đếm số lượng số dương, âm sau đó so sánh 2 số lượng với nhau
 * B3:
 * Thể hiện kết quả lên UI
 */

function Count() {
    var countPos = 0, countNeg = 0;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            countPos++;
        } else {
            countNeg++;
        }
    }
    if (countPos > countNeg) {
        document.getElementById("txtResult10").innerHTML = "Số dương > Số âm";
    } else if (countPos < countNeg) {
        document.getElementById("txtResult10").innerHTML = "Số dương < Số âm";
    } else {
        document.getElementById("txtResult10").innerHTML = "Số dương = Số âm";
    }



}