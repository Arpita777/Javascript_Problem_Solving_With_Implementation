function normalizePath(path){
    let result = "";
    for(let char of path){
        if(char === "["){
            result+= "."
        }
        else if(char === ']'){
            continue;
        }
        else{
            result+= char;
        }
    }
}

function getResultsByPath(obj,path){
    const normalizedPath = normalizePath(path);
    return normalizedPath.split(".").reduce((acc,key) => acc?.[key],obj);
}

getResultsByPath(obj,"data.results[0].status[1].type");