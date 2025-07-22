const stars = document.querySelectorAll('.star');
const starContainer = document.querySelector('.stars');
const commentBox = document.querySelector('.comment-section');

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const value = parseInt(star.dataset.value);
    highlightStars(value);
  });

  star.addEventListener('mouseout', () => {
    const selected = parseInt(starContainer.dataset.selected);
    highlightStars(selected);
  });

  star.addEventListener('click', () => {
    const value = parseInt(star.dataset.value);
    starContainer.dataset.selected = value;
    highlightStars(value);
    if (value <= 4) {
      commentBox.classList.remove('hidden');
    } else {
      commentBox.classList.add('hidden');
    }
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    star.classList.remove('selected', 'hover');
    if (parseInt(star.dataset.value) <= value) {
      star.classList.add('selected');
    }
  });
}
