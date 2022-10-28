import React from 'react';


const JobsStatus = () => {
    return (
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/mitra/jobs">New Jobs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page"  href="#">Jobs Status</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/mitra/referral">Referrals</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/mitra/profile">Profile</a>
                </li>
            </ul>
        </div>
    );
};
export default JobsStatus;