(function(){"use strict";const e=document.querySelectorAll("[data-accordion]");e.forEach(e=>{e.addEventListener("click",()=>{const t=e.parentElement;t.classList.toggle("active")})})})(),function(){"use strict";const s=document.querySelectorAll("[data-tab-group]"),e=document.querySelectorAll("[data-tab-nav] [data-tab]");function t(e,t,n){e.querySelectorAll("[data-tab]").forEach(e=>{e.classList.remove("active")}),t.querySelectorAll("[data-tab-panel]").forEach(e=>{e.classList.remove("active")});const s=e.querySelector(`[data-tab="${n}"]`);s.classList.add("active");const o=t.querySelector(`[data-tab-panel="${n}"]`);o.classList.add("active")}function n(e,n){if(e.dataset.tabGroup){const s=document.querySelectorAll(`[data-tab-group=${e.dataset.tabGroup}] > [data-tab-nav]`),o=document.querySelectorAll(`[data-tab-group=${e.dataset.tabGroup}] > [data-tab-content]`);s.forEach((e,s)=>{const i=o[s];if(i===0[0])return;t(e,i,n)})}else{const s=e.querySelector("[data-tab-nav]"),o=e.querySelector("[data-tab-content]");t(s,o,n)}}s.forEach(e=>{const s=e.querySelector("[data-tab-nav]"),t=s.querySelectorAll("[data-tab]"),o=t[0].getAttribute("data-tab");n(e,o),t.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.tab;n(e,s)})})});function o(t){let o=Array.from(e).indexOf(this),s=e.length,n;s>1&&(t.key==="ArrowRight"&&(n=e[(o+1)%s],o===s-1&&(n=e[0]),n.focus(),n.click()),t.key==="ArrowLeft"&&(n=e[(o-1+s)%s],o===0&&(n=e[s-1]),n.focus(),n.click()))}e.forEach(function(e){e.addEventListener("keydown",o)})}();class LiteYTEmbed extends HTMLElement{shadowRoot;domRefFrame;domRefImg;domRefPlayButton;static isPreconnected=!1;isIframeLoaded=!1;constructor(){super(),this.setupDom()}static get observedAttributes(){return["videoid","playlistid","videoplay","videotitle"]}connectedCallback(){this.addEventListener("pointerover",()=>LiteYTEmbed.warmConnections(this),{once:!0}),this.addEventListener("click",()=>this.addIframe()),this.setupComponent()}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(e){this.setAttribute("videoid",e)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(e){this.setAttribute("playlistid",e)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(e){this.setAttribute("videotitle",e)}get videoPlay(){return this.getAttribute("videoplay")||"Play"}set videoPlay(e){this.setAttribute("videoplay",e)}get videoStartAt(){return this.getAttribute("videoStartAt")||"0"}get autoLoad(){return this.hasAttribute("autoload")}get autoPause(){return this.hasAttribute("autopause")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}set posterQuality(e){this.setAttribute("posterquality",e)}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}set params(e){this.setAttribute("params",e)}get disableNoscript(){return this.hasAttribute("disablenoscript")}setupDom(){const e=this.attachShadow({mode:"open"});let t="";window.liteYouTubeNonce&&(t=`nonce="${window.liteYouTubeNonce}"`),e.innerHTML=`
      <style ${t}>
        :host {
          --aspect-ratio: var(--lite-youtube-aspect-ratio, 16 / 9);
          --aspect-ratio-short: var(--lite-youtube-aspect-ratio-short, 9 / 16);
          --frame-shadow-visible: var(--lite-youtube-frame-shadow-visible, yes);
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          aspect-ratio: var(--aspect-ratio);
        }

        @media (max-width: 40em) {
          :host([short]) {
            aspect-ratio: var(--aspect-ratio-short);
          }
        }

        #frame, #fallbackPlaceholder, iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder, slot[name=image]::slotted(*) {
          object-fit: cover;
          width: 100%;
        }

        @container style(--frame-shadow-visible: yes) {
          #frame::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background-image: linear-gradient(180deg, #111 -20%, transparent 90%);
            height: 60px;
            width: 100%;
            z-index: 1;
          }
        }

        #playButton {
          width: 68px;
          height: 48px;
          background-color: transparent;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
          z-index: 1;
          border: 0;
          border-radius: inherit;
        }

        #playButton:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }

        #playButton,
        #playButton:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          cursor: inherit;
        }

        /* Post-click styles */
        .activated {
          cursor: unset;
        }

        #frame.activated::before,
        #frame.activated > #playButton {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <slot name="image">
            <source id="webpPlaceholder" type="image/webp">
            <source id="jpegPlaceholder" type="image/jpeg">
            <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">
          </slot>
        </picture>
        <button id="playButton" part="playButton"></button>
      </div>
    `,this.shadowRoot=e,this.domRefFrame=e.querySelector("#frame"),this.domRefImg={fallback:e.querySelector("#fallbackPlaceholder"),webp:e.querySelector("#webpPlaceholder"),jpeg:e.querySelector("#jpegPlaceholder")},this.domRefPlayButton=e.querySelector("#playButton")}setupComponent(){const e=this.shadowRoot.querySelector("slot[name=image]");e&&e.assignedNodes().length===0&&this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),(this.autoLoad||this.isYouTubeShort()||this.autoPause)&&this.initIntersectionObserver(),this.disableNoscript||this.injectSearchNoScript()}attributeChangedCallback(e,t,n){if(t!==n&&(this.setupComponent(),this.domRefFrame.classList.contains("activated"))){this.domRefFrame.classList.remove("activated");const e=this.shadowRoot.querySelector("iframe");e&&e.remove(),this.isIframeLoaded=!1}}injectSearchNoScript(){const e=document.createElement("noscript");this.prepend(e),e.innerHTML=this.generateIframe()}generateIframe(e=!1){let n=e?0:1;const s=this.noCookie?"-nocookie":"";let t;return this.playlistId?t=`?listType=playlist&list=${this.playlistId}&`:t=`${this.videoId}?`,this.autoPause&&(this.params=`enablejsapi=1`),this.isYouTubeShort()&&(this.params=`loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,n=1),`
<iframe credentialless frameborder="0" title="${this.videoTitle}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
  src="https://www.youtube${s}.com/embed/${t}autoplay=${n}&${this.params}"
></iframe>`}addIframe(e=!1){if(!this.isIframeLoaded){const t=this.generateIframe(e);this.domRefFrame.insertAdjacentHTML("beforeend",t),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.attemptShortAutoPlay(),this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){this.testPosterImage(),this.domRefImg&&this.domRefImg.fallback&&(this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg.fallback.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`))}async testPosterImage(){setTimeout(()=>{const t=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,e=new Image;e.fetchPriority="low",e.referrerPolicy="origin",e.src=t,e.onload=async e=>{const t=e.target,s=t?.naturalHeight==90&&t?.naturalWidth==120;s&&(this.posterQuality="hqdefault");const o=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`;this.domRefImg&&this.domRefImg.webp&&(this.domRefImg.webp.srcset=o);const n=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg&&this.domRefImg.fallback&&(this.domRefImg.fallback.loading=this.posterLoading),this.domRefImg&&this.domRefImg.jpeg&&(this.domRefImg.jpeg.srcset=n),this.domRefImg&&this.domRefImg.fallback&&(this.domRefImg.fallback.src=n,this.domRefImg.fallback.loading=this.posterLoading)}},100)}initIntersectionObserver(){const e={root:null,rootMargin:"0px",threshold:0},t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&!this.isIframeLoaded&&(LiteYTEmbed.warmConnections(this),this.addIframe(!0),t.unobserve(this))})},e);if(t.observe(this),this.autoPause){const e=new IntersectionObserver((e)=>{e.forEach(e=>{if(e.intersectionRatio!==1){const e=this.shadowRoot.querySelector("iframe");e&&e.contentWindow&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}})},{threshold:1});e.observe(this)}}attemptShortAutoPlay(){this.isYouTubeShort()&&setTimeout(()=>{const e=this.shadowRoot.querySelector("iframe");e&&e.contentWindow&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},2e3)}isYouTubeShort(){return this.getAttribute("short")===""&&window.matchMedia("(max-width: 40em)").matches}static addPrefetch(e,t){const n=document.createElement("link");n.rel=e,n.href=t,n.crossOrigin="true",document.head.append(n)}static warmConnections(e){if(LiteYTEmbed.isPreconnected||window.liteYouTubeIsPreconnected)return;LiteYTEmbed.addPrefetch("preconnect","https://i.ytimg.com/"),LiteYTEmbed.addPrefetch("preconnect","https://s.ytimg.com"),e.noCookie?LiteYTEmbed.addPrefetch("preconnect","https://www.youtube-nocookie.com"):(LiteYTEmbed.addPrefetch("preconnect","https://www.youtube.com"),LiteYTEmbed.addPrefetch("preconnect","https://www.google.com"),LiteYTEmbed.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),LiteYTEmbed.addPrefetch("preconnect","https://static.doubleclick.net")),LiteYTEmbed.isPreconnected=!0,window.liteYouTubeIsPreconnected=!0}}customElements.define("lite-youtube",LiteYTEmbed)