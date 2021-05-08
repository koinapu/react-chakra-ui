import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
    const history = useHistory();
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);
    const login = useCallback((id: string) => {
        setLoading(true);
        if (!id) {
            alert("入力がありません");
            return;
        }
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                showMessage({ title: "ログインしました", status: "success" });
                history.push("/home");
            } else {
                showMessage({ title: "ユーザが見つかりません", status: "error" });
            }
        }
        ).catch(() => showMessage({ title: "ログインできません", status: "error" })
        ).finally(() => setLoading(false));
    }, [history]);
    return { login, loading };
}