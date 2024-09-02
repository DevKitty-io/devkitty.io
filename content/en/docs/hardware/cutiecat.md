---
title: "🐈 CutieCat"
description: "v0.0 CutieCat Specs & Features"
lead: "CutieCat Specs & Features!"
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "developers"
weight: 10
toc: true
---
## Overview
**CutieCat is a modular cat-shaped console that supports [Adafruit QT-Py](https://www.adafruit.com/category/595) & [Seeed Studio Xiao](https://www.seeedstudio.com/xiao-series-page) style microcontrollers.**



These tiny but powerful MCU's support WiFi, Bluetooth, Native USB, and all the other fun hacking features we love, in a minimal footprint.  CutieCats ship with the [Xiao ESP32-S3]() but you can easily swap in your own microcontroller!

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
|D-Pad|Mini Soft-Touch Button|[Soft, clicky buttons.](https://www.adafruit.com/product/3983)|
|Screen|[SH1106 OLED Display]() |128x64px 1.3" OLED Display (I2C)|
|Antennas|u.fl to RP-SMA|PCB-mounted external antenna(s)|
|Micro-SD||Push-push connector for Micro-SD Cards.|

## Specs
![](images/CutieCat/v0-CutieCat-Dimensions.png)

<!--- positioning specs --->

## Expansion & Mods
CutieCat makes prototyping a breeze!  The `P1` breakout header on the side lets you easily breadboard your ideas.  CutieCat also has 2 JST connectors `P3` & `P3` that let you plug & play with a range of [Sparkfun Qwiic]() or [Adafruit Stemma QT]() Sensors!

CutieCat also features a small 3-pin JST connector `P4` for controlling LED light strips.

Check out the [mods guide]() for more info on the modchip!

## Changelog
Check out the GitHub for a more extensive changelog.  
`v0.0`