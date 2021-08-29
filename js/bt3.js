/**
 * B1: numMin
 * numMin biến chứa số nhỏ nhất
 * B2:
 * Giả sử numArray[0] có giá trị nhỏ nhất trong mảng,numArray[0] gán giá trị cho biến numMin
 * Khởi tạo hàm duyệt mảng numArray sau đó dùng lênh if để so sánh numMin với các phần tử trong mảng, nếu giá trị phần tử nào nhỏ hơn numMin thì gán giá trị phần tử đó cho numMin
 * B3: 
 * Hiển thị kết quả lên UI
 */
function numberMin(){
    var numMin = numArray[0];
    for(var i = 0 ; i < numArray.length; i++){
        if(numMin >  numArray[i]){
            numMin = numArray[i];
        }
    }
    document.getElementById("txtResult3").innerHTML = "Số nhỏ nhất: " + numMin;
}