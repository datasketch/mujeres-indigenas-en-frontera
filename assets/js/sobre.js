const md = new markdownit();
const moveTo = new MoveTo({
  tolerance: 100
});
const modal = document.getElementById('modal');
const modalClose = modal.querySelectorAll('.modal-close');
const profileAvatar = modal.querySelector('#profile-avatar');
const profileName = modal.querySelector('#profile-name');
const profileCharge = modal.querySelector('#profile-charge');
const profileBio = modal.querySelector('#profile-bio');
const profileContact = modal.querySelector('#profile-contact');
const profileFb = modal.querySelector('#profile-facebook');
const profileTw = modal.querySelector('#profile-twitter');
const profileBe = modal.querySelector('#profile-behance');
const profileIg = modal.querySelector('#profile-instagram');
const profiles = document.querySelectorAll('.profile');

const triggers = document.querySelectorAll('.js-trigger');

triggers.forEach(function (trigger) {
  moveTo.registerTrigger(trigger);
});

profiles.forEach(function (profile) {
  profile.addEventListener('click', function (event) {
    const info = JSON.parse(this.querySelector('pre').textContent);
    profileAvatar.src = info.avatar;
    profileName.textContent = info.nombre;
    profileCharge.textContent = info.cargo;
    profileBio.innerHTML = md.render(info.bio);
    if (!info.instagram && !info.facebook && !info.twitter && !info.behance) {
      profileContact.classList.add('hidden');
    }
    if (info.instagram) {
      profileIg.href = info.instagram;
      profileIg.classList.remove('hidden');
    }
    if (info.twitter) {
      profileTw.href = info.twitter;
      profileTw.classList.remove('hidden');
    }
    if (info.facebook) {
      profileFb.href = info.facebook;
      profileFb.classList.remove('hidden');
    }
    if (info.behance) {
      profileBe.href = info.behance;
      profileBe.classList.remove('hidden');
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

modalClose.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    profileTw.classList.add('hidden');
    profileIg.classList.add('hidden');
    profileFb.classList.add('hidden');
    profileBe.classList.add('hidden');
    profileContact.classList.remove('hidden');
  });
});
