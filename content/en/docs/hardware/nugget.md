---
title: "Nugget (discontinued)"
description: "Hardware docs for the WiFi Nugget"
lead: "Hardware docs for the WiFi Nugget"
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: true
images: []
menu:
  docs:
    parent: "developers"
weight: 10
toc: true
---
## Overview
**CutieCat is a modular cat-shaped console that supports [Adafruit QT-Py](https://www.adafruit.com/category/595) & [Seeed Studio Xiao](https://www.seeedstudio.com/xiao-series-page) style microcontrollers.**



These tiny but powerful MCU's support WiFi, Bluetooth, Native USB, and all the other fun hacking features we love, in a minimal footprint.  CutieCats ship with the [Xiao ESP32-C3]() but you can easily swap in your own microcontroller!

<!--- --->

## Features

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/CutieCat/v0-CutieCat-Peripherals.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="/images/CutieCat/v0-CutieCat-RF.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/images/CutieCat/v0-CutieCat-Expansion.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/images/CutieCat/v0-CutieCat-Power.png" class="d-block w-100" alt="...">
      <!-- <div class="carousel-caption d-none d-md-block">
          <p>3. Solder the sockets on the reverse side!</p>
      </div> -->
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

#### At a Glance
- 🔋 Battery Level + Charging
- 📡 WiFi, Bluetooth, GPS
- 💾 MicroSD Storage
- 🕹️ Modular Expansion
- 🚦 RGB LED

#### Components
|Name|Part|Description|
|---|---|---|
|CutieCat PCB|Custom Circuit Board design|Comes with all SMD components pre-soldered for user ease.|
|D-Pad|Mini Soft-Touch Button|Soft, clicky buttons.|
|Screen|[SH1106 OLED Display]() |128x64px 1.3" OLED Display (I2C)|
|Antennas|u.fl to RP-SMA||
|Micro-SD||Push-push connector.|
<!-- |DevKitty PCB|1.6mm 2 layer PCB|with NeoPixel & Buttons pre-soldered|
|Microcontroller|S2 Mini|An ESP32S2 breakout board in the D1 Mini form factor.|
|Screen|SH1106|128x64 px 1.3" OLED Display|
|Headers|`x2` Short Female, `x2` Short Male, `x1` Long Female|Various expansion headers.  Only the male headers are necessary!| -->

## Specs
![](images/CutieCat/v0-CutieCat-Dimensions.png)

<!--- positioning specs --->

## Expansion & Headers
