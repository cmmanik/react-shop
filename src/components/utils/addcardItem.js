export const addCardItem = (cardlist, newItem) => {
    const existCartItem = cardlist.find(item => item.id === newItem.id );
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

export const removeCardItem = (cardlist, newitem) => {
    const ifexistItem = cardlist.find(item => item.id === newitem.id );
    if(ifexistItem.quantiTy === 1) {
        return cardlist.filter(item => item.id !== newitem.id)
    }
    return cardlist.map(item => {
        if(item.id === newitem.id) {
            return {
                ...item,
                quantiTy:item.quantiTy - 1
            }
        } else {
            return item
        }
    })
}