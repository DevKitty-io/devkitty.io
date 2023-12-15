---
title: "DevKitty Wardriver"
description: "the DevKitty Wardriver makes WiFi reconnaissance pocket-sized and cat-themed!"
lead: "the DevKitty Wardriver makes WiFi reconnaissance pocket-sized and cat-themed!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "advanced-projects"
weight: 110
toc: true
---
![](/images/wardriver/devkitty-wardriver-wide.JPG)

## Features
This project is currently in `alpha` release so features will be changing heavily.  the DevKitty Wardriver currently works best as a [WiGLE](https://wigle.net) companion!

- Built-In Flash Drive (for logs)
- SD Card Support
- Promiscuous WiFi Scanning
- WiGLE.net compatible logs
- Cats!

## Hardware
This should work for any UART GPS module.  We recommend using one of the following!  The ATGM336H is our favorite for its small footprint.
- NEO-6M 
- NEO-M8N
- ATGM336H

![](/images/wardriver/wiring-back.JPG)

|DevKitty Header Pin|GPS Pin|
|---|---|
|`5V`|`VCC`|
|`GND`|`GND`|
|`D4`|`RX`|
|`A0`|`TX`|
|`Not Connected`|`PPS`|

![](/images/wardriver/wiring.JPG)

## Firmware
the DevKitty Wardriver source code is available at [github.com/LyndLabs/Wardriver](https://github.com/LyndLabs/Wardriver), but not available as a binary yet.  This is coming soon!