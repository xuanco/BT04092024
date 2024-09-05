const squareArray = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
};

// Hàm xử lý khi người dùng nhấn nút
function calculateSquare() {
    // Lấy giá trị từ input và chuyển thành mảng số nguyên
    const input = document.getElementById('numbers').value;
    const numberArray = input.split(',').map(Number);

    // Gọi hàm squareArray để tính bình phương
    const squaredArray = squareArray(numberArray);

    // Hiển thị kết quả
    document.getElementById('result').innerText = squaredArray.join(', ');
}