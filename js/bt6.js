//BT6: Đổi chổ

/**
 * B1: Input
 * Num: biến trung gian
 * local1, local2 2 giá trị lấy được trên UI
 * B2:
 * Khai báo các biến input
 * Ngay sau khi lấy giá trị từ UI, kiểm tra biến local1,2 chỉ cần 1 trong 2 có giá trị lớn hơn độ dài mảng (numArray.length) thì bắt ngừoi dùng nhập lại
 * Nếu local1,2 thoả mản độ dài mảng (numArray.length) sử dụng công thức:
 * 
 *     Num = numArray[local1];
 *     numArray[local1] = numArray[local2];
 *     numArray[local2] = Num;
 * B3:
 * Thể hiện kết quả lên UI
 */

function changeIndex() {
    var Num = 0, local1, local2;
    local1 = parseInt(document.getElementById("indexLocal1").value);
    local2 = parseInt(document.getElementById("indexLocal2").value);


    if (local1 > numArray.length || local2 > numArray.length) {
        document.getElementById("txtResult6").innerHTML = "Vui lòng nhập lại vị trí";
    } else {
        Num = numArray[local1];
        numArray[local1] = numArray[local2];
        numArray[local2] = Num;
        document.getElementById("txtResult6").innerHTML = "Mảng sau khi đổi là: " + numArray;
    }


}