const colors = require('colors');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

const emitter = new MyEmitter();

const times = process.argv.slice(2);

const createTimer = (timeString) => {
    const timer = () => {
        const endDate = new Date(Date.parse(timeString));
        const startTime = Date.now();
        const restTime = endDate - startTime;

        if (restTime >= 0) {

            const days = Math.floor(restTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((restTime % (1000 * 60)) / 1000);

            console.log(colors.blue('days:', days, 'hours:', hours, 'minutes:', minutes, 'seconds:', seconds))

        } else {
            console.log(colors.red("The countdown is over!"));
            emitter.removeListener('timer', timer);
        }
    }

    return timer;
};

const timers = times.map(createTimer);

timers.forEach(timer => emitter.on('timer', timer));

const run = () => {
    emitter.emit('timer');
    setTimeout(run, 1000);
}

run();

console.clear();
