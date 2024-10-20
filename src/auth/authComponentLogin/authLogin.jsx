import { useFormik } from "formik";
import style from './authLogin.module.css';

const AuthLogin = () => { 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <p className={style.p}>Login</p>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="text" 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                />
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password"  
                    onChange={formik.handleChange} 
                    value={formik.values.password} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AuthLogin;
