export const addCardItem = (cardlist, newItem) => {
    const existCartItem = cardlist.find(item => item.id === newItem.id );
    console.log('eeeeeeee', existCartItem)
    if(existCartItem) {
        return cardlist.map(item => {
            if(item.id === newItem.id) {
                return {
                    ...item,
                    quantiTy:item.quantiTy +1
                }
            } else {
                return item
            }
        })
    }
    return [...cardlist, {...newItem, quantiTy:1}]
}