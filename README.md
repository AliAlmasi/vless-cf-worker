<h1>VLESS CF Worker</h1>
<p>Configuration for VLESS tunnel on Cloudflare Worker</p>
<h2>How to use this?</h2>
<p>It's Super easy. Just create a CF Worker and then copy & paste all of the <a href="https://raw.githubusercontent.com/AliAlmasi/vless-cf-worker/main/worker.js">worker.js file's content</a> as the worker's configuration, then do all of these things:</p>
<ol>
  <li>Generate a UUID and replace the one in the worker's configuration after you paste it (line 201).</li>
  <li>Save & Deploy.</li>
  <li>OPTIONAL: If you've a domain on your Cloudflare, add a custom domain for your worker.</li>
  <li>Create a VLESS configuration on any V2Ray/Xray program that you use.</li>
  <li>Set TLS as TLS and your worker's domain as the SNI.</li>
  <li>Set transport to <b>ws</b>.</li>
  <li>Set your worker's domain as the ws host.</li>
  <li>Set any <i>Clean Cloudflare IP</i> as the destination address. You can use <a href="https://ircf.space/">IRCF.space</a>.</li>
  <li>Set 443 as port.</li>
  <li>And finally, set your own generated UUID as the configuration's UUID.</li>
</ol>
<p>Now you're all done. Test your VLESS configuration.</p>
<div align="center"><img src="./screenshots/vless-config.jpg"></div>
