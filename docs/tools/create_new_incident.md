---
layout: default
resource: true
categories: [Tools]
title: Create a New Security Incident
description: Tool to create an new Google Drive folder and document for a security incident
include_scripts:
  - create_new_incident.js
---

<div id="incident">
  <p>
    <fieldset>
      <label for="text">Name of the incident</label>
      <input id="text" type="text" placeholder="Enter your text here" /><br />
    </fieldset>
  </p>
  <p>
    <button type="submit" id="submit">Submit</button>
  </p>
</div>

<div id="results"></div>

---

<p>
  <button id="authorize_button" style="display: none;">Authorize</button>
  <button id="signout_button" style="display: none;">Sign Out</button>
</p>



<script async defer src="https://apis.google.com/js/api.js"
  onload="this.onload=function(){};handleClientLoad()"
  onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>
