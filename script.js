// ==== Variables ==== //
const $div = $('#accessibleDiv');
const $text = $('#accessible_text');
const $footer = $('footer');
const $hello = $('#hello');
const $emptyHeadings = $(':header:empty');
const $setRole = $('#set_role');
const $roleText = $('#role_text');
const $timer = $('#countdown');
const $intOne = $('#int_one');
const $intTwo = $('#int_two');
const $start = $('#start_timer');

$div.on('click', () => {
  makeDivAccessible();
  $div.text('Accessible');
  $text.removeClass('is-hidden');
  $hello.removeClass('is-hidden');
  $footer.append(`<span class="keydown-hello">keyboard access granted!</span>`);
});

function makeDivAccessible() {
  $div.attr('role', 'button').attr('tabindex', '0');
  $div.on('keydown', (e) => {
    e.code === 'Space' || e.code === 'Enter' ? $div.click() : null;
  });
}

$setRole.on('click', () => {
  setHeadingRole();
});

function setHeadingRole() {
  $emptyHeadings.attr('role', 'presentation');
  $emptyHeadings.text('Empty Headings');
  $roleText.removeClass('is-hidden');
}

$start.on('click', (e) => {
  e.preventDefault();
  sumCountdown($intOne.val(), $intTwo.val());
});

function sumCountdown(int1, int2) {
  int1 = parseInt(int1);
  int2 = parseInt(int2);

  let sum = int1 + int2;

  const timer = setInterval(() => {
    console.log(sum);
    $timer.text(sum);
    sum--;
    if (sum < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

