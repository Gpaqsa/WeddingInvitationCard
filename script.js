(function(){
  const stage = document.getElementById('envelope-stage');
  const wrap = document.getElementById('envelopeWrap');
  const seal = document.getElementById('sealBtn');
  const letter = document.getElementById('mainContent');
  const letterInner = document.getElementById('letterInner');
  let opened = false;

  function spawnPetals(){
    const count = 22;
    for(let i=0;i<count;i++){
      const p = document.createElement('div');
      p.className = 'petal';
      p.style.left = Math.random()*100 + 'vw';
      p.style.animationDuration = (3 + Math.random()*2.2) + 's';
      p.style.animationDelay = (Math.random()*0.7) + 's';
      p.style.opacity = 0.5 + Math.random()*0.4;
      const size = 8 + Math.random()*8;
      p.style.setProperty('--s', size + 'px');
      p.style.setProperty('--drift', (Math.random()*80 - 40) + 'px');
      document.body.appendChild(p);
      setTimeout(()=>p.remove(), 6500);
    }

    for(let i=0;i<18;i++){
      const s = document.createElement('div');
      s.className = 'spark';
      s.style.left = Math.random()*100 + 'vw';
      s.style.animationDuration = (1.2 + Math.random()*1.4) + 's';
      s.style.animationDelay = (Math.random()*0.4) + 's';
      s.style.setProperty('--drift', (Math.random()*80 - 40) + 'px');
      document.body.appendChild(s);
      setTimeout(()=>s.remove(), 4000);
    }
  }

  function openInvitation(){
    if(opened) return;
    opened = true;

    // 1. seal cracks, flap swings open
    wrap.classList.add('open');
    spawnPetals();

    // 2. the letter appears, sitting where the envelope was
    setTimeout(()=>{
      letter.classList.add('visible');
    }, 450);

    // 3. it automatically pulls itself out and expands to cover the whole page
    setTimeout(()=>{
      letter.classList.add('expand');
    }, 700);

    // 4. once it fills the screen, the envelope behind it is no longer needed
    setTimeout(()=>{
      stage.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 1250);

    // 5. the invitation text fades in on the open letter
    setTimeout(()=>{
      letterInner.classList.add('reveal');
    }, 1400);
  }

  document.body.style.overflow = 'hidden';

  seal.addEventListener('click', openInvitation);
  seal.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      openInvitation();
    }
  });
})();
