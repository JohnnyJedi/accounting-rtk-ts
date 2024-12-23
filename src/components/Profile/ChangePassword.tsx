import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.token)

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    const handleClickSave = () => {
        const decodedToken = atob(token.slice(6));
        const passwordForChange = decodedToken.split(':').pop()
        if(!oldPassword || !newPassword || !confirmPassword) {
            alert('Fill all the fields')
            return;
        }
        if (oldPassword === passwordForChange) {
            if (newPassword === confirmPassword) {
                dispatch(changePassword(newPassword));
            } else {
                alert('new password and confirmed password are different');
            }
        }else {
            alert('old password is not correct')
            return
        }
        close();

    };

    return (
        <>
            <label>Old Password:
                <input
                    type="password"
                    onChange={(e) => setOldPassword(e.target.value)}
                    value={oldPassword}
                />
            </label>
            <label>New Password:
                <input
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                />
            </label>
            <label>Confirm Password:
                <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without save</button>
            <button onClick={handleClickClear}>Clear</button>

        </>
    );
};

export default ChangePassword;