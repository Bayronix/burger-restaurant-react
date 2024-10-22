import { useFormik } from "formik";
import style from './authRegister.module.css';

const AuthRegister = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={style.container}>
            <p className={style.p}>Register</p>
            <form className={style.form} onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                    id="repeatPassword"
                    name="repeatPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.repeatPassword}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AuthRegister;
