// Aquí puedes agregar más interactividad si lo necesitas.
// Por ahora, solo tenemos la estructura básica.

// Ejemplo de una función que cambia el color de fondo cuando se hace clic en un enlace.
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e0f7fa';  // Cambia el color de fondo al hacer clic en un enlace.
  });
});
