
    window.addEventListener('bogiekilled', function(e) {
      if(e.detail.x > 20 && Math.random() * 10 > 5) {
        var warez = new Warez(e.detail.x, e.detail.y);
  			game.warez.push(warez);
  		}
    });
