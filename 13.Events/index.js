import EventEmitter from 'events'

// creating instance
const customEmitter = new EventEmitter()

//1. on: listen/register for an event
//2. once: listen/register for an event. it fires only once
//3. emit: emit/call an event

// customEmitter.on('response', (name,id) => {
//     console.log(`user: ${name} id: ${id}`)
// })

// customEmitter.emit('response', "john", 18);
// customEmitter.emit('response', "Yukka", 28);
// customEmitter.emit('response', "Zzong", 11);

customEmitter.once('response', (name,id) => {
    console.log(`user: ${name} id: ${id}`)
})

customEmitter.emit('response', "john", 18);
customEmitter.emit('response', "Yukka", 28);
customEmitter.emit('response', "Zzong", 11);