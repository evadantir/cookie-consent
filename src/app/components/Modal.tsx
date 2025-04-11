import { BUTTON_TEXT as buttonTxt, MODAL_TEXT as modalTxt } from "../constant/constant";
import { Button } from "./Button";

type cookieModal = {
    title: string;
    modalText: string;
    declineFn: () => void;
    allowFn: () => void;
    manageFn: () => void;
}

const Modal = ({title=modalTxt.TITLE, modalText=modalTxt.DEFAULT_MODAL_TEXT, declineFn, allowFn, manageFn}: cookieModal) => {
  return (
    <section className="flex flex-col justify-center gap-6 self-stretch bg-white px-28 py-6 border-t border-solid border-neutral-200">
      <div className="flex flex-col justify-center gap-1 self-stretch">
        <span className="font-semibold text-base text-neutral-900">
          {title}
        </span>
        <blockquote className="font-normal text-sm">
          {modalText}
        </blockquote>
      </div>
      <div className="flex justify-between items-center self-stretch">
        <Button 
          intent="tertiary" 
          textContent={buttonTxt.DECLINE_ALL} 
          onClick={declineFn}
          aria-label={buttonTxt.DECLINE_ALL}
        />
        <section className="w-96 flex items-center gap-4">
          <Button 
            intent="primary" 
            textContent={buttonTxt.ACCEPT_ALL} 
            onClick={allowFn}
          />
          <Button 
            intent="secondary" 
            textContent={buttonTxt.MANAGE_COOKIES} 
            onClick={manageFn}
          />
        </section>
      </div>
    </section>
  );
};

export default Modal;