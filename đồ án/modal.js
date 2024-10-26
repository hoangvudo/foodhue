
    const cards = document.querySelectorAll('.card');
    const productInput = document.getElementById('product');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const productTitle = card.querySelector('.card-title').innerText;
            productInput.value = productTitle; // Điền tên sản phẩm vào input
        });
    });

    // Xử lý sự kiện gửi form
    document.getElementById('purchaseForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Đặt hàng thành công!');
        // Ở đây bạn có thể xử lý dữ liệu từ form (ví dụ: gửi đến máy chủ)
        // Sau đó đóng modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('purchaseModal'));
        modal.hide();
    });
