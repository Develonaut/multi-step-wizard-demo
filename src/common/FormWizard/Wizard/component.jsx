import React, { useState } from "react";
import { Formik } from "formik";
import { convertErrorsToTouched } from "core/utils/formHelpers";
import { FieldGroup } from "common";
import { Button, CardContent, CardActions, Grid } from "@material-ui/core";
import { WizardForm } from "common/FormWizard";

export function FormWizard({
  initialValues = {},
  formGroups = [],
  onSubmit,
  onNext,
  onBack
}) {
  const [step, setStep] = useState(0);
  const fields = formGroups[step].fields;
  const validationSchema = formGroups[step].validationSchema;

  async function validate(form) {
    const errors = await form.validateForm();
    if (Object.keys(errors).length) {
      const touched = convertErrorsToTouched(errors);
      form.setErrors(errors);
      form.setTouched(touched);
      return false;
    }
    return true;
  }

  function handleBack() {
    onBack();
    setStep(prevStep => prevStep - 1);
  }

  async function handleNext(form) {
    const isValid = await validate(form);
    if (!isValid) return;
    onNext();
    setStep(prevStep => prevStep + 1);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onNext={onNext}
      onBack={onBack}
    >
      {form => {
        return (
          <Grid container direction="column" alignItems="center">
            <WizardForm>
              <CardContent>
                <Grid style={{ width: 600 }} container direction="column">
                  {fields.length && <FieldGroup fields={fields} form={form} />}
                </Grid>
              </CardContent>
              <CardActions>
                <Button disabled={step === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    step === formGroups.length - 1
                      ? form.submitForm
                      : () => handleNext(form)
                  }
                >
                  {step === formGroups.length - 1 ? "Submit" : "Next"}
                </Button>
              </CardActions>
            </WizardForm>
          </Grid>
        );
      }}
    </Formik>
  );
}
