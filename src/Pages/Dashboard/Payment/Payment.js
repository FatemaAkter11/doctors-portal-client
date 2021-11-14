import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appointmentId } = useParams();
    return (
        <div>
            <h2>Please pay For : {appointmentId}</h2>
        </div>
    );
};

export default Payment;