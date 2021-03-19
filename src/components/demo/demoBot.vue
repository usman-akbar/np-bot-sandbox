<template>
  <div class="container-fluid">
    <div class="text-center">
      <h4 class="font-size-lg font-weight-bold text-muted mt-5 demo">Demo Page</h4>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-md-4">
        <b-form class="form">
          <label
            for="consumer_name"
            class="text-muted font-weight-bold mt-3 ml-2"
            >Consumer Name:</label
          >

          <b-form-input
            id="consumer_name"
            v-model="form.consumer_name"
            type="text"
            placeholder="Enter Consumer Name"
            required
          ></b-form-input>
          <label for="amount" class="text-muted font-weight-bold mt-3 ml-2"
            >Amount:</label
          >

          <b-form-input
            id="amount"
            v-model="form.amount"
            type="number"
            placeholder="Enter Amount"
            required
          ></b-form-input>

          <label
            for="invoice_number"
            class="text-muted font-weight-bold mt-3 ml-2"
            >Invoice Number:</label
          >

          <b-form-input
            id="invoice_number"
            v-model="form.invoice_number"
            type="number"
            placeholder="Enter Invoice Number"
            required
          ></b-form-input>

          <label
            for="reference_number"
            class="text-muted font-weight-bold mt-3 ml-2"
            >Reference Number:</label
          >

          <b-form-input
            id="reference_number"
            v-model="form.reference_number"
            type="number"
            placeholder="Enter Reference Number"
            required
          ></b-form-input>
          <button
            type="button"
            class="btn btn-info btn-block mt-4"
            @click="submitForm"
          >
            Submit
          </button>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demoBot",
  data() {
    return {
      form: {
        consumer_name: "",
        amount: "",
        invoice_number: "",
        reference_number: "",
      },
    };
  },
  methods: {
    validateForm() {
      if (this.form.consumer_name == "") {
        this.$swal("Please Enter Consumer Name", "", "error");
        return false;
      }
      if (this.form.amount == "") {
        this.$swal("Please Enter Amount", "", "error");
        return false;
      }
      if (this.form.invoice_number == "") {
        this.$swal("Please Enter Invoice Number", "", "error");
        return false;
      }
      if (this.form.reference_number == "") {
        this.$swal("Please Enter Reference Number", "", "error");
        return false;
      }
      return true;
    },
    submitForm() {
      if (this.validateForm()) {
        let dataToPost = this.form;
        console.log(dataToPost);
        this.$swal("Successfully Submitted!", "", "success");
        this.resetForm();
      }
    },
    resetForm() {
      this.form.consumer_name = "";
      this.form.amount = "";
      this.form.invoice_number = "";
      this.form.reference_number = "";
    },
  },
};
</script>
