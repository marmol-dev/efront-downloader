# efront_download
An app to download lessons to pdf from efront learning platform.

## Install
1. Install nodejs. I recommend using [https://github.com/creationix/nvm](nvm).
2. Install `pdftk`. In Debian based: `sudo apt-get install pdftk`.
3. Install phantomjs: `npm install -g phantomjs`.
4. Install module dependecies: `npm install`.

## Usage
Usage: index -u username -p password -l lesson -s startUnit -e endUnit -o
outDirectory [url]

Options:
  -u, --username                                                     [required]
  -p, --password                                                     [required]
  -l, --lesson                                                       [required]
  -s, --start-unit                                                   [required]
  -e, --end-unit                                                     [required]
  -o, --out-directory                                                [required]

## License
Copyright (c) Martín Molina Álvarez. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
