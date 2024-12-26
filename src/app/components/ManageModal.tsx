type manageCookie = {
  declineFn: () => void;
  allowFn: () => void;
  saveFn: () => void;
}

const ManageCookiesModal = () => {
  return (
    <div class="w-96 flex flex-col justify-center gap-6 bg-white p-6">
      <div class="flex flex-col justify-center gap-1 self-stretch">
        <div class="flex justify-center gap-2 self-stretch">
          <span class="font-semibold text-base text-neutral-900">
            Essentials
          </span>
          <div class="w-9 h-5 flex justify-end items-center bg-gray-100 p-0.5 rounded-full">
            <div class="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <span class="font-normal text-sm text-neutral-600">
          These cookies are essential for the proper functioning of our services
          and cannot be disabled.
        </span>
      </div>
      <div class="flex flex-col justify-center gap-1 self-stretch">
        <div class="flex justify-center gap-2 self-stretch">
          <span class="font-semibold text-base text-neutral-900">
            Analytics
          </span>
          <div class="w-9 h-5 flex justify-end items-center bg-indigo-700 p-0.5 rounded-full">
            <div class="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <span class="font-normal text-sm text-neutral-600">
          These cookies collect information about how you use our services or
          potential errors you encounter. Based on this information we are able
          to improve your experience and react to any issues.
        </span>
      </div>
      <div class="flex flex-col justify-center gap-1 self-stretch">
        <div class="flex justify-center gap-2 self-stretch">
          <span class="font-semibold text-base text-neutral-900">
            Marketing
          </span>
          <div class="w-9 h-5 flex justify-end items-center bg-indigo-700 p-0.5 rounded-full">
            <div class="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        <blockquote class="font-normal text-sm text-neutral-600">
          These cookies allow us to show you advertisements relevant to you
          through our advertising partners.
        </blockquote>
      </div>
      <div class="flex flex-col gap-2 self-stretch">
        <div class="flex items-center gap-2 self-stretch">
          <div class="flex justify-center items-center gap-1.5 grow bg-indigo-700 px-4 py-2.5 rounded">
            <div class="flex justify-center items-center px-0.5">
              <span class="font-medium text-base text-white">Accept all</span>
            </div>
          </div>
          <div class="flex justify-center items-center gap-1.5 grow bg-white px-4 py-2.5 rounded border-[0.5px] border-solid border-neutral-200">
            <div class="flex justify-center items-center px-0.5">
              <span class="font-medium text-base text-neutral-900">Save</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center gap-1 self-stretch bg-red-600 px-3.5 py-2.5 rounded">
          <div class="flex justify-center items-center px-0.5">
            <span class="font-medium text-sm text-white">Decline all</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCookiesModal;
