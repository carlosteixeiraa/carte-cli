const program = require('commander');

program
  .version('0.0.1')
  .option('-f, --framework','option description')
  .option('-c, --colors','we can have as many options as we want')
  .option('-l, --librarys <required>','required user input')
  .parse(process.argv); 