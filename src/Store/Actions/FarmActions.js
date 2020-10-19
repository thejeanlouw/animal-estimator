import { compose } from "redux"

export const createFarm = (farm) => {
    return (dispatch, getState, {firebase, getFirestore}) => {
        // make async call
        const fireStore = firebase.fireStore;
        debugger;
        fireStore.collection('farms').add({
            ...farm,
            farmFounderFirstName: 'Jean',
            farmFounderLastName: 'Louw',
            farmFoundedOn: new Date()
        }).then(()=>{
            dispatch({
                type: 'CREATE_FARM',
                farmData: farm
            });
        }).catch((error)=>{
            dispatch({
                type: 'CREATE_FARM_ERROR',
                errorData: error
            });
        });

        
    }
}