//import logo from "../assets/logo/Logo.jpg";

const PopUp = (props) => {
  return (
    <div className="popUp">
      <p
        className="closePopUp"
        onClick={(e) => {
          props.onClickClose();
        }}
      >
        ❌
      </p>
      <div className="sectionPopUp">
        <h4 className="textePopUp">Félicitations pour vos achats</h4>
        <p className="msg">{props.msg}</p>
        {/* <img className="popUpimg" src={logo} /> */}
        <button
          className="closePopUpButton"
          onClick={(e) => {
            props.onClickClose();
          }}
        >
          Retour aux achats
        </button>
      </div>
    </div>
  );
};

export default PopUp;
