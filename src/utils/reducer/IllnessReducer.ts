export default function illnessReducer(state: any, action: any) {
	switch (action.type) {
		case 'requestIllness': {
			return { ...state, isLoading: true };
		}
		case 'loadIllness': {
			return { ...state, illnessList: action.illnessList, isLoading: false };
		}
	}
}
