import React, { useState } from "react";

const PhoneNumberInput = () => {
  const [phoneInput, setPhoneInput] = useState("");

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneInput(formattedPhoneNumber);
  };
  return (
    <input
      placeholder="Phone"
      onChange={(e) => handleInput(e)}
      value={phoneInput}
      name="phoneNumber"
    />
  );
};

const formatPhoneNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export default PhoneNumberInput;
