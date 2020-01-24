import React from "react";
import { CardContent, Grid } from "@material-ui/core";
import { FieldGroup } from "common";

export function FormStep({ fields, form }) {
  return (
    <CardContent>
      <Grid style={{ width: 600 }} container direction="column">
        <FieldGroup fields={fields} form={form} />
      </Grid>
    </CardContent>
  );
}
