import { Form } from "@/components/UI/forms/Form";
import * as yup from "yup";
import Button from "@/components/UI/Button";
import PopupButton from "./PopupButton";

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

const expections = [
  "ASAP",
  "next few days",
  "next few weeks",
  "next few months",
  "flexible",
];

const resident = ["residential", "commercial", "Industrial"];
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
        <div className="max-w-site-full md:px-32">
          <section className="my-4">
            <h4>WHEN DO YOU EXPECT YOUR PROJECT TO START?*</h4>
            <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
              {expections.map((b) => (
                <PopupButton label={b} />
              ))}
            </div>
          </section>
          <section className="my-4">
            <h4>RESIDENTIAL, COMMERCIAL OR INDUSTRIAL*</h4>
            <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
              {resident.map((b) => (
                <PopupButton label={b} />
              ))}
            </div>
          </section>
          <section className="my-4">
            <h4>WHAT KIND OF PAINTING SERVICE DO YOU REQUIRE?*</h4>
            <div className="grid grid-cols-2  md:grid-cols-4    gap-4">
              {serviceKinf.map((b) => (
                <PopupButton label={b} />
              ))}
            </div>
          </section>

          <Button className="col-span-2 bg-brand-blue border w-full">
            Next
          </Button>
        </div>
      )}
    </Form>
  );
};

export default YourProject;