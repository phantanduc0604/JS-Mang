/**
 * B1: num
 * num biến đếm số dương
 * B2:
 * Sủ dụng vòng lặp for để duyệt mảng sau, trong for sử dụng câu lệnh if để xét điều kiến giá trị từng phần tử trong mảng có lớn hơn 0, nếu lớn hơn 0 tăng biến điếm num lên 1 đơn vị
 * B3: 
 * Hiển thị kết quả lên UI
 */
function numPositive(){
    var num = 0;
    for(var i = 0 ; i < numArray.length; i++){
        if(numArray[i] > 0){
            num++;
        }
    }
    document.getElementById("txtResult2").innerHTML = "Số dương: " + num;
}