/**
 * B1: Sum
 * Sum biến tổng các số dương
 * B2:
 * Sủ dụng vòng lặp for để duyệt mảng sau, trong for sử dụng câu lệnh if để xét điều kiến giá trị từng phần tử trong mảng có lớn hơn 0, nếu lớn hơn 0 thì Sum = Sum + phần tử thoả mảng điều kiện
 * B3: 
 * Hiển thị kết quả lên UI
 */
function sumPositive(){
    var Sum = 0;
    for(var i = 0 ; i < numArray.length; i++){
        if(numArray[i] > 0){
            Sum+= numArray[i];
        }
    }
    document.getElementById("txtResult1").innerHTML = "Tổng số dương: " + Sum;
}
