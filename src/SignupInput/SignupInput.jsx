import React from 'react'

const SignupInput = ({className,labelTitle,TypeInput,InputId,InputName,InputPlaceHolder}) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 pt-4">
        <label className="font-Roboto font-normal text-base text-gray-600" htmlFor={labelTitle}>{labelTitle}</label>
        <input
          className={className}
          type={TypeInput}
          id={InputId}
          name={InputName}
          placeholder={InputPlaceHolder}
        />
      </div>
    </>
  );
}

export default SignupInput
