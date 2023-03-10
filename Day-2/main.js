// Các biến toàn cục để theo dõi trạng thái của bàn cờ
var board = document.getElementById("board");
var pieces = [];

// Hàm thêm quân cờ mới vào bàn cờ
function addPiece(x, y, color) {
    // Tạo một div mới để đại diện cho quân cờ
    var piece = document.createElement("div");
    piece.className = "piece";
    piece.style.backgroundColor = color;

    // Đặt vị trí của quân cờ
    piece.style.left = x + "px";
    piece.style.top = y + "px";

    // Thêm quân cờ vào bàn cờ
    board.appendChild(piece);

    // Lưu trữ quân cờ vào mảng pieces để có thể thao tác về sau
    pieces.push(piece);
}

// Sử dụng hàm để thêm một quân cờ đỏ vào vị trí (100, 100)
addPiece(100, 100, "red");