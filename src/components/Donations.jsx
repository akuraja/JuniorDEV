import React from 'react';

const Donations = () => {
  const donations = [
    { id: 1, amount: 50 },
    { id: 2, amount: 100 },
    { id: 3, amount: 25 },
  ]; 

  return (
    <div>
      <h2>Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>Amount: {donation.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Donations;
