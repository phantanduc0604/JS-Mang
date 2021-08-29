//BT7: Sắp xếp tăng dần

/**
 * B1: Input
 * Num: biến trung gian

 * B2:
 * Khai báo các biến input
 * Sử dụng 2 vong lặp for để sắp xếp dữ liệu tăng dần
 * Giả sử phần tử đầu tiên trong mảng là giá trị nhỏ nhất trong mảng sau đó đem đi so sánh lần lượt các phần tử khác trong mảng. Nếu có giá trị mảng đầu tiên nhỏ hơn giá trị mảng so sánh thì hoản đổi vi trí 2 phần tử mảng
 *   for (var i = 0; i < numArray.length; i++) {
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[i] > numArray[j]) {
                Num = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = Num;
            }
        }
    }
 * B3:
 * Thể hiện kết quả lên UI
 */

function organizeArray() {
    var Num = 0;
    for (var i = 0; i < numArray.length; i++) {
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[i] > numArray[j]) {
                Num = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = Num;
            }
        }
    }

    document.getElementById("txtResult7").innerHTML = "Mảng sau khi sắp xếp là: " + numArray;
}