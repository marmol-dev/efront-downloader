# efront-downloader
An app to download lessons to pdf from efront learning platform.

## Install
1. Install NodeJS. I recommend using [https://github.com/creationix/nvm](nvm).
2. Install `pdftk`. In Debian based: `sudo apt-get install pdftk`.
3. Install phantomjs: `npm install -g phantomjs`.
4. Install module dependecies: `npm install`.

## Usage
Usage: node index -u username -p password -l lesson -s startUnit -e endUnit -o
outDirectory [url]

Options:
  -u, --username                                                     [required]
  -p, --password                                                     [required]
  -l, --lesson                                                       [required]
  -s, --start-unit                                                   [required]
  -e, --end-unit                                                     [required]
  -o, --out-directory                                                [required]

Lesson is the number that appears in `http://myurl/efront/www/student.php?lessons_ID=[lesson]`
Start unit is the first unit number. End unit is the last unit number. The order is the one that appears in the lesson page. The unit number is the number that appears in `http://mypage/efront/www/student.php?view_unit=[unit]`.

## License
Copyright (c) Martín Molina Álvarez. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
