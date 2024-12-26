type cookieModal = {
    title: string;
    modalText: string;
    declineFn: () => void;
    allowFn: () => void;
    manageFn: () => void;
}

const defaultTitle = "We use cookies";
const defaultModalText = "We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our cookie policy.";

const Modal = ({title=defaultTitle, modalText=defaultModalText, declineFn, allowFn, manageFn}: cookieModal) => {
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
        <button className="flex justify-center items-center gap-1 bg-red-600 px-3.5 py-2.5 rounded" onClick={declineFn}>
          <div className="flex justify-center items-center px-0.5">
            <span className="font-medium text-sm text-white">Decline all</span>
          </div>
        </button>
        <section className="w-96 flex items-center gap-4">
          <button className="flex justify-center items-center gap-1.5 grow bg-indigo-700 px-4 py-2.5 rounded" onClick={allowFn}>
            <div className="flex justify-center items-center px-0.5">
              <span className="font-medium text-base text-white">
                Allow cookies
              </span>
            </div>
          </button>
          <button className="flex justify-center items-center gap-1.5 grow bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200" onClick={manageFn}>
            <div className="flex justify-center items-center px-0.5">
              <span className="font-medium text-base text-neutral-900">
                Manage cookies
              </span>
            </div>
          </button>
        </section>
      </div>
    </section>
  );
};


export default Modal;