---
layout: default
resource: true
categories: [Tools]
title: QR Code Generator
description: Tool to create an image of a QR code from a string
include_scripts:
  - qrcode.min.js
  - qr_code_generator.js
---

<fieldset>
<label for="text">Text to encode in a QR code</label>
<input id="text" type="text" placeholder="Enter your text here" style="width:80%" /><br />
<button type="submit" id="submit">Submit</button>
</fieldset>

<div id="qrcode"></div>
After entering your text above and typing enter, right click on the QR code 
above and save the image.

---

# How can you trust that putting text in this page is safe and it won't be sent out of your browser?

## Verify this page is using an unmodified qrcodejs library

This page uses the [qrcodejs](https://github.com/davidshimjs/qrcodejs) library,
written in [July 2013](https://github.com/davidshimjs/qrcodejs/commit/06c7a5e134f116402699f03cda5819e10a0e5787).
You can see that this library is what's in use on the page by looking at this 
page's source.

You can see that the qrcode.js library this page uses is the same as the one on
GitHub by comparing the hash of the library as of 2013 on GitHub and the library
that this page uses

```bash
test "$(curl --silent https://raw.githubusercontent.com/davidshimjs/qrcodejs/master/qrcode.min.js | sha256sum)" \
   = "$(curl --silent https://infosec.mozilla.org/assets/js/qrcode.min.js | sha256sum)" && echo "Success, qrcodejs hashes match"
```

## Verify this pages qrcodejs library does what you'd expect

You can review the unminified code for [qrcodejs here](https://github.com/davidshimjs/qrcodejs/blob/8247821f4a6336c8b7dd908a80f4e5c54e09fa1d/qrcode.js)
to see what it does.

{% include_relative can_you_trust_these_libraries.md %}
