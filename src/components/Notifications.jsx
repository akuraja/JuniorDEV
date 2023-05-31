import React from 'react';

const Notifications = () => {
  const notifications = ['New adoption event', 'Volunteer meeting']; 

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
