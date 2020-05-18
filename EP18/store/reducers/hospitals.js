import { HospitalData } from '../../Data/dummyData'
import { TOGGEL_BYME } from '../actions/hospitals'

const iniatState = {
    hospitals: HospitalData,
    byMeHospitals: []
}

const HospitalsReducer = (state = iniatState, action) => {
    switch (action.type) {
        case TOGGEL_BYME:
            const existedIndex = state.byMeHospitals.findIndex(i => i.id == action.hospitalId);
            if (existedIndex >= 0) {
              const currentHospital = [...state.byMeHospitals];
              currentHospital.splice(existedIndex,1);
              return {...state,byMeHospitals:currentHospital};
            }
            const addedHospital = state.hospitals.find(item=> item.id == action.hospitalId);
            return {...state,byMeHospitals : state.byMeHospitals.concat(addedHospital)}
         
            
        default:
            return state;
    }
}

export default HospitalsReducer;