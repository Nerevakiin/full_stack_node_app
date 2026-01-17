import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'

export const sightingEvents = new EventEmitter() // creating the event emitter

sightingEvents.on('sighting-added', createAlert) // creating the event which is called sighting-added