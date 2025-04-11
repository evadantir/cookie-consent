import { useState } from "react";
import { Button } from "./Button";
import { ToggleSwitch } from "./Toogle";

interface CookiesPopUpProps {
  onAcceptAll: () => void;
  onDeclineAll: () => void;
  onSave: () => void;
}

const CookiesPopUp = ({ onAcceptAll, onDeclineAll, onSave }: CookiesPopUpProps) => {
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(true);

  return (
    <div className="popup-overlay" id="popup-overlay">
      <div className="popup" id="popup">
        <section className="popup__content">
          <div className="popup__content__cookie">
            <div className="popup__content__cookie__header">
              <h6>Essentials</h6>
              <ToggleSwitch 
                checked={true} 
                disabled={true} 
                aria-label="Essentials cookies"
                size="md"
              />
            </div>
            <p>
              These cookies are essential for the proper functioning of our
              services and cannot be disabled.
            </p>
          </div>
          <div className="popup__content__cookie">
            <div className="popup__content__cookie__header">
              <h6>Analytics</h6>
              <ToggleSwitch 
                checked={analyticsConsent} 
                onCheckedChange={setAnalyticsConsent}
                aria-label="Analytics cookies"
                size="md"
              />
            </div>
            <p>
              These cookies collect information about how you use our services
              or potential errors you encounter. Based on this information we
              are able to improve your experience and react to any issues.
            </p>
          </div>
          <div className="popup__content__cookie">
            <section className="popup__content__cookie__header">
              <h6>Marketing</h6>
              <ToggleSwitch 
                checked={marketingConsent} 
                onCheckedChange={setMarketingConsent}
                aria-label="Marketing cookies"
                size="md"
              />
            </section>
            <p>
              These cookies allow us to show you advertisements relevant to you
              through our advertising partners.
            </p>
          </div>
          <div className="popup__content__actions">
            <section className="popup__content__actions__allow">
              <div className="popup__content__actions__btn__wrapper">
                <Button
                  intent="primary"
                  textContent="Accept all"
                  onClick={onAcceptAll}
                  id="popup-accept-all-cookies"
                />
              </div>
              <div className="popup__content__actions__btn__wrapper">
                <Button
                  intent="secondary"
                  textContent="Save"
                  onClick={onSave}
                  id="save-cookies"
                />
              </div>
            </section>
            <Button
              intent="tertiary"
              textContent="Decline all"
              onClick={onDeclineAll}
              id="popup-reject-all-cookies"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiesPopUp;