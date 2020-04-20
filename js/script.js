// 封装事件
function addHandler(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,handler);
    }else{
        element["on"+type] = handler;
    }
}

// 封装getElementById()
function byId(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}

var add = document.getElementsByClassName("add"),
    reduce = document.getElementsByClassName("reduce"),
    count = document.getElementsByClassName("count"),
    index = null;

for(var i=0;i<add.length;i++){
    add[i].setAttribute("add-id",i);
    reduce[i].setAttribute("reduce-id",i);
    addHandler(add[i],"click",function(){
        index = this.getAttribute("add-id");
        count[index].innerHTML++;
    })
    addHandler(reduce[i],"click",function(){
        index = this.getAttribute("reduce-id");
        count[index].innerHTML--;
    })
}

