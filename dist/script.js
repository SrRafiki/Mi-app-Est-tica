// script.js — con soporte para diagramas y enunciados personalizados

document.addEventListener('DOMContentLoaded', function () {
  // ▶️ 1. Botón "Volver" con animación
  const backButtons = document.querySelectorAll('.btn-back');
  backButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.4s ease';
      setTimeout(() => window.location.href = 'index.html', 400);
    });
  });

  // ▶️ 2. Funcionalidad: Enunciado personalizado (por página)
  const customBtn = document.getElementById('btn-custom');
  const customForm = document.getElementById('custom-form');
  const customInput = document.getElementById('custom-statement');
  const customSaved = document.getElementById('custom-saved');
  const originalEnunc = document.querySelector('.problem-section.enunciado p:first-of-type');

  if (customBtn && customForm) {
    // Alternar formulario
    customBtn.addEventListener('click', () => {
      customForm.style.display = customForm.style.display === 'none' ? 'block' : 'none';
    });

    // Guardar enunciado personalizado
    document.getElementById('save-btn')?.addEventListener('click', () => {
      const stmt = customInput.value.trim();
      if (stmt) {
        // Guardar en localStorage con clave única por página
        const pageKey = 'custom_stmt_' + window.location.pathname;
        localStorage.setItem(pageKey, stmt);
        
        // Mostrar mensaje
        customSaved.style.display = 'block';
        customSaved.textContent = '✓ Enunciado guardado. Recarga la página para verlo aplicado.';
        
        // Opcional: actualizar en tiempo real
        if (originalEnunc) {
          originalEnunc.innerHTML = `<strong>Tú enunciado:</strong> ${stmt}`;
        }
      } else {
        alert('Por favor, escribe un enunciado.');
      }
    });

    // Cargar enunciado guardado al iniciar
    const saved = localStorage.getItem('custom_stmt_' + window.location.pathname);
    if (saved && originalEnunc) {
      originalEnunc.innerHTML = `<strong>Tú enunciado:</strong> ${saved}`;
    }
  }

  // ▶️ 3. Accesibilidad: Enter/Space en botones
  document.querySelectorAll('button, .btn').forEach(btn => {
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  console.log('✅ Estática - Proyecto con diagramas y enunciados personalizados');
});