const progressBar = () => {
  const levels = document.querySelectorAll('.companion-card__level');

  levels.forEach((item) => {
    const value = Number(item.dataset.level);
    const progress = item.querySelector('.companion-card__level-progress');
    const radius = 28;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = `${circumference}`;
    progress.style.strokeDashoffset = circumference * (1 - value / 100);
  });
} 

export default progressBar;