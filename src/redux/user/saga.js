import { all, call, put, takeLatest } from "redux-saga/effects"
import { fetchUsersFailure, fetchUsersSuccess } from "./slice"

import axios from "axios"
//API: https://jsonplaceholder.typicode.com/users/

function* fetchUsers() {
    try {

        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSuccess(response.data))

    } catch (error) {
        console.log(error)
        yield put(fetchUsersFailure(error.message))
    }

}

export default all([
    takeLatest("user/fetchUsers", fetchUsers)
])