<div align="center">
<h1>Cornerstone Tools Plugin: Image Statistics</h1>

<a href="https://www.emojione.com/emoji/1f4ca">
<img height="80" width="80" alt="bar chart (emoji)" src="https://raw.githubusercontent.com/QSolutionsLLC/cornerstone-tool-image-statistics/master/other/bar_chart.png" />
</a>

<p>A <i>very</i> simple statistics tool plugin for <a href="https://github.com/cornerstonejs/cornerstone">CornerstoneJS</a></p>
</div>

<hr />

<!-- prettier-ignore-start -->
<!-- TODO: Coverage -->
[![npm version](https://badge.fury.io/js/%40qsolutionsllc%2Fcornerstone-tool-image-statistics.svg)](https://badge.fury.io/js/%40qsolutionsllc%2Fcornerstone-tool-image-statistics)
[![CircleCI](https://circleci.com/gh/QSolutionsLLC/cornerstone-tool-image-statistics.svg?style=svg)](https://circleci.com/gh/QSolutionsLLC/cornerstone-tool-image-statistics)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs] [![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]
<!-- prettier-ignore-end -->

## Image Statistics

This repository implements the ["Image Statistics"](https://github.com/cornerstonejs/cornerstoneTools/blob/317e8fa4925b018dee76ec0dbf1e452c1ef93cd0/src/imageTools/imageStats.js) tool that was available in CornerstoneTools v2, but removed in v3. It demonstrates how to implement the tool using version 3's ["plugins"](https://tools.cornerstonejs.org/custom-tools/).

This repository also serves as a very basic example and template for creating a listing on the [Cornerstone.js Market](https://cornerstonejsmarket.io).

### Demo

![GIF Example](https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/raw/gh-page/example/example.gif)

You can play with this tool using the [live example: here](https://qsolutionsllc.github.io/cornerstone-tool-image-statistics/)

### Usage

Nothing crazy here. This tool is a class that extends `cornerstone-tool`'s ["BaseTool"](https://tools.cornerstonejs.org/tool-types/#base-tool). It can be installed, added, and extended the same way as all 3rd party tools.

_Install via NPM:_

`npm install @qsolutionsllc/cornerstone-tool-image-statistics --save`

_Import, add, and enable:_

```js
import ImageStatisticsTool from "@qsolutionsllc/cornerstone-tool-image-statistics";

// ...

cornerstoneTools.addTool(ImageStatisticsTool);
cornerstoneTools.setToolEnabled("ImageStatistics");
```

## Contributing

This code is for educational purposes. If you feel it could be improved or made clearer to assist in:

- Providing an example ["Custom Tool"](https://tools.cornerstonejs.org/custom-tools/) for Cornerstone Tools v3+
- Providing an example [Cornerstone.js Market](https://cornerstonejsmarket.io) free listing

Please do not hesitate to [create an issue]() or a [pull request]() with your questions, comments, enhancements, concerns, etc.

## Resources

- [Webpack: Authoring Libraries](https://webpack.js.org/guides/author-libraries/)
- [Webpack: Externals](https://webpack.js.org/configuration/externals/)

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

### ❓ Questions

For the time being, please feel free to open an issue. We'll provide a better
avenue for communication moving forward ^\_^

## Contributors

Thanks goes to these wonderful people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/5797588?v=4" width="100px;"/><br /><sub><b>Danny Brown</b></sub>](http://dannyrb.com/)<br />[💻](https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/commits?author=dannyrb "Code") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## License

[MIT](https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/blob/master/LICENSE)

<!--
Links:
-->

<!-- prettier-ignore-start -->

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/QSolutionsLLC/cornerstone-tool-image-statistics.svg?style=social
[github-watch]: https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/watchers
[github-star-badge]: https://img.shields.io/github/stars/QSolutionsLLC/cornerstone-tool-image-statistics.svg?style=social
[github-star]: https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/stargazers
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20cornerstonejs-marketplace%20by%20%40dannyrb%20https%3A%2F%2Fgithub.com%2Fdannyrb%2Fcornerstonejs-marketplace%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/QSolutionsLLC/cornerstone-tool-image-statistics.svg?style=social
[bugs]: https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/QSolutionsLLC/cornerstone-tool-image-statistics/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+

<!-- prettier-ignore-end -->
