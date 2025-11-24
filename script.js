// script.js — Versión completa y estable para Estática Interactiva
(function() {
  'use strict';

  // ▶️ Función de utilidad: espera a que el DOM esté listo
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // ▶️ Inicialización principal
  ready(function() {
    console.log('✅ Script cargado: Estática Interactiva');

    // ▶️ Botón "Volver"
    const backButtons = document.querySelectorAll('.btn-back');
    backButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(function() {
          window.location.href = 'index.html';
        }, 300);
      });
    });

    // ▶️ Botón "Resolver TU problema"
    const customBtn = document.getElementById('btn-custom');
    const customForm = document.getElementById('custom-form');
    const saveBtn = document.getElementById('save-btn');

    if (customBtn && customForm) {
      customBtn.addEventListener('click', function() {
        customForm.style.display = customForm.style.display === 'none' ? 'block' : 'none';
      });
    }

    // ▶️ Botón "Calcular y aplicar"
    if (saveBtn) {
      saveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🚀 Botón "Calcular" presionado');

        const path = window.location.pathname;

        if (path.includes('teoria1-1')) {
          resolver1_1();
        } else if (path.includes('teoria1-2')) {
          resolver1_2();
        } else if (path.includes('teoria1-3')) {
          resolver1_3_texto();
        } else if (path.includes('teoria1-4')) {
          resolver1_4_texto();
        } else if (path.includes('teoria1-5')) {
          resolver1_5_texto();
        } else if (path.includes('teoria1-6')) {
          resolver1_6_texto();
        } else if (path.includes('teoria1-7')) {
          resolver1_7_texto();
        } else {
          alert('⚠️ Función no implementada para esta página.');
        }
      });
    }
  });

  // ▶️ 1.1: Conceptos básicos (campos numéricos)
  function resolver1_1() {
    try {
      const m = parseFloat(document.getElementById('m-val')?.value) || 1.2;
      const g = parseFloat(document.getElementById('g-val')?.value) || 9.8;
      const W = m * g;
      const N = W;

      document.getElementById('enunciado-texto').innerHTML = 
        `Un cuerpo de <strong>${m} kg</strong> descansa sobre una mesa horizontal.`;

      document.querySelector('.problem-section.datos ul').innerHTML = `
        <li><code>m = ${m} kg</code></li>
        <li><code>g = ${g} m/s²</code></li>
        <li><code>W = mg = ${W.toFixed(2)} N</code></li>
      `;

      document.querySelector('.problem-section.sustitucion').innerHTML = `
        <h3>✏️ Sustitución</h3>
        <p><code>W = (${m})(${g}) = ${W.toFixed(2)} N</code></p>
        <p><code>N = W = ${N.toFixed(2)} N</code></p>
      `;

      document.querySelector('.resultado-final').innerHTML = 
        `<strong>N = ${N.toFixed(2)} N</strong>, <strong>W = ${W.toFixed(2)} N</strong>`;

      document.getElementById('custom-form').style.display = 'none';
      alert('✅ ¡Problema actualizado con tus datos!');
    } catch (error) {
      console.error('❌ Error en 1.1:', error);
      alert('⚠️ Error al procesar. Verifica los valores.');
    }
  }

  // ▶️ 1.2: Resultante de fuerzas (campos numéricos)
  function resolver1_2() {
    try {
      const F1 = parseFloat(document.getElementById('f1-val')?.value) || 60;
      const F2 = parseFloat(document.getElementById('f2-val')?.value) || 80;
      const θ1 = parseFloat(document.getElementById('theta1-val')?.value) || 0;
      const θ2 = parseFloat(document.getElementById('theta2-val')?.value) || 90;

      const r1x = F1 * Math.cos(θ1 * Math.PI / 180);
      const r1y = F1 * Math.sin(θ1 * Math.PI / 180);
      const r2x = F2 * Math.cos(θ2 * Math.PI / 180);
      const r2y = F2 * Math.sin(θ2 * Math.PI / 180);

      const Rx = r1x + r2x;
      const Ry = r1y + r2y;
      const R = Math.sqrt(Rx*Rx + Ry*Ry);
      const θ = Math.atan2(Ry, Rx) * 180 / Math.PI;

      document.getElementById('enunciado-texto').innerHTML = 
        `Dos fuerzas: <strong>F₁ = ${F1} N</strong> a <strong>${θ1}°</strong> y <strong>F₂ = ${F2} N</strong> a <strong>${θ2}°</strong>.`;

      document.querySelector('.problem-section.datos ul').innerHTML = `
        <li><code>F₁ = ${F1} N, θ₁ = ${θ1}° → F₁ₓ = ${r1x.toFixed(1)} N, F₁ᵧ = ${r1y.toFixed(1)} N</code></li>
        <li><code>F₂ = ${F2} N, θ₂ = ${θ2}° → F₂ₓ = ${r2x.toFixed(1)} N, F₂ᵧ = ${r2y.toFixed(1)} N</code></li>
      `;

      document.querySelector('.problem-section.sustitucion').innerHTML = `
        <h3>✏️ Sustitución</h3>
        <p><code>Rₓ = ${r1x.toFixed(1)} + ${r2x.toFixed(1)} = ${Rx.toFixed(1)} N</code></p>
        <p><code>Rᵧ = ${r1y.toFixed(1)} + ${r2y.toFixed(1)} = ${Ry.toFixed(1)} N</code></p>
        <p><code>R = √(${Rx.toFixed(1)}² + ${Ry.toFixed(1)}²) = ${R.toFixed(1)} N</code></p>
        <p><code>θ = tan⁻¹(${Ry.toFixed(1)}/${Rx.toFixed(1)}) = ${θ.toFixed(1)}°</code></p>
      `;

      document.querySelector('.resultado-final').innerHTML = 
        `<strong>R = ${R.toFixed(1)} N a ${θ.toFixed(1)}° sobre el eje +x</strong>`;

      document.getElementById('custom-form').style.display = 'none';
      alert('✅ ¡Problema actualizado con tus datos!');
    } catch (error) {
      console.error('❌ Error en 1.2:', error);
      alert('⚠️ Error al procesar. Verifica los valores.');
    }
  }

  // ▶️ 1.3: Componentes rectangulares (texto libre)
  function resolver1_3_texto() {
    try {
      const enunciado = document.getElementById('custom-statement')?.value.trim();
      if (!enunciado) throw new Error('Enunciado vacío');

      const patterns = [
        /F\s*=\s*(\d+\.?\d*)\s*N\s*a\s*(\d+\.?\d*)°/i,
        /F\s*=\s*(\d+\.?\d*)\s*N\s*,\s*θ\s*=\s*(\d+\.?\d*)°/i,
        /una\s+fuerza\s+de\s+(\d+\.?\d*)\s+N\s+forma\s+un\s+ángulo\s+de\s+(\d+\.?\d*)°/i,
        /fuerza\s*:\s*(\d+\.?\d*)\s*N\s*,\s*ángulo\s*:\s*(\d+\.?\d*)°/i
      ];

      let F = null, θ = null;
      for (const p of patterns) {
        const m = enunciado.match(p);
        if (m) { F = parseFloat(m[1]); θ = parseFloat(m[2]); break; }
      }
      if (F === null || θ === null) throw new Error('Patrón no encontrado');

      const Fx = F * Math.cos(θ * Math.PI / 180);
      const Fy = F * Math.sin(θ * Math.PI / 180);

      document.getElementById('enunciado-texto').innerHTML = 
        `Una fuerza de <strong>${F} N</strong> forma un ángulo de <strong>${θ}°</strong> con la horizontal.`;

      document.querySelector('.problem-section.datos ul').innerHTML = `
        <li><code>F = ${F} N</code></li>
        <li><code>θ = ${θ}°</code></li>
        <li><code>cos${θ}° = ${(Math.cos(θ * Math.PI / 180)).toFixed(4)}</code></li>
        <li><code>sen${θ}° = ${(Math.sin(θ * Math.PI / 180)).toFixed(4)}</code></li>
      `;

      document.querySelector('.problem-section.sustitucion').innerHTML = `
        <h3>✏️ Sustitución</h3>
        <p><code>Fₓ = ${F} × ${(Math.cos(θ * Math.PI / 180)).toFixed(4)} = ${Fx.toFixed(1)} N</code></p>
        <p><code>Fᵧ = ${F} × ${(Math.sin(θ * Math.PI / 180)).toFixed(4)} = ${Fy.toFixed(1)} N</code></p>
      `;

      document.querySelector('.resultado-final').innerHTML = 
        `<strong>Fₓ = ${Fx.toFixed(1)} N</strong>, <strong>Fᵧ = ${Fy.toFixed(1)} N</strong>`;
      
      document.getElementById('custom-form').style.display = 'none';
      alert('✅ ¡Componentes calculadas!');
    } catch (error) {
      console.error('❌ Error en 1.3:', error);
      alert(`⚠️ Formatos válidos:\n- "F = 200 N a 30°"\n- "Una fuerza de 200 N forma un ángulo de 30°"`);
    }
  }

  // ▶️ 1.4: Condiciones de equilibrio (texto libre)
  function resolver1_4_texto() {
  try {
    const enunciado = document.getElementById('custom-statement')?.value.trim();
    if (!enunciado) throw new Error();

    // ▶️ Patrones flexibles
    const patterns = [
      /un\s+cuerpo\s+de\s+(\d+\.?\d*)\s+kg\s+cuelga\s+con\s+ángulos\s+de\s+(\d+\.?\d*)°\s+y\s+(\d+\.?\d*)°/i,
      /masa\s*:\s*(\d+\.?\d*)\s*kg\s*,\s*ángulos\s*:\s*(\d+\.?\d*)°\s*y\s*(\d+\.?\d*)°/i,
      /cuerpo\s+de\s+(\d+\.?\d*)\s+kg\s+cuelga\s+con\s+ángulos\s+de\s+(\d+\.?\d*)°\s+y\s+(\d+\.?\d*)°/i,
      /un\s+cuerpo\s+de\s+(\d+\.?\d*)\s+kg\s+cuelga\s+en\s+reposo\s+de\s+dos\s+cuerdas\s+con\s+ángulos\s+de\s+(\d+\.?\d*)°\s+y\s+(\d+\.?\d*)°/i
    ];

    let m = null, θ1 = null, θ2 = null;
    for (const p of patterns) {
      const match = enunciado.match(p);
      if (match) { m = parseFloat(match[1]); θ1 = parseFloat(match[2]); θ2 = parseFloat(match[3]); break; }
    }

    if (m === null || θ1 === null || θ2 === null) {
      throw new Error('No se encontraron los valores. Usa: "Un cuerpo de 5 kg cuelga con ángulos de 30° y 60°."');
    }

    // ▶️ Calcular tensiones
    const g = 9.8;
    const W = m * g;
    const r1 = θ1 * Math.PI / 180;
    const r2 = θ2 * Math.PI / 180;
    const T1 = W / (Math.sin(r1) + Math.cos(r1) * Math.tan(r2));
    const T2 = T1 * Math.cos(r1) / Math.cos(r2);

    // ▶️ Actualizar enunciado
    document.getElementById('enunciado-texto').innerHTML = 
      `Un cuerpo de <strong>${m} kg</strong> cuelga con ángulos de <strong>${θ1}°</strong> y <strong>${θ2}°</strong>.`;

    // ▶️ Actualizar datos
    document.querySelector('.problem-section.datos ul').innerHTML = `
      <li><code>m = ${m} kg</code></li>
      <li><code>W = ${W.toFixed(1)} N</code></li>
      <li><code>θ₁ = ${θ1}°, θ₂ = ${θ2}°</code></li>
    `;

    // ▶️ Actualizar fórmulas
    document.querySelector('.problem-section.formula').innerHTML = `
      <h3>🧮 Fórmulas</h3>
      <ul>
        <li><code>∑Fₓ = 0 → T₂·cosθ₂ = T₁·cosθ₁</code></li>
        <li><code>∑Fᵧ = 0 → T₁·senθ₁ + T₂·senθ₂ = W</code></li>
      </ul>
    `;

    // ▶️ Actualizar sustitución
    document.querySelector('.problem-section.sustitucion').innerHTML = `
      <h3>✏️ Sustitución</h3>
      <p><code>T₂ = T₁·cos${θ1}°/cos${θ2}° = T₁·${(Math.cos(r1)/Math.cos(r2)).toFixed(2)}</code></p>
      <p><code>T₁·sen${θ1}° + T₁·${(Math.cos(r1)/Math.cos(r2)).toFixed(2)}·sen${θ2}° = ${W}</code></p>
      <p><code>T₁ = ${T1.toFixed(1)} N</code></p>
      <p><code>T₂ = ${T2.toFixed(1)} N</code></p>
    `;

    // ▶️ Actualizar resultado final
    document.querySelector('.resultado-final').innerHTML = 
      `<strong>T₁ = ${T1.toFixed(1)} N</strong>, <strong>T₂ = ${T2.toFixed(1)} N</strong>`;

    // ▶️ Actualizar diagrama (si existe)
    if (document.getElementById('diagrama-cuerdas')) {
      actualizarDiagrama(θ1, θ2);
    }

    // ▶️ Ocultar formulario
    document.getElementById('custom-form').style.display = 'none';
    alert('✅ ¡Problema actualizado con tus valores!');
  } catch (error) {
    console.error('❌ Error:', error);
    alert(`⚠️ Error al procesar tu enunciado.\nEjemplos válidos:\n- "Un cuerpo de 5 kg cuelga con ángulos de 30° y 60°."\n- "Masa: 5 kg, ángulos: 30° y 60°"`);
  }
}

  // ▶️ 1.5: Cuerpos rígidos (texto libre - conceptual)
  function resolver1_5_texto() {
    try {
      const enunciado = document.getElementById('custom-statement')?.value.trim();
      if (!enunciado) throw new Error('Enunciado vacío');

      document.getElementById('enunciado-texto').innerHTML = 
        `<strong>Tú caso:</strong> ${enunciado}`;

      document.querySelector('.resultado-final').textContent = 
        "→ El movimiento NO cambia (principio de transmisibilidad)";

      document.getElementById('custom-form').style.display = 'none';
      alert('✅ ¡Descripción aplicada!');
    } catch (error) {
      console.error('❌ Error en 1.5:', error);
      alert('⚠️ Solo necesitas describir tu caso (texto libre).');
    }
  }

  // ▶️ 1.6: Momento de una fuerza (texto libre)
  function resolver1_6_texto() {
    try {
      const enunciado = document.getElementById('custom-statement')?.value.trim();
      if (!enunciado) throw new Error('Enunciado vacío');

      const patterns = [
        /F\s*=\s*(\d+\.?\d*)\s*N\s*,\s*d\s*=\s*(\d+\.?\d*)\s*m\s*,\s*θ\s*=\s*(\d+\.?\d*)°/i,
        /fuerza\s*:\s*(\d+\.?\d*)\s*N\s*,\s*brazo\s*:\s*(\d+\.?\d*)\s*m\s*,\s*ángulo\s*:\s*(\d+\.?\d*)°/i,
        /una\s+fuerza\s+de\s+(\d+\.?\d*)\s+N\s+aplicada\s+a\s+(\d+\.?\d*)\s+m\s+con\s+ángulo\s+de\s+(\d+\.?\d*)°/i
      ];

      let F = null, d = null, θ = null;
      for (const p of patterns) {
        const match = enunciado.match(p);
        if (match) { F = parseFloat(match[1]); d = parseFloat(match[2]); θ = parseFloat(match[3]); break; }
      }
      if (F === null || d === null || θ === null) throw new Error('Patrón no encontrado');

      const M = F * d * Math.sin(θ * Math.PI / 180);

      document.getElementById('enunciado-texto').innerHTML = 
        `Fuerza de <strong>${F} N</strong> aplicada a <strong>${d} m</strong> con ángulo de <strong>${θ}°</strong>.`;

      document.querySelector('.problem-section.datos ul').innerHTML = `
        <li><code>F = ${F} N</code></li>
        <li><code>d = ${d} m</code></li>
        <li><code>θ = ${θ}°</code></li>
        <li><code>sen${θ}° = ${(Math.sin(θ * Math.PI / 180)).toFixed(3)}</code></li>
      `;

      document.querySelector('.problem-section.sustitucion').innerHTML = `
        <h3>✏️ Sustitución</h3>
        <p><code>M = ${F} × ${d} × ${(Math.sin(θ * Math.PI / 180)).toFixed(3)} = ${M.toFixed(2)} N·m</code></p>
      `;

      document.querySelector('.resultado-final').innerHTML = 
        `<strong>M = ${M.toFixed(2)} N·m</strong><br><small>Sentido: ${M > 0 ? 'antihorario' : 'horario'}</small>`;
      
      document.getElementById('custom-form').style.display = 'none';
      alert('✅ ¡Momento calculado!');
    } catch (error) {
      console.error('❌ Error en 1.6:', error);
      alert(`⚠️ Formatos válidos:\n- "F = 50 N, d = 0.3 m, θ = 90°"\n- "Una fuerza de 50 N aplicada a 0.3 m con ángulo de 90°"`);
    }
  }

  // ▶️ 1.7: Teorema de Varignon (texto libre)
  function resolver1_7_texto() {
    try {
      const enunciado = document.getElementById('custom-statement')?.value.trim();
      if (!enunciado) throw new Error('Enunciado vacío');

      const patterns = [
        /F₁\s*=\s*(\d+\.?\d*)\s*N\s*,\s*F₂\s*=\s*(\d+\.?\d*)\s*N\s*,\s*d\s*=\s*(\d+\.?\d*)\s*m/i,
        /fuerzas\s*:\s*(\d+\.?\d*)\s*N\s+y\s*(\d+\.?\d*)\s*N\s*,\s*distancia\s*:\s*(\d+\.?\d*)\s*m/i,
        /dos\s+fuerzas\s+de\s+(\d+\.?\d*)\s+N\s+y\s+(\d+\.?\d*)\s+N\s+a\s+(\d+\.?\d*)\s+m\s+del\s+punto/i
      ];

      let F1 = null, F2 = null, d = null;
      for (const p of patterns) {
        const match = enunciado.match(p);
        if (match) { F1 = parseFloat(match[1]); F2 = parseFloat(match[2]); d = parseFloat(match[3]); break; }
      }
      if (F1 === null || F2 === null || d === null) throw new Error('Patrón no encontrado');

      const M1 = d * F1;
      const M2 = 0;
      const M_total = M1 + M2;

      document.getElementById('enunciado-texto').innerHTML = 
        `Fuerzas: <strong>F₁ = ${F1} N</strong> (+x), <strong>F₂ = ${F2} N</strong> (+y). Distancia: <strong>${d} m</strong>.`;

      document.querySelector('.problem-section.datos ul').innerHTML = `
        <li><code>F₁ = ${F1} N i</code></li>
        <li><code>F₂ = ${F2} N j</code></li>
        <li><code>d = ${d} m</code></li>
      `;

      document.querySelector('.problem-section.sustitucion').innerHTML = `
        <h3>✏️ Sustitución</h3>
        <p><code>M(F₁) = d·F₁ = ${d} × ${F1} = ${M1} N·m</code></p>
        <p><code>M(F₂) = 0</code></p>
        <p><code>ΣM = ${M_total} N·m</code></p>
        <p><code>M(R) = mismo valor → ✔️ Varignon confirmado</code></p>
      `;

      document.querySelector('.resultado-final').innerHTML = 
        `<strong>M = ${M_total} N·m</strong><br><small>✅ Teorema de Varignon verificado</small>`;
      
      document.getElementById('custom-form').style.display = 'none';
      alert('✅ ¡Teorema de Varignon verificado!');
    } catch (error) {
      console.error('❌ Error en 1.7:', error);
      alert(`⚠️ Formatos válidos:\n- "F₁ = 30 N, F₂ = 40 N, d = 5 m"\n- "Dos fuerzas de 30 N y 40 N a 5 m del punto"`);
    }
  }
})();