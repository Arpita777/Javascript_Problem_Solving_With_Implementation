class EventEmitter {
    constructor() {
      this.events = new Map();
    }
  
    on(eventName, callback, isOnce = false) {
      if (!this.events.has(eventName)) {
        this.events.set(eventName, new Map());
      }
  
      this.events.get(eventName).set(callback, isOnce);
    }
  
    once(eventName, callback) {
      this.on(eventName, callback, true);
    }
  
    off(eventName, callback) {
      if (!this.events.has(eventName)) return;
  
      if (callback) {
        this.events.get(eventName).delete(callback);
      } else {
        this.events.delete(eventName);
      }
    }
  
    emit(eventName, ...args) {
      if (!this.events.has(eventName)) return;
  
      const callbacks = this.events.get(eventName);
  
      for (const [callback, isOnce] of callbacks.entries()) {
        callback(...args);
  
        if (isOnce) {
          callbacks.delete(callback);
        }
      }
  
      if (callbacks.size === 0) {
        this.events.delete(eventName);
      }
    }

    async asyncEmitSequential(eventName, ...args) {
        if (!this.events.has(eventName)) return;
    
        const callbacks = this.events.get(eventName);
    
        for (const [callback, isOnce] of callbacks.entries()) {
          try{
            await callback(...args);
          }
          catch(err){
            console.error(`Error in listener for ${eventName}`, err);
          }
    
          if (isOnce) {
            callbacks.delete(callback);
          }
        }
    
        if (callbacks.size === 0) {
          this.events.delete(eventName);
        }
      }

      async asyncEmitParallel(eventName, ...args) {
        if (!this.events.has(eventName)) return;
      
        const callbacks = this.events.get(eventName);
      
        const executions = [];
      
        for (const [callback, isOnce] of callbacks.entries()) {
          executions.push(
            Promise.resolve(callback(...args))
          );
      
          if (isOnce) {
            callbacks.delete(callback);
          }
        }
      
        await Promise.allSettled(executions);
      
        if (callbacks.size === 0) {
          this.events.delete(eventName);
        }
      }
  }
