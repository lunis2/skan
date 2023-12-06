import {useDispatch} from "react-redux";
import {setAuth} from "../../storage/actions";

export default function CheckTokenNoNav() {
    const dispatch = useDispatch();

    const now = new Date();
    const expire = new Date(localStorage.getItem("expire"));

    dispatch(setAuth(now < expire));
}