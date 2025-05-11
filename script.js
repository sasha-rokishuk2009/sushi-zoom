function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// === ЛАЙКИ ===
function toggleLike(button) {
    button.classList.toggle('liked');

    const sushiName = button.dataset.name;
    const liked = button.classList.contains('liked');

    // Зберігаємо стан у localStorage
    localStorage.setItem(`like-${sushiName}`, liked);
}

// === ВІДНОВЛЕННЯ ЛАЙКІВ ПІСЛЯ ПЕРЕЗАВАНТАЖЕННЯ ===
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        const sushiName = button.dataset.name;
        const isLiked = localStorage.getItem(`like-${sushiName}`) === 'true';
        if (isLiked) {
            button.classList.add('liked');
        }
    });
});