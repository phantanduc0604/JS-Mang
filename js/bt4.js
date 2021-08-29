/**
 * B1: Input
 * numPositive biến trung gian chứa số nguyên dương
 * arrayPositive mảng chứa các số nguyên dương
 * B2:
 * Khởi tạo hàm duyệt mảng numArray để lấy các giá trị số nguyên dương vào trong mảng arrayPositive sau đó dùng hàm để lấy giá trị nhỏ nhất trong mảng arrayPositive
 * B3: 
 * Hiển thị kết quả lên UI
 * 
 */
function minPositive() {
    var numPositive;
    var arrayPositive = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            arrayPositive.push(numArray[i]);
        }
    }
    if (arrayPositive[0] == NaN) {
        document.getElementById("txtResult4").innerHTML = "Không có số dương trong mảng ";
    } else {
        numPositive =arrayPositive[0];
        for (var i = 0; i < arrayPositive.length; i++) {
            if (numPositive > arrayPositive[i]) {
                numPositive = arrayPositive[i];
            }
        }

        document.getElementById("txtResult4").innerHTML = "Số dương nhỏ nhất trong mảng: " + numPositive;
    }

}