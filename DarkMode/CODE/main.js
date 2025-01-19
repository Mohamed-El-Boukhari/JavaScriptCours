const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Désactiver le mode sombre';
        darkModeToggle.classList.add('dark-mode');
    } else {
        darkModeToggle.textContent = 'Activer le mode sombre';
        darkModeToggle.classList.remove('dark-mode');
    }
});
document.getElementById('form').onsubmit = function(e) {
    e.preventDefault();
    const pseudo = document.getElementById('pseudo').value;
    const email = document.getElementById('email').value;
    document.getElementById('contenu-formulaire').innerText = `${pseudo} ${email}`;
  };
  