// Animate energy core glow
gsap.to(".core-glow", {
  scale: 1.3,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Simulate oxygen level changes
let oxygenValue = document.getElementById("oxygen-value");
let oxygen = 93;

setInterval(() => {
  oxygen += (Math.random() - 0.5) * 2;
  oxygen = Math.max(80, Math.min(100, oxygen));
  oxygenValue.textContent = `${oxygen.toFixed(1)}%`;
}, 2000);

// Add dynamic AI alerts
const alerts = [
  "Intruder detected in sector 7!",
  "Warp drive overheating!",
  "Radiation spike detected.",
  "External hull breach sealed.",
  "Drone patrol returning.",
];

const alertList = document.getElementById("alerts-list");

function addRandomAlert() {
  const li = document.createElement("li");
  li.textContent = alerts[Math.floor(Math.random() * alerts.length)];
  alertList.prepend(li);
  if (alertList.children.length > 5) {
    alertList.removeChild(alertList.lastChild);
  }
}

setInterval(addRandomAlert, 4000);
