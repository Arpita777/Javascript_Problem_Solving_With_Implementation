class LRUCache{
    constructor(size){
        this.size = size;
        this.map = new Map();
    }
    put(key,value){
       if(this.map.has(key)){
           this.map.delete(key);
       }
       this.map.set(key,value);
       if(this.map.size > this.size){
           const oldest = this.map.keys().next().value;
           this.map.delete(oldest);
       }
    }
    get(key){
       if(!this.map.has(key)){
           return -1;
       }
       const value = this.map.get(key);
       this.map.delete(key);
       this.map.set(key,value);
       return value;
    }
}