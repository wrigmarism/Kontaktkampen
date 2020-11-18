import React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/styles.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h5><b>Användarvillkor</b></h5>
          <p>Vi behöver spara och behandla personuppgifter om dig, så som namn och e-postadress. Syftet med en
sådan behandling är för att efter avslutad tävling kunna kontakta utsedda vinnare.</p>

<p>
Vi har fått dina uppgifter från det formulär du registrerat dig i. Vi tillämpar vid var tid gällande
integritetslagstiftning vid all behandling av personuppgifter. Den rättsliga grunden för att
behandla dina personuppgifter är rättslig förpliktelse. Dina uppgifter kommer att sparas tills det att 
tävlingen är avslutad och vinnarna har utsetts och blivit kontaktade.</p>
<p>
De personuppgifter vi behandlar om dig delas med Kontaktdagarna. Vi kan även komma att dela
dina personuppgifter med en tredje part, förutsatt att vi är skyldiga att göra så enligt lag.
Däremot kommer vi aldrig att överföra dina uppgifter till ett land utanför EU.</p>

<p>Personuppgiftsansvarig är Uppsalaekonomerna, Kyrkogårdsgatan 2B, 753 12 Uppsala. Du har rätt att kontakta 
oss om du vill ha ut information om de uppgifter vi har om dig, för att begära rättelse, överföring eller för att
begära att vi begränsar behandlingen, för att göra invändningar eller begära radering av
dina uppgifter. Detta gör du enklast genom att kontakta Kontaktdagarnas <a href="mailto:christoffer.wrigmar@kontaktdagarna.se">IT-ansvarige</a>. </p>

<p>Om du har klagomål på vår behandling av dina personuppgifter har du rätt att inge klagomål till 
  tillsynsmyndigheten Datainspektionen.</p>
        <button onClick={this.props.closePopup}>Stäng fönster</button>
        </div>
      </div>
    );
  }
}

export default Popup;