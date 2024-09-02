---
title: "Hardware"
description: "the DevKitty Wardriver makes WiFi reconnaissance pocket-sized and cat-themed!"
lead: "the DevKitty Wardriver makes WiFi reconnaissance pocket-sized and cat-themed!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "advanced-projects"
weight: 90
toc: true
---
![](/images/wardriver/devkitty-wardriver-wide.JPG)

## What You Need 
Wardriving combines wireless reconnaissance & location data - since DevKitty boards are already capable of sniffing WiFi & Bluetooth, this means all you need is a GPS module!

- MicroSD Card
- [GPS Module]()
- [Battery Pack]() (optional)

## Official Hardware
For `v0` DevKitty boards, our UART expansion header makes it easy to plug-and-play GPS modules without any fuss!  [You can buy one here.]()
<!-- image here -->


## GPS Modules
The Wardriver Firmware should work with any UART GPS module!  Our current [plug-and-play GPS]() uses the `ATGM336H` because of its small footprint.  We've tested the following:
- NEO-6M 
- NEO-M8N
- ATGM336H

![](/images/wardriver/wiring-back.JPG)

<!-- 
The DevKitty Wardriver Firmware logs data to the onboard MicroSD card so you can easily map WiFi devices & visualize data!  Currently supports CutieCat & older Nugget boards!

##### Features
This project is currently in `alpha` release so features will be changing heavily.  the DevKitty Wardriver currently works best as a [WiGLE](https://wigle.net) companion!

- Built-In Flash Drive (for logs)
- SD Card Support
- Promiscuous WiFi Scanning
- WiGLE.net compatible logs
- Cats! -->

## Pinout Guide
This should work for any UART GPS module.  We recommend using one of the following!  The ATGM336H is our favorite for its small footprint.




|DevKitty Header Pin|GPS Pin|
|---|---|
|`5V`|`VCC`|
|`GND`|`GND`|
|`D4`|`RX`|
|`A0`|`TX`|
|`Not Connected`|`PPS`|

![](/images/wardriver/wiring.JPG)

## Mods