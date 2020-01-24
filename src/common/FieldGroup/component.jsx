import React from "react";
import { TextField } from "@material-ui/core";

// TODO Field Factory Should Be It's own component
// TODO each type of field should be it's own memo component.
function FieldFactory(props) {
  const { field, meta } = props;
  const { label } = field;
  const { error, touched } = meta;
  const hasError = touched && !!error;
  const errorMessage = hasError ? error : null;
  switch (props.type) {
    default:
      return (
        <TextField
          label={label}
          error={hasError}
          helperText={errorMessage}
          {...field}
        />
      );
  }
}

// Future Improvment: Memoize this component since if multiple field groups are
// used in tandem we should add checks to reduce uneccesary rerenders.
export function FieldGroup({ fields, form }) {
  return (
    <>
      {fields.map(({ name, label }) => {
        return (
          <FieldFactory
            key={name}
            field={{ ...form.getFieldProps(name), label }}
            meta={form.getFieldMeta(name)}
            helpers={form.getFieldHelpers(name)}
          />
        );
      })}
    </>
  );
}
