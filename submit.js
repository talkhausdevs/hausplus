document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.submit-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form[0].value;
    const email = form[1].value;
    const title = form[2].value;
    const desc = form[3].value;
    const link = form[4].value;
    const entry = { name, email, title, desc, link, submitted: new Date().toISOString() };
    let logs = JSON.parse(localStorage.getItem('haus_submissions') || '[]');
    logs.push(entry);
    localStorage.setItem('haus_submissions', JSON.stringify(logs));
    alert('Submission received!');
    form.reset();
  });
});
