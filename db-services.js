
function getAll(db){
    return db.results
}

function getById(id,db){

}

function addItem(body,db){

}

function deleteItemById(id,db){

}

function updateItemById(id,db){
    try{
        // updated .......
        return true
    }catch(e){
        return false
    }
}

module.exports = {getAll,addItem,getById, updateItemById,deleteItemById}