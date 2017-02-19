# bit-n-spire
3D Printing and Scanning system for Raspberry pi

Bit'n'Spire is actuually a 3D printing and scanning image for Raspberry pi (model 2 and 3) originally made of Astroprint, octoprint and Atlas 3D.

The Idea was to build an independant, effective and low cost 3D printing and scanning system, coupled and interacting in a way that the user will have easy way to print multiple and different type of models available locally and in cloud, scan various objects or monuments and cloning them directly with simple actions.

New features: What Bit'n'Spire offers
  - Slicing in the Raspberry itself (no need for cloud built-in solutions)
  - Stl Viewer (PHP)
  - Gcode Viewer (PHP)
  - 3D printing and 3d scanning are started as independant process
  - Wifi connection manager
  - Browse models online (Thingiverse, TinkerCad, Yobi3D, Sketchfab, Tf3Dm)
  - 3D designer on the Raspberry itself : Using CAD Js libraries and websites (3DTin, Tinkercad, Meshlab)
  - Camera view to monitor printing process
  
The project as described has the following structure :
  - Raspberry pi (model 2 or 3)
  - Arduino Mega + Ramps 1.4 + (3D printing Materials)
  - LCD touch Screen
  - 2 Laser beams + Rpi Camera + turn table system
  
Schematics for the assembly of Bit'n'Spire :
<p align="center">
  <img src="http://oi66.tinypic.com/2pzy889.jpg"/>
</p>
  
In the Link below you will find the latest Bit'n'Spire iso img <a href="link.com">Download here !</a> :
  - Write the image to your memory card (need to be 8Go or +)
  - Sudo apt-get update
  - Sudo apt-get upgrade
  - Reboot

When accessing the ip address to your Rpi : BOOYA !!!! Your 3D printing and Scanning dashboard should be looking like this :
<p align="center">
  <img src="http://oi68.tinypic.com/10cln29.jpg"/>
</p>
