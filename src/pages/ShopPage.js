import React from 'react';
import {Route} from 'react-router-dom'
import CollectionOverView from '../components/collection-overview/CollectionOverView';
import Collection from '../components/collecion/Collection';
import { firestore, convertCollectionsToMap } from '../firebase/firebase';
import {connect } from 'react-redux';
import { setCollection } from '../redux/actions/userAction';
import WithSpiner from '../components/with-spiner/WithSpiner';
const CollectionOverViewSpnier = WithSpiner(CollectionOverView);
const CollectionSpiner = WithSpiner(Collection);
class ShopPage extends React.Component{
  unsubscribeSnapshot = null

  state = {
    loading:true
  }

  componentDidMount() {
    const { setCollection } = this.props;
    const collectionRef = firestore.collection('collections')
    this.unsubscribeSnapshot =  collectionRef.onSnapshot( async snapshot => {
        const collections = convertCollectionsToMap(snapshot)
        setCollection(collections)
        this.setState({loading:false})
    })
  }

  render() {
    const {loading} = this.state;
    return (
      <div className="shop-page">
        {/* <Route exact path='/shop' component={CollectionOverView} /> */}
        <Route exact path='/shop' render={(props) => <CollectionOverViewSpnier isLoading={loading} {...props}  />  } />
        <Route path="/shop/:collection" render={(props) => <CollectionSpiner isLoading={loading} {...props} /> } /> 
        {/* <CollectionOverView /> */}
      </div>
    );
  }

}

const mapDishpatchToProps = dispacth => ({
  setCollection: collections => dispacth(setCollection(collections))
})

export default connect(null, mapDishpatchToProps) (ShopPage);