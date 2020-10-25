import React from 'react';
import ExploreContainer from '../components/ExploreContainer';

const SignUp = () => {
    return (
        <form>
            <label>
                Business Name:
                <input type="text" name="businessName" />
            </label>
            <label>
                BusinessFiling:
                <select>
                    <option value="soleProprietorship">Sole Proprietorship</option>
                    <option value="partnership">Partnership</option>
                    <option selected value="sCorporation">S-Corporation</option>
                    <option value="cCorporation">C-Corporation</option>
                    <option value="llc">Limited Liability Company</option>
                </select>
            </label>
            <label>
                Business EIN:
                <input type="text" name="businessEIN" />
            </label>
            <label>
                Website URL:
                <input type="text" name="websiteURL" />
            </label>
            <label>
                Employee Amount:
                <select>
                    <option value="1-25">1-25</option>
                </select>
                <select>
                    <option value="26-50">26-50</option>
                </select>
                <select>
                    <option value="51-75">51-75</option>
                </select>
                <select>
                    <option value="76-100">76-100</option>
                </select>
                <select>
                    <option value="101-200">101-200</option>
                </select>
                <select>
                    <option value="201-300">201-300</option>
                </select>
                <select>
                    <option value="301-500">301-500</option>
                </select>
                <select>
                    <option value="501-750">501-750</option>
                </select>
                <select>
                    <option value="751-1000">751-1000</option>
                </select>
                <select>
                    <option value="1001-1500">1001-1500</option>
                </select>
                <select>
                    <option value="1500+">1500+</option>
                </select>
            </label>
            <label>
                Industry:
                <select>
                    <option value="Agriculture">Agriculture</option>
                </select>
                <select>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <select>
                    <option value="Food">Food</option>
                </select>
                <select>
                    <option value="Hospitality">Hospitality</option>
                </select>
            </label>
            <label>
                Company Bio:
                <input type="textarea" name="companyBio" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};
export default SignUp;