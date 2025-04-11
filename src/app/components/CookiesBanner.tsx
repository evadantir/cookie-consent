import { useState } from "react";
import { Button } from "./Button";
import Modal from "./Modal";
import { BUTTON_TEXT as buttonTxt, MODAL_TEXT as modalTxt } from "../constant/constant";

const CookiesBanner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDeclineAll = () => {
    // Logic to decline all cookies
    console.log("Declining all cookies");
    // You would typically set a cookie or local storage value here
  };

  const handleAcceptAll = () => {
    // Logic to accept all cookies
    console.log("Accepting all cookies");
    // You would typically set a cookie or local storage value here
  };

  const handleManageCookies = () => {
    // Show the modal for managing cookies
    setShowModal(true);
  };

  return (
    <>
      <div className="cookie-consent-banner" id="cookie-consent-banner">
        <div className="cookie-consent-banner__content">
          <h6>We use cookies</h6>
          <p>
            We use cookies to enhance your browsing experience and improve our
            website&apos;s performance. By continuing to use this site, you consent to
            the use of cookies. To learn more about how we use cookies and your
            options, please read our
            <a href="https://greatfrontend.com">cookie policy</a>.
          </p>
        </div>
        <div className="cookie-consent-banner__actions">
          <div className="cookie-consent-banner__actions__decline">
            <Button
              intent="tertiary"
              textContent={buttonTxt.DECLINE_ALL}
              onClick={handleDeclineAll}
              id="reject-all-cookies"
            />
          </div>
          <div className="cookie-consent-banner__actions__allow">
            <Button
              intent="primary"
              textContent={buttonTxt.ALLOW_COOKIES}
              onClick={handleAcceptAll}
              id="accept-all-cookies"
            />
            <Button
              intent="secondary"
              textContent={buttonTxt.MANAGE_COOKIES}
              onClick={handleManageCookies}
              id="manage-cookies"
            />
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          title={modalTxt.TITLE}
          modalText={modalTxt.DEFAULT_MODAL_TEXT}
          declineFn={handleDeclineAll}
          allowFn={handleAcceptAll}
          manageFn={handleManageCookies}
        />
      )}
    </>
  );
};

export default CookiesBanner;
