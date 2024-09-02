---
title: "🖥️ Firmware Guide"
description: "Learn to flash & pick the right firmware for DevKitty devices."
lead: "Pick & flash new firmware for your CutieCat!"
date: 2023-05-11T00:52:00-07:00
lastmod: 2023-05-11T00:52:00-07:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "dev-kit-assembly-5560147284bbc5e978bad89bf75506a4"
weight: 10
toc: true
---
{{< alert icon="ℹ️" context="info" text="Our firmware is currently experimental as we continue to explore & make improvements to the DevKitty ecosystem." />}}

![](/images/update.JPG)

<!-- #update# -->
<!-- add more pictures -->

CutieCat comes flashed with [QA Firmware](https://github.com/DevKitty-io/QA-Firmware) to test basic functionality.  To start hacking you'll have to load new firmware.  If you're adventurous you can even learn to write your own!

## 💻 Firmware Guide
{{< alert icon="ℹ️" context="warning" text="Pick a firmware, and keep reading to learn how to flash these projects." />}}

##### Official Firmware  
We're constantly adding new features and developing cool hacking tools for the ESP32.  Here's a couple projects we've built from [your suggestions]():
- [ScriptKitty](): Attack computers over a USB connection with Keystroke Injection
- [DevKitty Wardriver](): Scan & Map WiFi Devices (WiGLE compatible)
- [DevKitty Sniffer](): Gather WiFi & Bluetooth Recon (Kismet compatible)

<!-- #update# -->
<!-- post sniffer source code -->

![](/images/update.JPG)

##### CircuitPython
Our ESP32-based designs are supported by [CircuitPython](), a lightweight version of Python that lets you develop on the go!

With CircuitPython, you can build hardware prototypes in minutes.  We're working on adding some example projects, but you can check out some [great guides by Adafruit]() in the mean time.  Our boards feature a Qwiic / Stemma QT compatible connector that lets you easily interface with their sensors!

[Download the binary here]().

<!-- ##### Community Projects
- [DevKitty Wardriver]()
- [ScriptKitty]()

##### Arduino -->

## ⚡ Flashing Guide
{{< alert icon="ℹ️" context="warning" text="This step uses web serial to flash your board from a web browser, a feature currently only supported through Chrome-based browsers.  If you wish to flash via command-line, read our developer guide." />}}

#### Step 1: DFU Mode
Your ESP32 based board needs to enter `Device Firmware Upgrade` (DFU) mode to be upgraded.  Some breakout boards have auto-reset circuits which let the board automatically enter this mode, but you may need to do it manually.

![](/images/update.JPG)

 **DFU Method 1**:
1. **Hold** down the `Boot` button
2. Plug in the DevKitty
3. **Release** the `Boot` button

**DFU Method 2**:
1. Plug CutieCat into your computer
2. **Hold** down the `Boot` button
3. **Press & Release** the `Reset` button  

#### Step 2: Download Your Firmware 
Download the appropriate `.bin` binary file from the firmware guide above.

*We're working on adding the binaries to the web UI in the next month!*

#### Step 3: Flash your binary!
![](/images/update.JPG)

- In a Chrome browser, visit [update.devkitty.io](https://update.devkitty.io)
- Erase the flash chip
- Upload the binary file to the web UI.  Leave the offset at `0x0`
- Hit flash and wait for the upload to finish!