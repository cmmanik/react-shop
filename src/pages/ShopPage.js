import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverView from '../components/collection-overview/CollectionOverView';
import Collection from '../components/collecion/Collection';
const ShopPage =() => (
    <div className="shop-page">
      <Route exact path='/shop' component={CollectionOverView} />
      <Route path="/shop/:collection" component={Collection} /> 
      {/* <CollectionOverView /> */}
    </div>
);

export default ShopPage;