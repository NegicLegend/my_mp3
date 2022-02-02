const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $('.playlist');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player')
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
var menu = document.querySelector('.menu');
const nameWrap = document.querySelector('.menu-names-wrap');

const app = {
   currentIndex: 0,
   isPlaying: false,
   isRandom: false,
   isRepeat: false,
   songs: [
      {
         name: "[MV] end of a life - Calliope Mori (Original Song)",
         singer: "Mori Calliope",
         path: "./music/mp3(15).mp3",
         image: "./img/img14.jpg",
      },
      {
         name: "[MV] Red - Calliope Mori",
         singer: "Mori Calliope",
         path: "./music/mp3(18).mp3",
         image: "./img/img17.jpg",
      },
      {
         name: "[MV] いじめっ子 Bully- Calliope Mori",
         singer: "Mori Calliope",
         path: "./music/mp3(20).mp3",
         image: "./img/img19.jpg",
      },
      {
         name: "「君の名は。」スパークル/RADWIMPS Cover by大神ミオ【歌ってみた/4K】",
         singer: "Ookami Mio",
         path: "./music/mp3(2).mp3",
         image: "./img/img2.jpg",
      },
      {
         name: "【original】#あくあ色ぱれっと【ホロライブ/湊あくあ】",
         singer: "Minato Aqua",
         path: "./music/mp3(3).mp3",
         image: "./img/img3.jpg",
      },
      {
         name: "【オリジナル曲】『百花繚乱花吹雪』試聴動画 【白上フブキ, 百鬼あやめ, 大神ミオ】",
         singer: "Nakiri x Fubuki x Mio",
         path: "./music/mp3(4).mp3",
         image: "./img/img4.jpeg",
      },
      {
         name: "Say!ファンファーレ!/白上フブキ【オリジナル曲】",
         singer: "Shirakami Fubuki",
         path: "./music/mp3(5).mp3",
         image: "./img/img5.jpg",
      },
      {
         name: "【水着で踊る特別版MV】VTuber事務所「ホロライブ」公式曲第1弾『ShinySmilyStory』試聴動画 【 #ホロライブサマー 】",
         singer: "Hololive",
         path: "./music/mp3(6).mp3",
         image: "./img/img4.jpeg",
      },
      {
         name: "【original】Ahoy!! 我ら宝鐘海賊団☆【ホロライブ/宝鐘マリン】",
         singer: "Houshou Marine",
         path: "./music/mp3(7).mp3",
         image: "./img/img6.jpg",
      },
      {
         name: "オリジナル曲】　FACT/常闇トワ　【フルMV】",
         singer: "Tokoyami Towa",
         path: "./music/mp3(21).mp3",
         image: "./img/img20.jpg",
      },
      {
         name: "【歌ってみた】だから僕は音楽を辞めた / ヨルシカ【不知火フレア(Cover)】",
         singer: "Shiranui Flare",
         path: "./music/mp3(8).mp3",
         image: "./img/img7.jpg",
      },
      {
         name: "KING／Covered by紫咲シオン【歌ってみた】",
         singer: "Murasaki Shion",
         path: "./music/mp3(9).mp3",
         image: "./img/img8.jpg",
      },
      {
         name: "踊／Covered by紫咲シオン【歌ってみた】",
         singer: "Murasaki Shion",
         path: "./music/mp3(19).mp3",
         image: "./img/img18.jpg",
      },
      {
         name: "白日 / King Gnu (covered by 紫咲シオン)",
         singer: "Murasaki Shion",
         path: "./music/mp3(17).mp3",
         image: "./img/img16.jpg",
      },
      {
         name: "【歌ってみた】花に亡霊 / ヨルシカ【潤羽るしあcover】",
         singer: "Uruha Rushia",
         path: "./music/mp3(10).mp3",
         image: "./img/img9.jpg",
      },
      {
         name: "『VIOLET』 - Ninomae Ina'nis",
         singer: "Ninomae Ina'nis",
         path: "./music/mp3(11).mp3",
         image: "./img/img10.jpg",
      },
      {
         name: "『旅の途中』 Ninomae Ina'nis (Cover)",
         singer: "Ninomae Ina'nis",
         path: "./music/mp3(1).mp3",
         image: "./img/img1.jpg",
      },
      {
         name: "馬と鹿 - 米津玄師／天音かなた(Cover)",
         singer: "Amane Kanata",
         path: "./music/mp3(12).mp3",
         image: "./img/img11.jpg",
      },
      {
         name: "NEXT COLOR PLANET / 星街すいせい(official)",
         singer: "Hoshimachi Suisei",
         path: "./music/mp3(13).mp3",
         image: "./img/img12.jpg",
      },
      {
         name: "【引き籠りが】グッバイ宣言／湊あくあ【歌ってみた】",
         singer: "Minato Aqua",
         path: "./music/mp3(14).mp3",
         image: "./img/img13.jpg",
      },
      {
         name: "adrenaline!!! / TrySail (covered by しぐれうい＆大空スバル)",
         singer: "Shigure Ui, Oozora Subaru",
         path: "./music/mp3(16).mp3",
         image: "./img/img15.jpg",
      }
   ],
   render: function () {
      const htmls = this.songs.map((song, index) => {
        return `
            <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
               <div class="thumb"
                  style="background-image: url('${song.image}')">
               </div>
               <div class="body">
                  <h3 class="title">${song.name}</h3>
                  <p class="author">${song.singer}</p>
               </div>
            </div>
         `;
      });
      playList.innerHTML = htmls.join("");
   },
   defineProperties: function () {
      Object.defineProperty(this, 'currentSong', {
         get: function () {
            return this.songs[this.currentIndex]
         }
      })
   },
   handleEvents: function () {
      _this = this;
      var loadCurrentTime;

      const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
         duration: 30000,
         iterations: Infinity
      });
      cdThumbAnimate.pause();

      playBtn.onclick = function() {
         if(app.isPlaying) {
            audio.pause();
         }else {
            audio.play();
            _this.songActive();
         }
      }

      cdThumb.onclick = function() {
         if(app.isPlaying) {
            audio.pause();
         }else {
            audio.play();
            _this.songActive();
         }
      }

      nextBtn.onclick = function() {
         if(_this.isRandom) {
            _this.playRandomSong()
         }else {
            _this.nextSong()
         }
         audio.play();
         _this.songActive();
         _this.scrollToActiveSong();
      }

      prevBtn.onclick = function() {
         if(_this.isRandom) {
            _this.playRandomSong()
         }else {
            _this.prevSong()
         }
         audio.play();
         _this.songActive();
         _this.scrollToActiveSong();
      }

      randomBtn.onclick = function(e) {
         _this.isRandom = !_this.isRandom;
         randomBtn.classList.toggle("active", _this.isRandom);
      }
      
      audio.onplay = function () {
         app.isPlaying = true;
         player.classList.add('playing');
         cdThumbAnimate.play();
         loadCurrentTime = setInterval(function() {
            var now = audio.currentTime;
            var currentTimeText = document.querySelector('.current-time');
            var nowHours = Math.floor(now / 3600);
            var nowMinutes = Math.floor(now / 60) % 60; 
            var a = now - nowHours * 3600 - nowMinutes * 60;
            var nowSeconds = Math.floor(a);
      
            var duration = audio.duration;
            var durationHours = Math.floor(duration / 3600);
            var durationMinutes = Math.floor(duration / 60) % 60; 
      
            if(!isNaN(nowSeconds)) {
               if(durationHours > 0) {
                  if(nowMinutes >= 10) {
                     if(nowSeconds >= 10) {
                        currentTimeText.innerHTML = `${nowHours}:${nowMinutes}:${nowSeconds}`
                     }else {
                        currentTimeText.innerHTML = `${nowHours}:${nowMinutes}:0${nowSeconds}`
                     }
                  }else {
                     if(nowSeconds >= 10) {
                        currentTimeText.innerHTML = `${nowHours}:0${nowMinutes}:${nowSeconds}`
                     }else {
                        currentTimeText.innerHTML = `${nowHours}:0${nowMinutes}:0${nowSeconds}`
                     }
                  }
               }else {
                  if(durationMinutes >= 10) {
                     if(nowMinutes >= 10) {
                        if(nowSeconds >= 10) {
                           currentTimeText.innerHTML = `${nowMinutes}:${nowSeconds}`
                        }else {
                           currentTimeText.innerHTML = `${nowMinutes}:0${nowSeconds}`
                        }
                     }else {
                        if(nowSeconds >= 10) {
                           currentTimeText.innerHTML = `0${nowMinutes}:${nowSeconds}`
                        }else {
                           currentTimeText.innerHTML = `0${nowMinutes}:0${nowSeconds}`
                        }
                     }
                  }else {
                     if(nowSeconds >= 10) {
                        currentTimeText.innerHTML = `${nowMinutes}:${nowSeconds}`
                     }else {
                        currentTimeText.innerHTML = `${nowMinutes}:0${nowSeconds}`
                     }
                  }
               }
            }
         }, 100)
      }

      audio.onpause = function () {
         app.isPlaying = false;
         player.classList.remove('playing');
         cdThumbAnimate.pause();
         clearInterval(loadCurrentTime)
      }

      audio.ontimeupdate = function () {
         if(audio.duration) {
            const progressPercent = Math.ceil(audio.currentTime / audio.duration * 100)
            progress.value = progressPercent;
         }
      }

      progress.onchange = function(e) {
         const seekTime = audio.duration / 100 * e.target.value;
         audio.currentTime = seekTime;
      }

      repeatBtn.onclick = function(e) {
         _this.isRepeat = !_this.isRepeat;
         repeatBtn.classList.toggle("active", _this.isRepeat);
      }

      audio.onended = function() {
         if(_this.isRepeat) {
            audio.play();
         }else {
            nextBtn.click();
         }
      }

      playList.onclick = function (e) {
         const songNode = e.target.closest(".song:not(.active)");
   
         if (songNode || e.target.closest(".option")) {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.songActive();
            audio.play();
         }
      };
   },
   scrollToActiveSong: function () {
      setTimeout(function () {
         $('.song.active').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
         });
      }, 300)
   },
   loadCurrentSong: function () {
      heading.textContent = this.currentSong.name;
      cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
      audio.src = this.currentSong.path;
   },
   nextSong: function () {
      this.currentIndex++
      if(this.currentIndex == this.songs.length) {
         this.currentIndex = 0;
      }
      this.loadCurrentSong()
   },
   prevSong: function () {
      this.currentIndex--
      if(this.currentIndex < 0) {
         this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong()
   },
   playRandomSong: function () {
      let newIndex
      do {
         newIndex = Math.floor(Math.random() * this.songs.length)
      }while(newIndex == _this.currentIndex)
      this.currentIndex = newIndex;
      this.loadCurrentSong();
   },
   songActive: function () {
      lastActive = document.querySelector('.song.active');
      lastActive.classList.remove('active');
      const songNow = $$('.song');
      songNow[this.currentIndex].classList.add('active');
   },
   start: function () {
      this.defineProperties()
      
      this.handleEvents()

      this.loadCurrentSong()

      this.render()
   },
}
app.start();