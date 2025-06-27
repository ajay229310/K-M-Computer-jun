function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  ['loginModal', 'signupModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      closeModal(id);
    }
  });
};
