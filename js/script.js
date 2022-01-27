const data = document.querySelectorAll("img.box-filme");
const popup = document.querySelector('.popup-wrapper');
const popup2 = document.querySelector('h2.titulo-popup');
const popup3 = document.querySelector("p.popo");
var data2;
 window.onclick = e => {
   let data1 = e.target.id;
  data2=data1;
   verifica();
} 
function verifica(){
  const imgIdClicked = ['metallica','acdc','soulwax','led-zeppelin','van-halen','pet-shop-boys','pink-floyd','rage-against','lemon-jelly'];
  const checkClickedImg = imgIdClicked.some(idName => idName ===data2)
  if (checkClickedImg) {
    popup.style.display = "block"; 
   switch (data2) {
     case "metallica":
      popup3.innerHTML ='<b class="b-popup">Metallica</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td> Battery</td><td class="duracao">5:13</td></tr><tr><td>Master of Puppets</td><td class="duracao">8:36</td></tr><tr><td>The Thing That Should Not Be</td><td class="duracao">6:37</td></tr><tr><td>Welcome Home (Sanitarium)</td><td class="duracao">6:28</td></tr><tr><td>Disposable Heroes</td><td class="duracao">8:17</td></tr><tr><td>Leper Messiah </td><td class="duracao">5:41</td></tr><tr><td>Orion (Instrumental)</td><td class="duracao">8:28</td></tr><td>Damage, Inc.</td><td class="duracao"> 5:30</td></table>'
      popup2.innerHTML ='Master of Puppets';
      break;
       case "led-zeppelin":
      popup3.innerHTML ='<b class="b-popup">Led Zeppelin</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>The Song Remains the Sam</td><td class="duracao">5:32</td></tr><tr><td>The Rain Song</td><td class="duracao">7:39</td></tr><tr><td>Over the Hills and Far Away</td><td class="duracao">4:50</td></tr><tr><td>The Crunge</td><td class="duracao">3:17</td></tr><tr><td>Dancing Days</td><td class="duracao">3:43</td></tr><tr><td>D\'yer Mak\'er</td><td class="duracao">4:23</td></tr><tr><td>No Quarter</td><td class="duracao">7:00</td></tr><tr><td>The Ocean</td><td class="duracao">4:31</td></tr></table>'
      popup2.innerHTML ='Houses of the Holy';
      break;
      case "soulwax":
      popup3.innerHTML ='<b class="b-popup">Soulwax</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>Teachers</td><td class="duracao">2:28</td></tr><tr><td>Miserable Girl</td><td class="duracao">4:10</td></tr><tr><td>E Talking</td><td class="duracao">5:39</td></tr><tr><td>Accidents and Compliments</td><td class="duracao">6:08</td></tr><tr><td>Compute</td><td class="duracao">5:31</td></tr><tr><td>Slowdance</td><td class="duracao">6:18</td></tr><tr><td>I Love Techno</td><td class="duracao">4:04</td></tr><tr><td>KracK</td><td class="duracao">5:23</td></tr>><tr><td>NY Lipps</td><td class="duracao">4:10</td></tr>><tr><td>Another Excuse</td><td class="duracao">7:51</td></tr></table>'
      popup2.innerHTML ='Nite Versions';
      break;
      case "acdc":
      popup3.innerHTML ='<b class="b-popup">AC/DC</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td> Hells Bells</td><td class="duracao">5:10</td></tr><tr><td>Shoot to Thrill</td><td class="duracao">5:17</td></tr><tr><td>What Do You Do for Money Honey</td><td class="duracao">3:33</td></tr><tr><td>Givin\' the Dog a Bone</td><td class="duracao">3:30</td></tr><tr><td>7Let Me Put My Love into You</td><td class="duracao">4:16</td></tr><tr><td>Back in Black</td><td class="duracao">4:14</td></tr><tr><td>You Shook Me All Night Long</td><td class="duracao">3:30</td></tr><tr><td>Have a Drink on Me</td><td class="duracao">3:57</td></tr>><tr><td>Shake a Legs</td><td class="duracao">4:06</td></tr>><tr><td>Rock and Roll Ain\'t Noise Pollution</td><td class="duracao">	4:15</td></tr></table>'
      popup2.innerHTML ='Back In Black';
      break;
      case "van-halen":
      popup3.innerHTML ='<b class="b-popup">Van Halen</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>1984</td><td class="duracao">	1:07</td></tr><tr><td>Jump</td><td class="duracao">4:04</td></tr><tr><td>Panama</td><td class="duracao">3:34</td></tr><tr><td>Top Jimmy</td><td class="duracao">3:02</td></tr><tr><td>Drop Dead Legs</td><td class="duracao">4:15</td></tr><tr><td>Hot for Teacher</td><td class="duracao">4:44</td></tr><tr><td>I\'ll Wait</td><td class="duracao">4:45</td></tr><tr><td>Girl Gone Bad</td><td class="duracao">4:35</td></tr><tr><td>House of Pain</td><td class="duracao">3:19</td></tr>></table>'
      popup2.innerHTML ='1984';
      break;
      case "pet-shop-boys":
      popup3.innerHTML ='<b class="b-popup">Pet Shop Boys</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>Left to My Own Devices</td><td class="duracao">	8:16</td></tr><tr><td>I Want a Dog</td><td class="duracao">6:15</td></tr><tr><td>Domino Dancing</td><td class="duracao">7:40</td></tr><tr><td>I\'m Not Scared</td><td class="duracao">7:23</td></tr><tr><td>Always on My Mind/In My House</td><td class="duracao">9:05</td></tr><tr><td>It\'s Alright</td><td class="duracao">9:24</td></tr></table>'
      popup2.innerHTML ='Introspective';
      break;
      case "pink-floyd":
      popup3.innerHTML ='<b class="b-popup">Pink Floyd</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>Shine On You Crazy Diamond (I-V)</td><td class="duracao">13:38</td></tr><tr><td>Welcome to the Machine</td><td class="duracao">7:30</td></tr><tr><td>Have a Cigar</td><td class="duracao">5:24</td></tr><tr><td>Wish You Were Here</td><td class="duracao">5:17</td></tr><tr><td>Shine On You Crazy Diamond (VI—IX)</td><td class="duracao">12:29</td></tr>></table>'
      popup2.innerHTML ='Whish You Were Here';
      break;
      case "rage-against":
      popup3.innerHTML ='<b class="b-popup">Rage Against The Machine</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>Bombtrack</td><td class="duracao">4:05</td></tr><td>Killing in the Name</td><td class="duracao">5:14</td></tr><tr><td>Take the Power Back</td><td class="duracao">5:37</td></tr><tr><td>Settle for Nothing</td><td class="duracao">4:48</td></tr><tr><td>Bullet in the Head</td><td class="duracao">5:10</td></tr><tr><td>Know Your Enemy</td><td class="duracao">4:56</td></tr><tr><td>Wake Up</td><td class="duracao">6:04</td></tr><tr><td>Fistful of Steel</td><td class="duracao">5:31</td></tr><tr><td>Township Rebellion</td><td class="duracao">5:24</td></tr><tr><td>Freedom</td><td class="duracao">6:07</td></tr></table>'
      popup2.innerHTML ='Rage Against The Machine';
      break;
      case "lemon-jelly":
      popup3.innerHTML ='<b class="b-popup">Lemon Jelly</b><table class"tb-content"><tr><th>Título</th><th class="duracao">Duração</th></tr><tr><td>Elements</td><td class="duracao">8:40</td></tr><tr><td>Space Walk</td><td class="duracao">7:00</td></tr><tr><td>Ramblin\' Man</td><td class="duracao">7:08</td></tr><tr><td>Return to Patagonia</td><td class="duracao">8:40</td></tr><tr><td>Nice Weather for Ducks</td><td class="duracao">5:52</td></tr><tr><td>Experiment Number Six</td><td class="duracao">6:10</td></tr><tr><td>Closer</td><td class="duracao">7:24</td></tr><tr><td>The Curse of Ka\'Zar</td><td class="duracao">9:00</td></tr></table>'
      popup2.innerHTML ='Lost Horizons';
      break;
   }
  }
}

popup.addEventListener('click', event => {
  const ClassNameClicked = event.target.classList[0];
  const ClassNames = ['popup-close', 'popup-wrapper'];
  const ShouldClosePopup = ClassNames.some(className => className === ClassNameClicked);
  if(ShouldClosePopup){
    popup.style.display = "none"
  }
})