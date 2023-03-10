import{_ as r}from"./sideloadly_win.6263388d.js";import{_ as s,o as d,c,a as e,b as i,d as o,w as a,e as h,r as l}from"./app.97436472.js";const u={},p=e("p",null,"Chimera is capable of jailbreaking all devices on iOS 12.0 to 12.1.2 and A7 to A11 devices on iOS 12.0 to 12.5.7.",-1),m={class:"custom-container danger"},f=e("p",{class:"custom-container-title"},"DANGER",-1),y=e("p",null,[i("Chimera support on 12.5.6 and 12.5.7 requires the use of an "),e("em",null,"unofficial"),i(" patch")],-1),_=e("p",null,"We will use Sideloadly to install the Chimera jailbreak application to your iOS device for use in the next step.",-1),g=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you have a newer device with an A12 SoC, such as the iPhone XS, you can only use Chimera on iOS 12.0 - 12.1.2.")],-1),w={class:"custom-container warning"},b=e("p",{class:"custom-container-title"},"WARNING",-1),k=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),i(" Downloads")],-1),v=e("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[e("p",null,[i(" Chimera is currently signed at "),e("a",{href:"https://jailbreaks.app/",target:"_blank"},"jailbreaks.app"),i(" for easy installation without a computer. ")])],-1),C={href:"https://chimera.coolstar.org/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/mineek/chimerafix/releases/tag/v2_dylib",target:"_blank",rel:"noopener noreferrer"},x={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},j=h('<p><img src="'+r+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the Chimera <code>.ipa</code> file into Sideloadly</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you&#39;re on iOS 12.5.6 or 12.5.7, you&#39;ll need to take extra steps in order to inject ChimeraFix</p><ol><li>Click <code>Advanced Options</code></li><li>Click <code>Inject dylibs/frameworks</code></li><li>Click on <code>+dylib/deb</code>, then select the ChimeraFix <code>.deb</code> file</li><li>Change the Signing mode to <code>Export</code>, then click <code>Start</code></li><li>Save the newly made <code>.ipa</code> file to the same place where you saved Chimera originally</li></ol><p>Repeat steps 1 through 3 of this section, and moving forward, whenever you need to sideload Chimera, use the newly made <code>.ipa</code> file instead.</p></div><ol start="4"><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The Chimera application can now be opened from home screen.</p><h2 id="running-chimera" tabindex="-1"><a class="header-anchor" href="#running-chimera" aria-hidden="true">#</a> Running Chimera</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the Chimera application from your home screen immediately afterwards</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone again when prompted <ul><li>If you are not prompted and it automatically reboots, wait 1-2 minutes, then try again.</li><li>This time, it is necessary</li></ul></li><li>Once again, open the Chimera application from your home screen immediately after rebooting</li><li>Tap &quot;Jailbreak&quot; again <ul><li>If it automatically reboots or crashes and the jailbreak is not installed, wait 1-2 minutes, then try again.</li></ul></li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If that app or your device continually crashes/restarts unexpectedly and the jailbreak isn&#39;t installed despite the above steps, attempt to put the device in a freezer for that 1-2 minute period.</p></div>',12);function A(O,T){const t=l("router-link"),n=l("ExternalLinkIcon");return d(),c("div",null,[e("p",null,[i("Chimera is a "),o(t,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:a(()=>[i("semi-untethered jailbreak")]),_:1}),i(", meaning it requires an app to re-apply the exploit after a reboot.")]),p,e("div",m,[f,y,e("p",null,[i("If you are not comfortable with using an unofficial patch, you can follow "),o(t,{to:"/installing-odysseyra1n"},{default:a(()=>[i("Installing Odysseyra1n")]),_:1}),i(" instead.")])]),e("p",null,[i("Due to how semi-untethered jailbreaks work, the app will need to be "),o(t,{to:"/resigning-apps"},{default:a(()=>[i("re-signed")]),_:1}),i(" once every 7 days.")]),_,g,e("div",w,[b,e("p",null,[i("If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly "),o(t,{to:"/restoring-rootfs"},{default:a(()=>[i("remove it")]),_:1}),i(" before proceeding.")])]),k,v,e("ul",null,[e("li",null,[i("The latest release of "),e("a",C,[i("Chimera"),o(n)]),e("ul",null,[e("li",null,[i("If you are on iOS 12.5.6 or 12.5.7, you will also need "),e("a",S,[i("ChimeraFix"),o(n)])])])]),e("li",null,[i("The latest version of "),e("a",x,[i("Sideloadly"),o(n)])]),e("li",null,[i("The latest version of "),e("a",I,[i("iTunes"),o(n)]),i(" if on Windows")])]),j,e("p",null,[i("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),o(t,{to:"/faq/#what-are-tweaks"},{default:a(()=>[i("tweaks")]),_:1}),i(", themes and more.")])])}var q=s(u,[["render",A],["__file","index.html.vue"]]);export{q as default};
