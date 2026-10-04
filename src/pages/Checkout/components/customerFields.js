export const FIELDS = [
  {field: "firstName", title: "First Name", placeholder: "eg. Bam", icon: "fa-solid fa-user"}, 
  {field: "lastName", title: "Last Name", placeholder: "eg. Adebayo", icon: "fa-solid fa-user"}, 
  {field: "phoneNumber", title: "Phone Number", placeholder: "eg. (123) 456 - 7890", icon: "fa-solid fa-phone"}, 
]

export const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/\D/g, "").slice(0, 10);

  if (phoneNumber.length < 4) {
    return phoneNumber;
  }

  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
};