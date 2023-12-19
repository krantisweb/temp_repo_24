import React from 'react' 
import page_not_found from "../assets/images/page_not_found.jpg"
  const PageNotFound = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <img src={page_not_found} alt="" className="object-contain" />
                <h1 className="text-3xl">404 ERROR</h1>
                <h2 className="mt-5">The requested page is not found</h2>
            </div>
        </div>
    );
};
export default PageNotFound;