let arabic = true;

function openEnvelope() {
  document.querySelector('.flap').style.transform = 'rotateX(180deg)';
  document.querySelector('.letter').style.transform = 'translateY(0)';
}

function toggleLanguage(e) {
  e.stopPropagation();
  arabic = !arabic;
  document.getElementById("subtitle").innerText =
    arabic ? "Together with their families" : "برفقة عائلاتهم";
  document.getElementById("event").innerText =
    arabic
      ? "Invite you to their Islamic Engagement"
      : "يدعونكم لحضور حفل الخطوبة الإسلامية";
  document.getElementById("details").innerHTML =
    arabic
      ? `<p><strong>Time:</strong> 5:00 PM</p><p><strong>Location:</strong><br>91 Douglas Woods Hill SE</p>`
      : `<p><strong>الوقت:</strong> 5:00 مساءً</p><p><strong>الموقع:</strong><br>91 Douglas Woods Hill SE</p>`;
}

function rsvp(e) {
  e.stopPropagation();
  window.open(
    "https://wa.me/17808730067?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20RSVP%20for%20Sarah%20and%20Subhaan’s%20engagement",
    "_blank"
  );
}
