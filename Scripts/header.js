$(document).ready(function() {
    // Obtiene la URL actual
    var url = window.location.href;
    
    // Recorre todos los enlaces del navbar
    $('nav ul li a').each(function() {
      // Verifica si la URL coincide con el enlace
      if (url === this.href) {
        $(this).addClass('active'); // Agrega la clase 'active' al enlace seleccionado
      }
    });
  });
  
  
  
  
  
  
  