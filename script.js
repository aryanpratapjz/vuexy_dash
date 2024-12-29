document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('bg-purple-100'));
        item.classList.add('bg-purple-100');
    });
});