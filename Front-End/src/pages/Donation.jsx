import Navbar from "../components/Navbar";
import "./Donation.css"

const Donation = () => {
  return (
    <div>
      <Navbar/>
      <div className="donate_main">
        <h1 className="DonationPage_main_text">Support Menna</h1>
        <p className="subline_text">Your support chnages lives. Every money you
         give help us care 
        for orphans and elderly in need.</p>
        <div className="offline_donation_container">
            <div className="bank_account_number">
                <img className="bank_logo"/>
                <p className="bank_Name">Commercial Bank of Ethiopa (CBE)</p>
                <p className="account_number">1000089064868</p>
            </div>
            <div className="bank_account_number">
                <img className="bank_logo"/>
                <p className="bank_Name">Abay Bank</p>
                <p className="account_number">2452110153256813</p>
            </div>
        </div>
        <div className="payChapa_link">
            <a>pay with chapa</a>
        </div>
      </div>
    </div>
  );
}

export default Donation;