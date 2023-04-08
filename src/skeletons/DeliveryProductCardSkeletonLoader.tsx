function DeliveryProductCardSkeletonLoader() {
  return (
    <div className="w-full lg:w-[45%] pb-7 lg:pb-0 animate-pulse pt-16">
      <div className="w-full h-[130px] bg-gray-300 rounded-[5px] sm:h-[250px] md:h-[390px]"></div>
      <div className="mt-6 h-6 bg-gray-300 w-1/2 rounded"></div>
      <div className="mt-4 h-4 bg-gray-300 w-4/5 rounded"></div>
      <div className="mt-4 h-6 bg-gray-300 w-1/3 rounded flex items-center">
        <div className="h-6 bg-gray-300 w-1/2 rounded mr-4"></div>
        <div className="h-6 bg-gray-300 w-1/2 rounded"></div>
      </div>
      <div className="mt-4 h-4 bg-gray-300 w-3/4 rounded"></div>
      <div className="mt-4 h-4 bg-gray-300 w-4/5 rounded"></div>
      <div className="mt-4 h-4 bg-gray-300 w-3/5 rounded"></div>
    </div>
  );
}

export default DeliveryProductCardSkeletonLoader;
