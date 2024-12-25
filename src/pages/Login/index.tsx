import Button from '../../components/Button';
import Input from '../../components/Input';
import useStateHook from '../../hooks/useStateHook';
import './login.css';

const Login = () => {
    const username = useStateHook('');
    const password = useStateHook('');
    const login = async () => {
        try {

        } catch (error) {

        }
    }
    return (
        <div className="centered-container">
            <div className="content">
                <h2 style={{ textAlign: 'center' }}>Sign in to Meet</h2>
                <div className='column gap-20'>
                    <Input
                        value={username.state}
                        setValue={username.setState}
                        label="Username"
                    />
                    <Input
                        value={password.state}
                        setValue={password.setState}
                        label='Password'
                    />
                    <Button
                        label="Sign In"
                        onClick={login}
                    />
                    <p className='row' style={{ gap: 5, justifyContent: 'center', fontSize: 14, fontWeight: 'bold' }}>Don't have an account? <p style={{ color: '#FFA500' }}>Sign Up now</p></p>
                </div>
            </div>
        </div>
    )
}

export default Login;