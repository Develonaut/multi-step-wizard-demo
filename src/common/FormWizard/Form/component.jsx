import React from "react";
import { Form } from "formik";
import { Card } from "@material-ui/core";

export function WizardForm({ children }) {
  return (
    <Form>
      <Card>{children}</Card>
    </Form>
  );
}
