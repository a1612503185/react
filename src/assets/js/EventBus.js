import { Component } from 'react'
import { EventEmitter } from 'events'

const eventbus = new EventEmitter();

Component.prototype.$eventbus = eventbus;

export default eventbus;