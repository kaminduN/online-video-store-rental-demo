import React from 'react'
import { connect } from 'react-redux';



function BookingPage(props){

    return(
        <div>
            <div className="row" >
                <div className="col-lg-12">
                    <div className="page-header">
                        <h2>Booking Administrator</h2>
                    </div>

                </div>
            </div>
        </div>

    );
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}
const connectedBookingPage = connect(mapStateToProps)(BookingPage);
export { connectedBookingPage as BookingPage };