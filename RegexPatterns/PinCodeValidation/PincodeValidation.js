function validatePinCode(pinCode) {
    const pinCodePattern = /^[0-9]{3}\s?[0-9]{3}$/;

    if (pinCodePattern.test(pinCode)) {
        console.log("Valid PIN code");
    } else {
        console.log("Invalid PIN code");
    }
}

// Example usage
validatePinCode("400088");  
validatePinCode("012345");  
validatePinCode("400088@"); 
validatePinCode("400088 "); 
validatePinCode("400 088");