import firebase from '../firebase';

const productCol = firebase.firestore().collection('product');

export function addProduct(data){
    return productCol.add(data)
}

export function getProducts(){
    return new Promise((resolve, reject) =>{
        productCol.get().then(snapshot => {
            let arr = [];
            snapshot.forEach((res) => {
                arr.push(res.data());
            });
            resolve(arr);
        })
    })
    
}