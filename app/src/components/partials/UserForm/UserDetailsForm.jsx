import React from 'react';

import style from './styles/UserForm.module.scss';

const UserDetailsForm = () => {
    return (
        <form className={style.formContainer}>
            <labe>First Name:</labe>
            <input name="firstName" />
            <label>Last Name:</label>
            <input name="lastName" />
            <label>Address:</label>
            <input name="Address" placeholder="Street House number Postal Code"></input>
            <label>Country:</label>
            <select>
                <option>Germany</option>
                <option>Austria</option>
                <option>Switzerland</option>
            </select>
            <button className={style.submitButton}>Submit</button>
        </form>
    )
}

export default UserDetailsForm;
