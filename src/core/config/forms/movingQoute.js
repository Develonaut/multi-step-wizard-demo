import * as yup from "yup";
import { buildFieldGroups, getInitialValues } from "core/utils/formHelpers";

const movingQouteConfig = {
  name: "movingQoute",
  fieldGroups: ["to", "from", "contact"],
  fields: [
    {
      name: "toStreet",
      label: "Street",
      group: "to",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "toCity",
      label: "City",
      group: "to",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "toState",
      label: "State",
      group: "to",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "toZipCode",
      label: "Zip Code",
      group: "to",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "fromStreet",
      label: "Street",
      group: "from",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "fromCity",
      label: "City",
      group: "from",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "fromState",
      label: "State",
      group: "from",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "fromZipCode",
      label: "Zip Code",
      group: "from",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "name",
      label: "Name",
      group: "contact",
      validation: yup.string().required(),
      initialValue: ""
    },
    {
      name: "email",
      label: "Email",
      group: "contact",
      type: "email",
      validation: yup
        .string()
        .email()
        .required(),
      initialValue: ""
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      group: "contact",
      validation: yup.string().required(),
      initialValue: ""
    }
  ]
};

export const movingQoute = {
  initialValues: getInitialValues(movingQouteConfig.fields),
  fieldGroups: buildFieldGroups(movingQouteConfig)
};
