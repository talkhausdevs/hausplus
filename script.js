document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert('Playing trailer for: ' + card.textContent);
  });
});
