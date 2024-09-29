// Hàm để kiểm tra hình ảnh có nằm trong viewport hay không
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Hàm để thêm lớp visible cho hình ảnh khi chúng nằm trong viewport
function handleScroll() {
    const images = document.querySelectorAll('.hobbies-image figure'); // Chọn tất cả hình ảnh trong phần Hobbies

    images.forEach(image => {
        if (isElementInViewport(image)) {
            image.classList.add('visible'); // Thêm lớp visible
        }
    });
}

// Thêm sự kiện scroll
window.addEventListener('scroll', handleScroll);

// Gọi hàm để kiểm tra khi tải trang
document.addEventListener('DOMContentLoaded', handleScroll);
