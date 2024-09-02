---
title: "Config"
description: "How to configure WiFi & USB Settings on ScriptKitty"
lead: "Configure ScriptKitty Settings"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 30
toc: true
---
To edit the default WiFi network on ScriptKitty, or change the default USB device identifiers on ScriptKitty, you can simply edit the `config.txt` file on the flash drive!  To reload the settings, simply restart your CutieCat!

## Settings
|Parameter|Description|Value|
|---|---|---|
|`network`|WiFi AP SSID|anything without spaces|
|`password`|WiFi AP Password|must be 8 or more characters|
|`vid`|USB Vendor ID|Hex value like `0x00`|
|`pid`|USB Product ID|Hex value like `0x00`|

## Emulate USB Devices
By default, the ScriptKitty Firmware emulates an Apple Keyboard to bypass MacOS flagging non-Apple keyboards.  

You can easily modify the type of device it emulates by editing the `config.txt` file on the flash drive!  All you have to do is edit the `VID` and `PID` parameter - which correspond to **Vendor ID** and **Product ID** respectively.  

You can use a USB vendor lookup tool like this [open database](http://www.linux-usb.org/usb.ids) to choose a device to emulate.

On Linux / Mac you can check if this worked using:
```
lsusb
```

On Windows, check your Device Manager!

<!-- More docs coming soon. -->



<!-- ---
--
The DevKitty supports adding payloads both through the web interface and directly over USB. 

To start, let's write a simple DuckyScript Payload and save it over USB.

**Step 1: Write & Save a Simple Script**

In your word processer of choice, write out a simple script and save it a plain .TXT file
```bash
GUI SPACE
DELAY 100
STRING Terminal
ENTER
DELAY 1000
STRING curl parrot.live
ENTER
```

**Step 2: Plug in Your DevKitty**

Once you've plugged in your DevKitty with a USB type C cable that supports data transfer, it should appear on your computer as a flash drive. 

the DevKitty comes pre-loaded with 4 different folders to cover 3 operating systems and frequently used payloads: 
- Linux
- Mac
- Windows 
- Starred payloads 

You can re-name these folders if you wish.

Inside each folder, you can add up to 3 sub-folders to organize your payloads by category. Each sub-folder can hold 3 payloads, for a maximum of 36 payloads total.

{{< alert icon="⛔️" text="You can add more than 36 payloads and still access them via the web interface, but they will not be visible via the button interface. " />}}

**Step 3: Drag & Drop Your Payload to the DevKitty**

We'll drop our payload in a "Test" folder under the "Mac" operating system folder. The file structure will look like this:



Once we drop our file onto the DevKitty, we can see it by pressing the left button for the Mac folder, then selecting the "Test" folder.

<img src="/images/load_scriptkitty_1.png" title="DevKitty Image"/>
<br /><br />

**Step 4: Select & Run Your Payload**
Next, we select the "Test" folder we just made by pressing the left button.

<img src="/images/load_scriptkitty_2.png" title="DevKitty Image"/>
<br /><br />
Inside the "Test" folder, we should see our payload.TXT! 

We can run our payload by pressing the up button.

<img src="/images/load_scriptkitty_3.png" title="DevKitty Image"/>
<br /><br />

When the payload starts executing, the LED will turn red. 

You can watch each command execute on the built-in screen while the payload runs.

<img src="/images/load_scriptkitty_4.png" title="DevKitty Image"/>
<br /><br />

That's it! We've created a test payload and run it on the DevKitty using the USB interface. -->