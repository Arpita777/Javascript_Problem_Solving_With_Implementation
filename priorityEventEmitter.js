class EventEmitter {
    constructor() {
      this.events = new Map();
      this.orderCounter = 0;
    }
  
    on(eventName, callback, options = {}) {
      const { isOnce = false, priority = 0 } = options;
  
      if (!this.events.has(eventName)) {
        this.events.set(eventName, []);
      }
  
      const listeners = this.events.get(eventName);
  
      listeners.push({
        callback,
        isOnce,
        priority,
        order: this.orderCounter++
      });
  
      // Sort by priority DESC, then by insertion order ASC
      listeners.sort((a, b) => {
        if (b.priority !== a.priority) {
          return b.priority - a.priority;
        }
        return a.order - b.order;
      });
    }
  
    once(eventName, callback, options = {}) {
      this.on(eventName, callback, {
        ...options,
        isOnce: true
      });
    }
  
    off(eventName, callback) {
      if (!this.events.has(eventName)) return;
  
      if (!callback) {
        this.events.delete(eventName);
        return;
      }
  
      const listeners = this.events.get(eventName);
  
      this.events.set(
        eventName,
        listeners.filter(l => l.callback !== callback)
      );
    }
  
    async emit(eventName, ...args) {
      if (!this.events.has(eventName)) return;
  
      const listeners = this.events.get(eventName);
  
      for (const listener of [...listeners]) {
        try {
          await listener.callback(...args);
        } catch (err) {
          console.error(`Error in ${eventName} listener`, err);
        }
  
        if (listener.isOnce) {
          this.off(eventName, listener.callback);
        }
      }
  
      if (this.events.get(eventName)?.length === 0) {
        this.events.delete(eventName);
      }
    }
  }
