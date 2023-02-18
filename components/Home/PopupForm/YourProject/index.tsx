import { Form } from "@/components/UI/forms/Form";
import * as yup from "yup";

import Expectactions from "./Expectactions";
import Resident from "./Resident";

import ServiceType from "./ServiceType";

type ProjectInfo = {
  time_to_start:
    | "ASAP"
    | "next few days"
    | "next few weeks"
    | "next few months"
    | "flexible";
  type: "residential" | "commercial" | "Industrial";
  service: string[];
};

type FormValues = {
  title: string;
  type: any;
  address: {
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
};

const projetSchema = yup.object().shape({
  type: yup.string().required("Type Is Required"),
  time_to_start: yup.string().required("Time is Required"),
  service: yup.array().required("Please select service"),
});

const serviceKinf = [
  "Exterior",
  "Interior",
  "Roof Painting",
  "Render",
  "Graffiti Removal",
  "Decking",
  "Wallpaper",
  "Industrial Coating",
  "Special Finishes",
];
export const YourProject: React.FC<any> = ({
  onSubmit,
  setCurrentForm,
  defaultValues,
  isLoading,
}) => {
  const submitForm = (e) => {};
  return (
    <Form<ProjectInfo>
      onSubmit={submitForm}
      className="  h-full   gap-5"
      //@ts-ignore
      validationSchema={projetSchema}
      useFormProps={{
        shouldUnregister: true,
        defaultValues,
      }}
    >
      {({ register, formState: {} }) => (
        <div className="max-w-site-full text-form-btn  px-12">
          <Expectactions />
          <Resident />
          <ServiceType />
        </div>
      )}
    </Form>
  );
};

export default YourProject;
