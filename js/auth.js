function configurarVerContrasena(inputId, botonId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(botonId);
    
    if (passwordInput && toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleButton.innerText = '🙈';
            } else {
                passwordInput.type = 'password';
                toggleButton.innerText = '👁️';
            }
        });
    }
}

// Inicializar cuando cargue la página
document.addEventListener("DOMContentLoaded", () => {
    configurarVerContrasena('auth-password', 'auth-toggle-btn');
    
    // Lógica básica del tema para las vistas de Auth
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
            themeToggle.innerText = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
        themeToggle.innerText = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
});