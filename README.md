Bloomsday 2022
==============

[![Link to OzCHI](https://img.shields.io/badge/See%20it%20at%20OzCHI-black)](http://www.ozchi.org/2022/creativity.html)

[![Link to webpage](https://github.com/thompson318/Bloomsday/raw/bd2022/images/bloomsday2022.gif)](https://thompson318.github.io/Bloomsday/)


Inspired by a favourite passage from Ulysses, it's a multi-sensory, interactive, tribute to water and to the writing of James Joyce. Ocean sounds accompany 
the original text with interactive ripple effects (depending on your web browser). In the background the text is read by multiple voices, best listened to in stereo. You may find it soothing, you may find it inspiring, or you may find it annoying. If you like you can contribute your own reading of a line of the text, to be incorporated into the finished webpage.

Click [here](http://thompson318.github.io/Bloomsday/) to try it out.

With Thanks To
-------------- 
[sirxemic](https://github.com/sirxemic/jquery.ripples), provides cool WebGL ripple effects. 
Ocean sounds courtesy of [inchadney](https://freesound.org/people/inchadney/).
Water image courtesy of [@joke03](https://unsplash.com/@joke03).
Text by James Joyce, with thanks to [Project Gutenberg](https://www.gutenberg.org/) for the transcription.

Participate
-----------

I'd like to add more voices both human and synthesised, creating a collaboration between humans and machines. 
At the time of writing the text is read mainly by machine, [pico2wave](https://www.openhab.org/addons/voice/picotts/), with stereo effects added using
[ffmpeg](https://ffmpeg.org/). To add your voice to the mix please pick a line (or several lines) from those below, record yourself (or your computer) reading it and send it by [email](mailto:s.thompson@ucl.ac.uk) or [twitter](https://twitter.com/intent/tweet?screen_name=stevedoscience) (one line per file). All recordings will be released under a [creative commons 4.0 license](https://creativecommons.org/licenses/by/4.0/). If multiple voices are available for the same line, then one voice is randomly picked on each repeat run. You can turn off the human voices with the html option ?nohumans

| Number | Script |
|--------|--------|
| 00 | What in water did Bloom, waterlover, drawer of water, watercarrier, returning to the range, admire? |
| 01 | Its universality: |
| 02 | its democratic equality and constancy to its nature in seeking its own level: |
| 03 | its vastness in the ocean of Mercator’s projection: |
| 04 | its unplumbed profundity in the Sundam trench of the Pacific exceeding 8000 fathoms: |
| 05 | the restlessness of its waves and surface particles visiting in turn all points of its seaboard: |
| 06 | the independence of its units: |
| 07 | the variability of states of sea: |
| 08 | its hydrostatic quiescence in calm: |
| 09 | its hydrokinetic turgidity in neap and spring tides: |
| 10 | its subsidence after devastation: |
| 11 | its sterility in the circumpolar icecaps, arctic and antarctic: |
| 12 | its climatic and commercial significance: |
| 13 | its preponderance of 3 to 1 over the dry land of the globe: |
| 14 | its indisputable hegemony extending in square leagues over all the region below the subequatorial tropic of Capricorn: |
| 15 | the multisecular stability of its primeval basin: |
| 16 | its luteofulvous bed: |
| 17 | its capacity to dissolve and hold in solution all soluble substances including millions of tons of the most precious metals: |
| 18 | its slow erosions of peninsulas and islands, its persistent formation of homothetic islands, peninsulas and downwardtending promontories: |
| 19 | its alluvial deposits: |
| 20 | its weight and volume and density: |
| 21 | its imperturbability in lagoons and highland tarns: |
| 22 | its gradation of colours in the torrid and temperate and frigid zones: |
| 23 | its vehicular ramifications in continental lakecontained streams and confluent oceanflowing rivers with their tributaries and transoceanic currents, gulfstream, north and south equatorial courses: |
| 24 | its violence in seaquakes, waterspouts, Artesian wells, eruptions, torrents, eddies, freshets, spates, groundswells, watersheds, waterpartings, geysers, cataracts, whirlpools, maelstroms, inundations, deluges, cloudbursts: |
| 25 | its vast circumterrestrial ahorizontal curve: |
| 26 | its secrecy in springs and latent humidity, revealed by rhabdomantic or hygrometric instruments and exemplified by the well by the hole in the wall at Ashtown gate, saturation of air, distillation of dew: |
| 27 | the simplicity of its composition, two constituent parts of hydrogen with one constituent part of oxygen: |
| 28 | its healing virtues: |
| 29 | its buoyancy in the waters of the Dead Sea: |
| 30 | its persevering penetrativeness in runnels, gullies, inadequate dams, leaks on shipboard: |
| 31 | its properties for cleansing, quenching thirst and fire, nourishing vegetation: |
| 32 | its infallibility as paradigm and paragon: |
| 33 | its metamorphoses as vapour, mist, cloud, rain, sleet, snow, hail: |
| 34 | its strength in rigid hydrants: |
| 35 | its variety of forms in loughs and bays and gulfs and bights and guts and lagoons and atolls and archipelagos and sounds and fjords and minches and tidal estuaries and arms of sea: |
| 36 | its solidity in glaciers, icebergs, icefloes: |
| 37 | its docility in working hydraulic millwheels, turbines, dynamos, electric power stations, bleachworks, tanneries, scutchmills: |
| 38 | its utility in canals, rivers, if navigable, floating and graving docks: |
| 39 | its potentiality derivable from harnessed tides or watercourses falling from level to level: |
| 40 | its submarine fauna and flora (anacoustic, photophobe), numerically, if not literally, the inhabitants of the globe: |
| 41 | its ubiquity as constituting 90 % of the human body: |
| 42 | the noxiousness of its effluvia in lacustrine marshes, pestilential fens, faded flowerwater, stagnant pools in the waning moon. |


Some technical stuff
--------------------
By the powers of WebGL, add a layer of water to your HTML elements which will ripple by cursor interaction!

Important: this plugin requires the WebGL extension `OES_texture_float` (and `OES_texture_float_linear` for a better effect).

Options
-------
| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageUrl | string | null | The URL of the image to use as the background. If absent the plugin will attempt to use the value of the computed `background-image` CSS property instead. Data-URIs are accepted as well. |
| dropRadius | float | 20 | The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas. |
| perturbance | float | 0.03 | Basically the amount of refraction caused by a ripple. 0 means there is no refraction. |
| resolution | integer | 256 | The width and height of the WebGL texture to render to. The larger this value, the smoother the rendering and the slower the ripples will propagate. |
| interactive | bool | true | Whether mouse clicks and mouse movement triggers the effect. |
| crossOrigin | string | "" | The crossOrigin attribute to use for the affected image. For more information see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes).


Methods
-------
### drop
Call `$(selector).ripples('drop', x, y, radius, strength)` to manually add a drop at the element's relative coordinates (x, y). `radius` controls the drop's size and `strength` the amplitude of the resulting ripple.

### destroy
Call `$(selector).ripples('destroy')` to remove the effect from the element.

### hide / show
Call `.ripples('hide')` and `.ripples('show')` to toggle the effect's visibility. Hiding it will also effectively pause the simulation.

### pause / play
Call `$(selector).ripples('pause')` and `.ripples('play')` to toggle the simulation's state.

### set
Call `$(selector).ripples('set', name, value)` to update properties of the effect. The properties that can be updated are:
- `dropRadius`
- `perturbance`
- `interactive`
- `imageUrl` (setting the image URL will update the background image used for the effect, but the `background-image` CSS property will be untouched)
- `crossOrigin` (setting this won't have any effect until `imageUrl` is changed)

### updateSize
The effect resizes automatically when the width or height of the window changes. When the dimensions of the element changes, you need to call `$(selector).ripples('updateSize')` to update the size of the effect accordingly.
