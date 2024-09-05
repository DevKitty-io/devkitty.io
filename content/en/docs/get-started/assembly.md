---
title: "⚒️ Assembly Guide"
description: "Soldering & assembling your DevKitty!"
lead: "Assembling & soldering your new CutieCat!"
date: 2023-05-11T00:52:00-07:00
lastmod: 2023-05-11T00:52:00-07:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "assembly-5560147284bbc5e978bad89bf75506a4"
weight: 10
toc: true
---
{{< alert icon="⚠️" context="warning" text="Updated pics & assembly video coming by Sep 06 2024." />}}

<!-- #update# -->

## ⚙ Parts
![](/images/CutieCat/v0_CutieCat-Parts.png)

<!-- ![](/images/CutieCat/v0_CutieCat-Package.png) -->

| Part | Description |
|---|---|
|Microcontroller|ESP32-S3 WiFi & Bluetooth MCU|
|Screen|128x64px SH1106 OLED Display|
|Pin Header|6 Pin Breakout for CutieCat Add-ons|
|Antenna (Patch)|Omni Antenna|
|Antenna (External)|Long-range Antenna|

{{< alert icon="ℹ️" context="info" text="Learn more about component selection on our hardware guide." />}}

<!-- ## ℹ️ Soldering Quick Tips
For more tips, check out our soldering guide. -->

## 🗒 Steps

### 1. Place the ESP32
<div id="Step-1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-1.1.png" class="d-block w-100" alt="">
      <div class="carousel-caption d-none d-md-block">
          <p>a. Melt a tack of solder onto the top right pad.</p>
      </div>
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-1.2.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
          <p>b. Reheat the blob and place the microcontroller!</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Step-1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Step-1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</br>

- Start by melting a small "tack" of solder to one of the CutieCat microcontroller pads.  This will help us place the ESP32 before committing.
- Center the ESP32 on the microcontroller footprint.  
- Reheat the tack of solder until it melts, while pressing down the ESP32.  Don't worry about how the first joint looks!
- Let the solder cool!  If you need to readjust the microcontroller, simply reheat the joint.

### 2. Solder the ESP32
{{< alert icon="⚠️" context="danger" text="Be extra careful not to burn the switch connector, or bridge neighboring pins." />}}
<div id="Step-2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-2.1.png" class="d-block w-100" alt="">
      <!-- <div class="carousel-caption d-none d-md-block">
          <p>a</p>
      </div> -->
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-2.2.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
          <p>Solder the rest of the pins!</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Step-2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Step-2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</br>

- a. Solder each remaining pad on the microcontroller!
- b. Ensure the connection is solid by bridging the ESP32 pad & PCB pads
- c. Avoid burning the switch connector! *

**Switch connector will be moved in update v0.1 design*

### 3. Solder the Expansion Header
<div id="Step-3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-3.1.png" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-3.2.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Step-3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Step-3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</br>

- a. Insert the 6-Pin Header on the Side
- b. Lay the board & header flush on a flat surface
- c. Solder the joints!


### 4. Prep + Solder the Screen
{{< alert icon="⚠️" context="warning" text="Press down on center of screen - the edges are really fragile!" />}}
<div id="Step-4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-4.1.png" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-4.2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-4.3.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Step-4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Step-4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</br>

- a. Add double-sided foam tape at the bottom of the screen footprint (not pictured)
- b. Center & press the screen in place.
- c. Solder the screen joints on the back.
<!-- note: correct screen askew -->

### 5. Antenna & Case Assembly
{{< alert icon="🛈" context="warning" text="Read our long-range mod guide before adding the external antenna!!" />}}
<div id="Step-5" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-5.1.png" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-5.2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/Soldering-Guide/Step-5.3.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Step-5" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Step-5" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</br>
 
- a. Snap the patch antenna onto the ESP32 u.fl connector
- b. Insert the D-Pad into the Top Enclosure
- c. Place the CutieCat in face-down
- d. Snap-on the Back Enclosure!

### 6. Quality Assurance
![](/images/update.JPG)

- Plug in your CutieCat with USB Type C
- With your board fully assembled, it should power on the QA Firmware!
- Check out our [Firmware Guide]() to load new firmware.

{{< alert icon="🛈" context="danger" text="If your board doesn't work, check our troubleshooting guide." />}}

## 🔧 Additional Mods
![](/images/update.JPG)

Check out our [mods]() section for more, including adding the long-range antenna!

<!-- #update# -->
- 🔋 [Battery Mod]()
- 📡 [Long-Range Antenna]()
- 🛰 [GPS Mod]()