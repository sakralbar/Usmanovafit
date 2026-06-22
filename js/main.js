// Основной JavaScript файл
// Добавляйте сюда скрипты по мере необходимости

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded successfully');

  // Подсказка прокрутки слайдера при появлении на экране
  const slider = document.querySelector('.slider-scroll');
  if (slider) {
    const slideWidth = slider.querySelector('.scroll-snap-start')?.offsetWidth ?? 180;
    const gap = 12; // gap-3 = 0.75rem = 12px
    const scrollAmount = slideWidth + gap;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Прокручиваем вправо на один слайд и возвращаем обратно
            setTimeout(() => {
              slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            }, 0);
            setTimeout(() => {
              slider.scrollTo({ left: 0, behavior: 'smooth' });
            }, 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(slider);
  }
});
