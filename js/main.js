
document.addEventListener('DOMContentLoaded', function(){
  // Bootstrap-style validation
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function(form){
    form.addEventListener('submit', function(e){
      if(!form.checkValidity()){
        e.preventDefault(); e.stopPropagation();
      } else {
        e.preventDefault();
        var qty = form.querySelector('input[type="number"]').value || 1;
        
        alert('Added ' + qty + ' copy(ies) to cart — demo only.');
      }
      form.classList.add('was-validated');
    }, false);
  });

  //controls for carousel
  var car = document.getElementById('booksCarousel');
  if(car){
    car.addEventListener('keydown', function(e){
      if(e.key === 'ArrowLeft') bootstrap.Carousel.getInstance(car).prev();
      if(e.key === 'ArrowRight') bootstrap.Carousel.getInstance(car).next();
    });
  }

  // reduced motion
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.carousel').forEach(function(c){ c.setAttribute('data-bs-ride','false'); });
    document.querySelectorAll('.small-png').forEach(function(i){ i.style.animation = 'none'; });
  }
});