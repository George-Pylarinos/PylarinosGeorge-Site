document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById('cursor');
    var mouseX = 0, mouseY = 0;
    var posX = 0, posY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updatePosition() {
        posX += (mouseX - posX) * 0.1;
        posY += (mouseY - posY) * 0.1;

        cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});

