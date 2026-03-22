// JavaScript Document
// 1. Efecto de lluvia de flores constante
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Puedes usar '🌻', '✨', o alternar entre ellos
    const items = ['🌻', '✨', '💛'];
    particle.innerHTML = items[Math.floor(Math.random() * items.length)];
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-20px'; // Empieza justo arriba
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
    particle.style.opacity = Math.random() * 0.5 + 0.5; // Variar opacidad
    
    // Velocidad de caída aleatoria (entre 3s y 6s)
    particle.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    document.body.appendChild(particle);

    // Borrar la partícula después de que caiga para no saturar la PC
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Crear una partícula cada 200ms
setInterval(createParticle, 200);


// 2. Efecto interactivo al pasar el mouse por "Vianey"
const nameElement = document.getElementById('Vianey');

nameElement.addEventListener('mouseover', () => {
    // Iluminar el fondo sutilmente
    document.body.style.background = 'radial-gradient(circle at center, #2a4f2a 0%, #0a0a0a 100%)';
    // Hacer el nombre un poco más grande y con más glow
    nameElement.style.transform = 'scale(1.05)';
    nameElement.style.filter = 'drop-shadow(0 0 25px rgba(255, 223, 0, 0.9))';
});

nameElement.addEventListener('mouseout', () => {
    // Volver al fondo original
    document.body.style.background = 'var(--dark-garden)';
    // Volver el nombre a su estado original
    nameElement.style.transform = 'scale(1)';
    nameElement.style.filter = 'drop-shadow(0 0 15px rgba(255, 223, 0, 0.6))';
});