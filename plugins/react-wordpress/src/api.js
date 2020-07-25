import axios from 'axios'

//const URL = `http://00.000.000.000:8081`

export const postReq = async (path, obj, token = false) => {
    try {
		if (token) {
			const response = await axios.post(URL + path, obj, {
				headers: {
					'x-access-token': token,
				},
			})
			return response
		} else {
			const response = await axios.post(URL + path, obj)
			return response
		}
    } catch (error) {
        // TODO: Handle Errors
    }
}

export const putReq = async (path, obj, token = false) => {
    try {
		if (token) {
			const response = await axios.put(URL + path, obj, {
				headers: {
					'x-access-token': token,
				},
			})
			return response
		} else {
			const response = await axios.put(URL + path, obj)
			return response
		}
    } catch (error) {
        // TODO: Handle Errors
    }
}

export const getReq = async (path, obj, token = false) => {
    try {
    	console.log("sending get: ", token, obj)
		if (token) {
			const response = await axios.get(URL + path, {
				params: obj,
				headers: {
					'x-access-token': token,
				},
			})
			console.log('res get: ', response)
			return response
		} else {
			const response = await axios.get(URL + path, {params: obj})
			return response
		}
    } catch (error) {
        // TODO: Handle Errors
    }
}