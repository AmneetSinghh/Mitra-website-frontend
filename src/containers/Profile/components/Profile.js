import React from 'react';


const Profile = () => {
    return (
        <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" href="/mitra/jobs">New Jobs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/mitra/jobsStatus">Jobs Status</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="/mitra/referral">Referrals</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Profile</a>
            </li>
        </ul>
    </div>
    );
};
export default Profile;