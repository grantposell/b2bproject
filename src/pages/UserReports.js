import React from 'react';
import { IonButton } from '@ionic/react';


const UserReports = () => {
    return (
        <div>
            <div style={{ float: 'left', height: 200}}>
                <select name="cars" id="cars" style={{ height: 30}}>
                    <option value="James Dean">James Dean</option>
                    <option value="Marion Cotillard">Marion Cotillard</option>
                    <option value="Ricky Martin">Ricky Martin</option>
                    <option value="Willie Nelson">Willie Nelson</option>
                    <option value="Chuck Norris">Chuck Norris</option>
                </select>
                <button type="button" style={{ height: 30, marginLeft: 10}}>Generate Report</button>
            </div>
        </div>
    );
};
export default UserReports;