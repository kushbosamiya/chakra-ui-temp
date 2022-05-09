// import React, { useState } from "react";

// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// }

// const __DEV__ = document.domain === "localhost";

// export function PaymentIntergration() {
//   const [name] = useState("Kush");

//   async function displayRazorpay() {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const data = await fetch("http://localhost:1337/razorpay", {
//       method: "POST",
//     }).then((t) => t.json());

//     console.log(data);

//     const options = {
//       key: __DEV__ ? '"rzp_test_b3fImnNQPw3sRP' : "PRODUCTION_KEY",
//       currency: data.currency,
//       amount: data.amount.toString(),
//       order_id: data.id,
//       name: "Shopping Cart Payment",
//       description: "TThank you for Shopping from SwasthyaSetu",
//       // image: 'http://localhost:1337/logo.svg',
//       handler: function (response) {
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name,
//         email: "sdfdsjfh2@ndsfdf.com",
//         phone_number: "9899999999",
//       },
//     };
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }

//   return (
//     <>
//       <a
//         className="App-link"
//         onClick={displayRazorpay}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Donate $5
//       </a>
//     </>
//   );
// }

export const Checkout = () => {
  const loadExternalScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
    });
  };

  const showRazorpay = async () => {
    const res = await loadExternalScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      setError("Something went wrong! Payment options are not loaded.");
      return;
    }
    
    var options = {
      key: process.env.REACT_APP_CLIENT_ID,
      amount: data.amount,
      currency: data.currency,
      name: "U&I Store",
      description: "Test Transaction",
      image:
        "https://res.cloudinary.com/u-and-i/image/upload/v1626882606/logos/ktine8eik7bk3ckmdfhz.png",
      order_id: data.id,
      handler: function (response) {
        paymentSuccessful();
      },
      prefill: {
        name: userDetails.firstname + userDetails.lastname,
        email: userDetails.email,
        contact: `91${selectedAddress.phoneNumber}`,
        method: "netbanking",
      },
      notes: {
        address: `${selectedAddress?.name}, ${selectedAddress?.streetAddress}, ${selectedAddress?.city}, ${selectedAddress?.zipCode}`,
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      console.log(response.error);
      paymentFailure();
    });
    paymentObject.open();
  };

  return (
    <>
      <button
        disabled={selectedAddress ? false : true}
        onClick={showRazorpay}
        className={`btn btn-solid-primary ${
          selectedAddress ? "" : "btn-disabled"
        }`}
      >
        Place Order
      </button>
      {error && <ErrorMessage message={error} />}
      {!selectedAddress && (
        <ErrorMessage message="Select address to check out!" />
      )}
    </>
  );
};
