import React, { useState } from "react";
import { FormWizard, WizardStepper } from "common/FormWizard";
import { movingQoute } from "core/config/forms/movingQoute";

export function Qoute() {
  const [step, setStep] = useState(0);
  const [qouteId, setQouteId] = useState(undefined);
  const stepperLabels = ["Moving From?", "Moving To?", "Contanct"];

  function handleNext() {
    setStep(prevStep => prevStep + 1);
  }

  function handleBack() {
    setStep(prevStep => prevStep - 1);
  }

  async function handleSubmit(props) {
    handleNext();
    function sleep(milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    await sleep(1000);
    console.log({
      values: props,
      qouteId: 1234
    });
  }

  return (
    <>
      <WizardStepper activeStep={step} steps={stepperLabels} />
      {!qouteId && (
        <FormWizard
          formGroups={movingQoute.fieldGroups}
          initialValues={movingQoute.initialValues}
          onSubmit={handleSubmit}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {qouteId && <div>qouteId</div>}
    </>
  );
}
