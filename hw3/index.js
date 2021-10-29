const fs = require('fs');
const ACCESS_SHORT = './access_short.log';

const ipAddress = [
    `89.123.1.41`,
    `34.48.240.111`,
];

const readStream = fs.createReadStream(
    ACCESS_SHORT,
    {
        flags: 'r',
        encoding: 'utf-8',
    });

readStream.on('open', () => {
    console.log('File opened!');
});

ipAddress.forEach(IP => {
    fs.access('./hw3/' + IP +'_requests.log', function(error){
        if (!error) {
            fs.unlink('./hw3/' + IP +'_requests.log', (err) => {
                if (err) console.log(err);
                else console.log(IP +'_requests.log was deleted');
            });
        }
    });
});

readStream.on('data', (chunk) => {
    const lines = chunk.split('\n');

    // console.log(lines);
    lines.forEach(line => {
        ipAddress.forEach(IP => {
            if (line.indexOf(IP) >= 0) {
            //     const writeStream = fs.createWriteStream(
            //         './hw3/' + IP +'_requests.log',
            //         {
            //             encoding: 'utf-8',
            //             flags: 'a',
            //         }
            //     );
            //     writeStream.on('pipe', () => {
            //         readStream.pipe(writeStream)
            // })
                fs.appendFile('./hw3/' + IP +'_requests.log', line + '\n', function(error){
                    if(error) throw error;
                });
            }
        })
    });
});

readStream.on('end', () => {
    console.log('Finished!');
});
readStream.on('error', (err) => {
    console.log(err);
});

