---
title: "Firmware Update: Browser"
description: "How to flash your DevKitty through Google Chrome"
lead: "How to flash your DevKitty through Google Chrome"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 100
toc: true
---

{{< alert icon="ℹ️" context="warning" text="WebSerial is an experimental feature that only works in Chrome-based browsers." />}}

### Step 1: Downloads
* Download the [Chrome Browser]()
* Download the latest [DevKitty Firmware](https://github.com/HakCat-Tech/USB-DevKitty/releases/download/v1.2.1-beta/USB-DevKitty.bin)

### Step 2: Place Your DevKitty in Flash Mode
Next, you'll have to place your DevKitty into `DFU` (Device Firmware Upgrade) mode!  You can do this in 2 ways:

**Option 1**:
1. Plug the DevKitty into your computer
2. **Hold** down the `0` button
3. **Tap & Release** the `RST` button  

**Option 2**:
1. **Hold** down the `0` button
2. Plug in the DevKitty
3. **Release** the `0` button

<img src="/images/buttons.png" title="DevKitty Image"/>
<br /><br />

### Step 3: Flashing
1. Open the [Web Flasher Application](https://nabucasa.github.io/esp-web-flasher/) in a Chrome browser!
2. Connect to Your DevKitty, which identifies as an `ESP32-S2` device
3. Upload your DevKitty `.bin` firmware file! 

<img src="/images/esp_1.png" title="ESP Web Flasher Image"/>
<br /><br />

<img src="/images/esp_web_2.png" title="ESP Web Flasher Image"/>
<br /><br />

**Step 6: Once connected, click "Erase" & confirm.**

<img src="/images/esp_web_3.png" title="ESP Web Flasher Image"/>
<br /><br />
<img src="/images/esp_web_4.png" title="ESP Web Flasher Image"/>
<br /><br />

#### Congrats! Your DevKitty is ready to hack.
Plug in your DevKitty and watch it mount as a flash drive. You can open the drive to explore preinstalled payloads and begin to add your own.

You can also connect via the web interface and run payloads from any device! The network name is **DevKitty** and the password is **DevKitty123** to connect. Once connected, navigate to `192.168.4.1` in a browser.
