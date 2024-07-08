import { createContext, useReducer } from 'react'

const initialValue = {
	data: [],
	term: '',
	filter: 'default',
}

export const Context = createContext()

const reducer = (state = initialValue, action) => {
	const { type, payload } = action
	switch (type) {
		case 'GET_DATA':
			return { ...state, data: payload }
		case 'ON_TERM':
			return { ...state, term: payload }
		case 'ON_FILTER':
			{
				
				return { ...state, filter: payload }
			}
		default:
			return { state }
	}
}

const CatalogProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValue)

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}
export default CatalogProvider