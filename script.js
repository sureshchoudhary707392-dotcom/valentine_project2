// Toggle the profile menu
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}

// Make the NO button move away
function runAway() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate random positions within the screen boundaries
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Handle the YES click
function sayYes() {
    document.getElementById('askSection').classList.add('hidden');
    document.getElementById('thankYouSection').classList.remove('hidden');
    // Optional: Hide the menu button after she says yes
    document.querySelector('.menu-btn').style.display = 'none';
}
