//BT8: Tìm số nguyên tố

/**
 * B1: Input
 * index vị trị của số nguyên tố đầu tiên trong mảng
 * B2:
 * Khai báo các biến input
 * Lấy giá trị từng phần tử trong mảng kiểm tra
 * Nếu giá trị phần tử < 2 hoặc lặp từ 2 tới (giá trị phần tử-1), nếu trong khoảng này tồn tại số mà giá trị phần tử chia hết thì kết luận  phần tử không phải là số nguyên tố, ngược lại phần tử là số nguyên tố.
 * B3:
 * Thể hiện kết quả lên UI
 */

function checkInteger() {
    var index = -1, check = 0;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] == 2 || numArray[i] == 3) {
            index = i;
            break;
        } else if (numArray[i] > 2) {

            for (var j = 2; j <= numArray[i] / 2; j++) {
                if (numArray[i] % j === 0) {
                    check = 1;
                    break;
                } else {
                    check = 0;

                }
            }
            if (check === 0) {
                index = i;
                break;
            }
        }


    }


    if (index != -1) {
        document.getElementById("txtResult8").innerHTML = "Số nguyên tố đầu tiền trong mảng là: " + numArray[index];
    } else {
        document.getElementById("txtResult8").innerHTML = "Trong mảng không có số nguyên tố" + index;
    }

}