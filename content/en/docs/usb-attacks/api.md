---
title: "Live Control API"
description: "Run Commands live"
lead: "Live Command Execution API"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "fundamentals"
weight: 110
toc: true
---

The DevKitty supports live command both through a web interface and via a web API. 

## Web Interface
To access the web interface and run payloads live, connect to the DevKitty's Wi-Fi access point and visit [http://192.168.4.1/create.html](http://192.168.4.1/create.html)

<img src="/images/live_control_1.png" title="WiFi Interface Image"/>
<br /><br />
From this page, you can create, run, and save payloads to your DevKitty.

## Python Script
If you want to use a scrip to send DuckyScript commands or files to your DevKitty, the following scripts will help you get started. 
<br /><br />
The following simple Python script can be used to send individual DuckyScript commands from your computer while connected to the DevKitty's Wi-Fi network.
```
import requests, base64
url = 'http://192.168.4.1/runlive.php'
while True:
    pew = input("Enter command:\n")
    try: requests.post(url, base64.b64encode(pew.encode()))
    except: print("Sent")
```
If you want to sent entire DuckyScript payloads, you can use the following short script to send .TXT files.
```
import requests, base64
url = 'http://192.168.4.1/runlive.php'

while True:
    pew = input("Enter path to Duckyscript File:\n")
    file = open(pew, "r")
    payload = file.read()
    try: requests.post(url, base64.b64encode(payload.encode()))
    except: pew = input("Sent, press enter to send another:\n")
```