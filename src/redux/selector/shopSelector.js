import { createSelector } from 'reselect';

const shopSelector = state => state.shop;


export const selectShopItem  = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionPreview = createSelector(
    [selectShopItem],
    collections=> collections ? Object.keys(collections).map(key => collections[key]) : []
)


export const selectCollection = collecionurlParam => createSelector(
    [selectShopItem],
    collections =>  collections ? collections[collecionurlParam] : null
)