
//二维数组查找某个数字
function find(target,arr){
    var row = arr.length;
    var col = array[0].length;
    var r = row - 1;
    var c = 0;
    while (r>=0 && c<=col-1){
        if(target > array[r][c]){
            c++
        }
        else if(target < array[r][c]){
            r--;
        }else{
            console.log('true')
            return true
        }
        console.log('false')
        return false;
    }
}

var tar = 10;
var arr = [[1,2,3],[10,22,33],[44,32,52]]
find(tar,arr)