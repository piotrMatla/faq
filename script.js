const iconPlus = document.querySelectorAll('.btn');
const paragraphFirst = document.querySelector('.first');
const paragraphSecond = document.querySelector('.second');
const paragraphThird = document.querySelector('.third');
const paragraphFourth = document.querySelector('.fourth');

iconPlus.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-circle-plus')) {
      const m = document.querySelector('.fa-circle-minus');
      m.classList.remove('fa-circle-minus');
      m.classList.add('fa-circle-plus');
      icon.classList.remove('fa-circle-plus');
      icon.classList.add('fa-circle-minus');
      if (icon.classList.contains('fa-solid one btn fa-circle-minus')) {
        paragraphFirst.classList.remove('remove');
        paragraphFirst.classList.add('active');

        paragraphSecond.classList.remove('active');
        paragraphSecond.classList.add('remove');
      } else if (icon.classList.contains('fa-solid two btn fa-circle-minus')) {
        paragraphFirst.classList.remove('active');
        paragraphFirst.classList.add('remove');

        paragraphSecond.classList.remove('remove');
        paragraphSecond.classList.add('active');
      }
    }
    console.log(icon.classList.contains('two'));

    if (icon.classList.contains('one')) {
      paragraphFirst.classList.remove('remove');
      paragraphFirst.classList.add('active');

      paragraphSecond.classList.remove('active');
      paragraphThird.classList.remove('active');
      paragraphFourth.classList.remove('active');
      paragraphSecond.classList.add('remove');
      paragraphThird.classList.add('remove');
      paragraphFourth.classList.add('remove');
    } else if (icon.classList.contains('two')) {
      paragraphSecond.classList.remove('remove');
      paragraphSecond.classList.add('active');

      paragraphFirst.classList.remove('active');
      paragraphThird.classList.remove('active');
      paragraphFourth.classList.remove('active');
      paragraphFirst.classList.add('remove');
      paragraphThird.classList.add('remove');
      paragraphFourth.classList.add('remove');
    } else if (icon.classList.contains('three')) {
      paragraphThird.classList.remove('remove');
      paragraphThird.classList.add('active');

      paragraphFirst.classList.remove('active');
      paragraphSecond.classList.remove('active');
      paragraphFourth.classList.remove('active');
      paragraphFirst.classList.add('remove');
      paragraphSecond.classList.add('remove');
      paragraphFourth.classList.add('remove');
    } else if (icon.classList.contains('four')) {
      paragraphFourth.classList.remove('remove');
      paragraphFourth.classList.add('active');

      paragraphFirst.classList.remove('active');
      paragraphSecond.classList.remove('active');
      paragraphThird.classList.remove('active');
      paragraphFirst.classList.add('remove');
      paragraphSecond.classList.add('remove');
      paragraphThird.classList.add('remove');
    }
  });
});
