---
title: "Flashing via Command Line"
description: "Flashing your DevKitty via Command Line, using ESPTool"
lead: "Flashing your DevKitty via Command Line, using ESPTool"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 110
toc: true
---
{{< alert icon="ℹ️" context="info" text="Unless you hate Chrome, we recommend checking out our browser flashing guide for an easier experience." />}}

### Step 1: Downloads
* Download the latest [Firmware](https://github.com/DevKitty/USB-DevKitty/releases/download/v1.2.1-beta/USB-DevKitty.bin)
* Download [ESPTool](https://github.com/espressif/esptool)



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

### Step 3: Find Serial Port & Erase Flash

1. Find the Serial Port (`SERIAL_PORT`) your DevKitty is connected to:

- **Windows**: Found via Device Manager
- **MacOS**:  `ls /dev/cu*`
- **Linux**: `ls /dev/tty*`

2. Erase the flash:

- **Windows / Mac / Linux**:
```bash
esptool --chip esp32s2 -p <SERIAL_PORT> erase_flash
```

### Step 4: Flashing

Run the following command to flash the latest release file to your DevKitty!

- **Windows / Mac / Linux**
```bash
esptool --chip esp32s2 -p <SERIAL_PORT> write_flash -z 0x0 <binary>.bin
```

#### Your DevKitty is ready to hack!

Once flashing is finished, reset your DevKitty to complete the update.

<!-- Plug in your DevKitty and watch it mount as a flash drive. You can open the drive to explore preinstalled payloads and begin to add your own.

You can also connect via the web interface and run payloads from any device! The network name is **DevKitty** and the password is **DevKitty123** to connect. Once connected, navigate to `192.168.4.1` in a browser. -->