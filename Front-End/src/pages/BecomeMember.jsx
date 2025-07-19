import "./BecomeMember.css"
import Navbar from "../components/Navbar";

const BecomeMember = () => {
  return (
    <div className="meber_ship_main">
    <Navbar/>
      <h1 className="joinus_text_1">Become Member of Menna</h1>
      <p className="joinus_text_2">join us on social media or send us your contact information below, We remind you oftenly
       </p>
       <div className="social_media_accounts">
        <p>O</p>
        <p>O</p>
        <p>O</p>
        <p>O</p>
        <p>O</p>
        <p>O</p>
       </div>
       <form>
            <input className="input_feild" type="text"/>
            <input className="input_feild" type="text"/>
            <input className="input_feild" type="text"/>
            <input className="input_feild" type="text"/>
            <input className="input_feild" type="text"/>
            <input className="input_feild" type="text"/>
            <input className="input_feild" type="text"/>
            <button>send</button>
       </form>
    </div>
  );
}

export default BecomeMember;