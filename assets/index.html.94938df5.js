import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,o as d,c as u,a as e,b as t,d as o,w as l,e as n,r as s}from"./app.97436472.js";const h={},p=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),t(" Downloads")],-1),y={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},m={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},f=n('<p><img src="'+r+'" alt="A screenshot of the checkra1n application"></p><h2 id="installing-checkra1n" tabindex="-1"><a class="header-anchor" href="#installing-checkra1n" aria-hidden="true">#</a> Installing checkra1n</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re using an Apple Silicon Mac and are attempting to jailbreak on A7 device or an A9X (not A9) to A10(X) device, you will be prompted during the process to unplug and replug the device and will need to do so.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',4),g=n("<li>Open checkra1n on your computer</li><li>Plug your iOS device into your computer <ul><li>If you&#39;re on an A11 device, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code> option once it runs</li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li><li>If you&#39;re on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> -&gt; <code>Next</code> on checkra1n <ul><li>Your device will be put into recovery mode automatically</li></ul></li>",3),b=e("code",null,"Start",-1),w=e("ul",null,[e("li",null,"Follow the instructions until your device shows a black screen")],-1),_=e("li",null,"After this, checkra1n should automatically install",-1),k=n('<p>Your iOS device should now reboot.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don&#39;t recommend it because of the fact that:</p><ul><li>People generally tend to have more stability when using Odysseyra1n instead of installing Cydia</li><li>Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available</li><li>Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia</li></ul></div><p>To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.</p><h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2>',4),v={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"TIP",-1),x={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"},I=e("ol",null,[e("li",null,"Open the terminal app on your computer"),e("li",null,"Ensure that your computer is trusted by your device"),e("li",null,[t('Install "homebrew" by pasting and executing the following command: '),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')]),e("li",null,[t('Install "iproxy" by pasting and executing the following command: '),e("code",null,"brew install libusbmuxd")]),e("li",null,[t("Install the Odysseyra1n script by pasting and executing the following command: "),e("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"')])],-1),A=n('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function O(q,C){const i=s("ExternalLinkIcon"),a=s("router-link");return d(),u("div",null,[p,e("ul",null,[e("li",null,[t("The latest release of "),e("a",y,[t("checkra1n"),o(i)]),e("ul",null,[e("li",null,[t("If you are on an A8X or A9X device, you should instead get the 0.12.2 release of "),e("a",m,[t("checkra1n"),o(i)])])])])]),f,e("ol",null,[g,e("li",null,[t("You will now be presented with instructions in how to reboot your device into "),o(a,{to:"/faq/#what-is-dfu-mode"},{default:l(()=>[t("DFU mode")]),_:1}),t(", click "),b,t(" to begin "),w]),_]),k,e("div",v,[S,e("p",null,[t("If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the "),e("a",x,[t("shortcut"),o(i)]),t(" by opening this page on your device and then clicking the shortcut hyperlink.")])]),I,e("p",null,[t("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),o(a,{to:"/faq/#what-are-tweaks"},{default:l(()=>[t("tweaks")]),_:1}),t(", themes, packages and more.")]),A])}var U=c(h,[["render",O],["__file","index.html.vue"]]);export{U as default};
