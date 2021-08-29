/**
 * B1: Input
 * even_Num biến chứa số chẵn
 * B2:
 * Khởi tạo hàm duyệt mảng đếm các só chắn trong magnr dùng câu lệnh if để lấy giá trị số chẵn sau đó gán cho biến even_Num
 * B3: 
 * Hiển thị kết quả lên UI
 * 
 */
function evenNum() {
    var even_Num = -1;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            even_Num = numArray[i];
        }
    }
    
    document.getElementById("txtResult5").innerHTML = "Số chẵn cuối cùng: " + even_Num;
}