(function(){
  const countdownEl = document.getElementById('countdown');
  const eventDate = new Date('October 17, 2025 10:00:00').getTime();

  function update(){
    const now = Date.now();
    const diff = eventDate - now;
    if(diff <= 0){
      countdownEl.textContent = '🔥 Event Started! 🔥';
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);
    countdownEl.textContent = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }

  update();
  setInterval(update, 1000);
})();
