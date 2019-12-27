var PrimaScelta = '';

document.getElementById('gioca').addEventListener('click',
function() {
Math.floor(Math.random() * 16 + 1);
document.getElementById('carta1').classList.add('order' + Math.floor(Math.random() * 16 + 1));
for (var i = 1; i <= 16; i++) {
  document.getElementById('carta' + i).classList.add('order' + Math.floor(Math.random() * 16 + 1));
}
document.getElementById('container').classList.add('direction' + Math.floor(Math.random() * 4));
}
);

document.getElementById('carta1').addEventListener('click',
function() {
  document.getElementById('carta1').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'red';
  } else {
    if (PrimaScelta == 'red') {
      alert('hai vinto');
      document.getElementById('carta1').classList.add('hidden');
      document.getElementById('carta2').classList.add('hidden');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta2').addEventListener('click',
function() {
  document.getElementById('carta2').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'red';
  } else {
    if (PrimaScelta == 'red') {
      alert('hai vinto');
      document.getElementById('carta1').classList.add('hidden');
      document.getElementById('carta2').classList.add('hidden');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta3').addEventListener('click',
function() {
  document.getElementById('carta3').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'yellow';
  } else {
    if (PrimaScelta == 'yellow') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta4').addEventListener('click',
function() {
  document.getElementById('carta4').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'yellow';
  } else {
    if (PrimaScelta == 'yellow') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta5').addEventListener('click',
function() {
  document.getElementById('carta5').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'blue';
  } else {
    if (PrimaScelta == 'blue') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta6').addEventListener('click',
function() {
  document.getElementById('carta6').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'blue';
  } else {
    if (PrimaScelta == 'blue') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta7').addEventListener('click',
function() {
  document.getElementById('carta7').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'green';
  } else {
    if (PrimaScelta == 'green') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta8').addEventListener('click',
function() {
  document.getElementById('carta8').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'green';
  } else {
    if (PrimaScelta == 'green') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta9').addEventListener('click',
function() {
  document.getElementById('carta9').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'pink';
  } else {
    if (PrimaScelta == 'pink') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta10').addEventListener('click',
function() {
  document.getElementById('carta10').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'pink';
  } else {
    if (PrimaScelta == 'pink') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta11').addEventListener('click',
function() {
  document.getElementById('carta11').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'purple';
  } else {
    if (PrimaScelta == 'purple') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta12').addEventListener('click',
function() {
  document.getElementById('carta12').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'purple';
  } else {
    if (PrimaScelta == 'purple') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta13').addEventListener('click',
function() {
  document.getElementById('carta13').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'lightgreen';
  } else {
    if (PrimaScelta == 'lightgreen') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta14').addEventListener('click',
function() {
  document.getElementById('carta14').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'lightgreen';
  } else {
    if (PrimaScelta == 'lightgreen') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta15').addEventListener('click',
function() {
  document.getElementById('carta15').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'beige';
  } else {
    if (PrimaScelta == 'beige') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
document.getElementById('carta16').addEventListener('click',
function() {
  document.getElementById('carta16').classList.add('unclickable');
  if (PrimaScelta == '') {
    PrimaScelta = 'beige';
  } else {
    if (PrimaScelta == 'beige') {
      alert('hai vinto');
    } else {
      alert('riprova');
    }
  }
});
