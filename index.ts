import * as yargs from 'yargs';
import App from './app/modules/app';

let argv = yargs.usage('Usage: $0 -u username -p password -l lesson -s startUnit -e endUnit -o outDirectory [url]')
    .demand(['u','p', 'l', 's', 'e', 'o'])
    .alias('u', 'username')
    .alias('p', 'password')
    .alias('l', 'lesson')
    .alias('s', 'start-unit')
    .alias('e', 'end-unit')
    .alias('o', 'out-directory')
    .argv;

let url = argv._.length ? argv._[0] : 'http://193.147.87.250/efront/www/';

var app = new App(url, argv.u,
  argv.p, argv.l, argv.s, argv.e, argv.o);

app.run().catch((err) => {
  console.error('Error', err.stack);
});
