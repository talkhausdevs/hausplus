document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.submit-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form[0].value, email = form[1].value, title = form[2].value, desc = form[3].value, link = form[4].value;
    const entry = { name, email, title, desc, link, submitted: new Date().toISOString() };
    let logs = JSON.parse(localStorage.getItem('haus_submissions') || '[]'); logs.push(entry);
    localStorage.setItem('haus_submissions', JSON.stringify(logs));
    alert('Submission received!'); form.reset();
  });
});
