import {useSelector} from "react-redux";

export default function useGetUserList() {
    const storedUser = useSelector(store => store.SigninReducer);

    return function () {
        return fetch(`https://localhost:8245/user-list`, {
            method: 'GET',
            credentials: "include",
            mode: "cors",
            headers: {
                'Authorization': `Basic ${storedUser}`
            }
        })
            .then(res => res.json())
    }
}