const info = {
        args: process.argv.slice(2),
        system: process.env.OS,
        version: process.version,
        memRes: process.memoryUsage().rss,
        execPath: process.execPath,
        processId: process.pid,
        proyectFolder: process.argv.slice(1, 2)[0].split('\\')[2],
    };

module.exports = info