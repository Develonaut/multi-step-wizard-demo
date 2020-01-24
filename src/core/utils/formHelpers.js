import * as yup from "yup";

export function buildFieldGroups(form) {
  const { fields, fieldGroups } = form;
  return fieldGroups.reduce((formFields, key) => {
    const matchingFields = fields.filter(field => field.group === key);
    return [
      ...formFields,
      {
        name: key,
        fields: matchingFields,
        validationSchema: getValidationSchema(matchingFields)
      }
    ];
  }, []);
}

export function getInitialValues(fields) {
  return fields.reduce(
    (values, field) => ({
      ...values,
      [field.name]: field.initialValue
    }),
    {}
  );
}

export function getValidationSchema(fields) {
  const shape = fields.reduce(
    (values, field) => ({
      ...values,
      [field.name]: field.validation
    }),
    {}
  );
  return yup.object().shape(shape);
}

export function convertErrorsToTouched(errors) {
  return Object.keys(errors).reduce(
    (touchedFields, key) => ({
      ...touchedFields,
      [key]: true
    }),
    {}
  );
}
