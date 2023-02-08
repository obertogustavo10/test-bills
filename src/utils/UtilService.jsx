import billingData from "../api/billing.json";
export const getBillingData = () => {
  return new Promise((respOk, respRech) => {
    try {
      respOk(billingData);
    } catch (errGBD) {
      console.log("***ERROR: ", errGBD);
      respRech(errGBD);
    }
  });
};