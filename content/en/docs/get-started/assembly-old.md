---
title: "⚒️ Nugget Assembly Guide"
description: "Soldering & assembling your DevKitty!"
lead: "Assembling & soldering your new CutieCat!"
date: 2023-05-11T00:52:00-07:00
lastmod: 2023-05-11T00:52:00-07:00
draft: true
images: []
menu:
  docs:
    parent: ""
    identifier: "dev-kit-assembly-5560147284bbc5e978bad89bf75506a4"
weight: 10
toc: true
---

## Parts

Buy the [DevKitty soldering kit on our webstore](https://shop.devkitty.io)! 
| Part | Description | Count |
| --- | --- | --- |
| DevKitty PCB | Partially assembled PCB |1|
| [Microcontroller](https://www.amazon.com/HiLetgo-ESP32-S2FN4R2-ESP32-S2-Type-C-Connect/dp/B0B291LZ99/ref=sr_1_1?crid=3RFAV6TMVXMQB&keywords=s2+mini&qid=1683797716&sprefix=s2+mini%2Caps%2C1335&sr=8-1) | S2 Mini (ESP32-S2 Breakout) | 1 |
| [Screen](https://www.amazon.com/AZDelivery-Pixel-Display-Arduino-Raspberry/dp/B07FYG8MZN/ref=sr_1_1?keywords=SH1106+i2c&qid=1683797747&sr=8-1) | SH1106 I2C Display | 1 |
| Male Header (Short) | S2 Mini Mounting Headers |2|
| *Female Header (Short) | S2 Mini Breakout Headers |2|
| *Female Header (Long) | Expansion Header |1|

[Learn more about these parts →]()

Your DevKitty PCB comes with surface mount `Buttons`, `NeoPixel`, and `Qwiic Connector` pre-soldered since these are a little tricky!

## Steps

#### 1. Prep the Mounting Headers
Start by soldering the `male headers` to your DevKitty PCB, button side up!
- The short side of the pin headers should poke through
- Using a breadboard can help keep them in place! If not you can rest it carefully flush on the table.
![meep](images/1-Prep.png)

{{< alert icon="ℹ️" context="info" text="Check out our slim mod before continuing if you want a smaller form-factor!" />}}

#### 2. Assemble the Microcontroller
`This step is optional!`  

Assemble the microcontroller, by soldering the `short female pin headers` to the inside rows of the S2 Mini.
- You can flip the microcontroller over on a flat surface to solder the pins.  
- Be careful not to get solder in the other holes!
![meep](images/3-Microcontroller.png)

Next, press the `S2 Mini` onto the headers on the back of your DevKitty - and solder!
![meep](images/3-Mount.png)

#### 3. Solder the Expansion Header
Next, solder on the `long female header` to the side of your DevKitty PCB.  You should be able to lay the board flush on a table.
![meep](images/2-Headers.png)

#### 4. Prep & Solder the Screen 
Next, peel off the adhesive tape on your DevKitty PCB, and gently push the `screen` in place.  
- Be careful to avoid the edges of the screen! It can crack.
<br>
<br>
<br>
![meep](images/4-Screen.png)

#### 5. Assemble the Case
Finally, assemble the snap fit case!  

1. Insert the `Bumper Button` into the `Lower Enclosure`
2. Press fit the assembled DevKitty into the `Lower Enclosure`
3. Next, place the `D-Pad` into the `Upper Enclosure`, face down
4. Flip over the `Lower Enclosure`, and snap it into place!
![meep](images/5-Case.png)

#### 6. Power Your DevKitty!
Plug your DevKitty into a USB-C power source.  It should run a simple function tester on the screen and Neopixel if successful.

Now we're ready to update our firmware!

![meep](images/5-Case.png)