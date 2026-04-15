const timeElement = document.getElementById("time");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const upload = document.getElementById("upload");
const avatar = document.getElementById("avatar");

upload.addEventListener("change", () => {
  const file = upload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatar.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});