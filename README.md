[![DOI](https://zenodo.org/badge/doi/10.5281/zenodo.35118.svg)](http://dx.doi.org/10.5281/zenodo.35118)

# Fu-PusH Statement Finder

Fu-PusH Statement Finder presents a collection of interview statements as a website.  
It offers searching the collection and filtering statements by one or multiple tags and by interview metadata.  
Each single statement is available via a static URL to facilitate citation.  
Metadata filters can be addressed via URL query strings.

## Software

Fu-PusH Statement Finder is a web front-end written in HTML, CSS and Javascript using the AngularJS framework.

### Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/)
		- More tips on [Windows with node](http://jpapa.me/winnode)
		- open command prompt as administrator
			- type `choco install nodejs`
			- type `choco install nodejs.install`
- Open terminal
- Type `npm install -g gulp`

### Quick Start

Clone this repository and run the content locally:

	bash
	$ npm install
	$ gulp serve-dev

### Building Production Code

- `gulp build`
	Optimize all html, javascript, styles and data and move to a build folder.

## Data

Statements are provided as a static JSON file in the following format:

	[
		{
			"id" : 551,
			"text" : "Einige Kollegen behandeln Forschungsdaten als ihren “Schatz”.",
			"tags" : [
				"Forschungsdaten",
				"Publikationskultur",
				"Open Research Data",
				"Erfahrungen"
			],
			"interview" : 7,
			"group" : "Geisteswissenschaften",
			"discipline" : "Literaturwissenschaft"
		}
	]

Interview metadata and tag counts are pre-calculated and provided as separate JSON files.


## Credits

The development of this software was made possible using the following components: 
 
* [AngularJS](http://angularjs.org) by **Google, Inc.** <small>_Licensed Under: [MIT License](http://www.tldrlegal.com/license/mit-license)_</small>
* [Bootstrap](http://getbootstrap.com) by **Twitter, Inc** <small>_Licensed Under: [MIT License](http://www.tldrlegal.com/license/mit-license)_</small>
* [jQuery](https://jquery.org/) by **jQuery Foundation and other contributors** <small>_Licensed Under: [MIT License](http://www.tldrlegal.com/license/mit-license)_</small>
* [AngularUI](https://angular-ui.github.io) by **AngularUI Team** <small>_Licensed Under: [MIT License](http://www.tldrlegal.com/license/mit-license)_</small>
* [angulike](https://github.com/cornflourblue/angulike) by **Jason Watmore** <small>_Licensed Under: [MIT License](http://www.tldrlegal.com/license/mit-license)_</small>
* [Pagination Directive](https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination) by **Michael Bromley** <small>_Licensed Under: [MIT License](http://www.tldrlegal.com/license/mit-license)_</small>

Angular code loosely follows [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide).

JSON data was prepared using [Pharo](http://pharo.org) and [NeoJSON](https://github.com/svenvc/NeoJSON).

## Software License

###All files except the ones in /source/data are licensed under the MIT license.

Copyright (c) 2015 University Library of Humboldt-Universität zu Berlin


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.	IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Data License

###All files in /source/data are licensed under the [CC BY 3.0 license](https://creativecommons.org/licenses/by/3.0/).

Copyright (c) 2015 University Library of Humboldt-Universität zu Berlin


###You are free to:

Share — copy and redistribute the material in any medium or format  
Adapt — remix, transform, and build upon the material for any purpose, even commercially.  
The licensor cannot revoke these freedoms as long as you follow the license terms.  

###Under the following terms:

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.