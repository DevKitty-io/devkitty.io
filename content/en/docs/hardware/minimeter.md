---
title: "⚡ MiniMeter"
description: "Compact LiPo Charger & Battery Meter"
lead: "Compact LiPo Charger & Battery Meter"
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "developers"
weight: 20
toc: true
---
{{< alert icon="🛈" context="warning" text="Skip ahead to the mods if you're just looking to install your MiniMeter!" />}}

![](/images/products/MiniMeter/MiniMeter.JPG)

## Overview
**MiniMeter is a compact LiPo Charger & Battery Meter**.  The minimal footprint can be dropped into any existing design or easily powers microcontrollers!  Every DevKitty design is compatible with MiniMeter.

##### Features
- 🔋 Measure Battery Level 
- ⚡ LiPo Charging
- ⚡ Toggle Charging Speed
- ⚡ Constant 3.3V Output (LDO)

## Usage
On the CutieCat, its as simple as soldering MiniMeter into place!
You can hook up an external LiPo battery & connect a switch.

## Components
|Name|Part|Description|
|---|---|---|
|MAX17048|Custom Circuit Board design|Comes with all SMD components pre-soldered for user ease.|
|AP2112K|Low Dropout Regulator|Comes with all SMD components pre-soldered for user ease.|
|MCP73318|Custom Circuit Board design|Comes with all SMD components pre-soldered for user ease.|

## Pinout
|#|Name|Description|
|---|---|---|
|1|GND||
|2|3V3||
|3|SDA|Read battery % over I2C|
|4|SCL|Read battery % over I2C|
|5|GND||
|6|VCC|Power in & out*|
|7|BAT|Battery +|
|8|EN|Short to `BAT`|