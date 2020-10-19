const initState = {
    farms: [
        {id: '1', title: 'Sunny Farm', description: 'It\'s too damn sunny!', geolocation: '0,0', company: 'Solar Farms'},
        {id: '2', title: 'Shady Farm', description: 'It\'s too damn shady!', geolocation: '1,1', company: 'Solar Farms'},
        {id: '3', title: 'Money Farm', description: 'It\'s too damn rich!', geolocation: '2,2', company: 'Solar Farms'},
        {id: '4', title: 'Jacques Farm', description: 'Yo yo!', geolocation: '2,2', company: 'Jamesons'},
    ]
}

const farmReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FARM':
            console.log('Created farm:');
            return state
            
        case 'CREATE_FARMERROR':
            console.log('Created project error:', action.errorData);
            return state

        default:
            return state;
    }
}

export default farmReducer