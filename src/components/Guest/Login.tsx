import {useState} from "react";
import {fetchUser} from "../../features/api/accountApi.ts";
import {createToken} from "../../utils/constants.ts";
import {useAppDispatch} from "../../app/hooks.ts";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickLogin = () => {
       dispatch(fetchUser(createToken(login,password)))
    };
    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    return (
        <>
            <label>Login:
                <input
                    type="text"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button onClick={handleClickLogin}>
                Sign In
            </button>
            <button onClick={handleClickClear}>
                Clear
            </button>
        </>
    );
};

export default Login;