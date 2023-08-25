import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings data from the API
    axios
      .get(config.serverURL + "maestro/dashboard/bookings")
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="card mt-4 ms-4">
      <div className="container mt-5">
        <h1 className="mb-4">All Bookings</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Booking ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.id}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.service}</td>
                <td>{booking.amount}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
