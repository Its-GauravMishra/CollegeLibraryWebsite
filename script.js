document.getElementById('logo').addEventListener('click', function () {
    this.style.transform = 'scale(2)';
    this.style.zIndex = '2';
});

document.getElementById('logo').addEventListener('mouseup', function () {
    this.style.transform = 'scale(1)';
    this.style.zIndex = '1';
});