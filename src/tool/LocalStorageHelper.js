
const KEY='goodsid'

// 取数据的方法
export function getItem() {
    return JSON.parse(localStorage.getItem(KEY) || "[]")
}

// 存数据的方法
export function setItem(data) {
    // 1.先取
    var array=JSON.parse(localStorage.getItem(KEY) || "[]")

    // 2.放数据到数组中
    array.push(data)

    // 3.保存
    localStorage.setItem(KEY,JSON.stringify(array))
}