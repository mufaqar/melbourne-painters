import Image from "next/image";
import { HomePage, Project, Service } from "@/types";
import YoastNextSeo from "@/components/UI/YoastNextSeo";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import SimpleHero from "@/components/UI/SimpleHero";

interface Props {
  projects: Project[];
  services: Service[];
  servicePageData: HomePage;
}
export default function ServicePage(props: Props) {
  const { services, servicePageData } = props;

  return (
    <>
      <YoastNextSeo slug="services" {...servicePageData.yoast_head_json} />

      <SimpleHero />

      <section className="grid max-w-site-full  px-4  md:grid-cols-8 md:mx-auto">
        <div
          style={{ backgroundColor: "#EBEBEB" }}
          className="col-span-2 -mt-10 mb-8  "
        >
          <Fade bottom>
            <div className=" p-8     pb-12 bg-brand-blue ">
              <h1 className="text-white  mt-4  font-semibold text-3xl xl:text-5xl lg:text-4xl">
                OUR <br /> SERVICES
              </h1>
            </div>
          </Fade>
        </div>
        <div className="col-span-6">
          <div className="flex justify-center gap-2 lg:justify-end">
            <Image
              src="/imgs/Painters-Melbourne-Accredited-Painter-512px-300x300.jpg"
              width={150}
              height={300}
              alt=""
            />
            <Image
              src="/imgs/warranty.png"
              width={100}
              style={{ objectFit: "contain" }}
              height={80}
              alt=""
            />
          </div>
          <div
            style={{ backgroundColor: "#FAFAFA" }}
            className="  px-4 lg:px-16 py-12 font-thin post-content"
          >
            <p>
              At Melbourne Painters Group our core value is delivering
              high-quality painting finishes that not only look great to the eye
              but will last many years to come. We believe that hard work,
              attention to detail and using ultra-premium painting products are
              what creates a long-lasting, breath taking painting finish. Below
              you will find the links to some of our recent projects we have
              explained what products and methods our painters have used to
              achieve great results for these projects. Should you have any
              further questions about these projects or want to get a free
              measure and quote feel free to contact us on our contact us page
              and one of our friendly staff will endeavor to assist you with
              your inquiry.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-site-full mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
        {services.map((project) => (
          <div key={project.id} className="overflow-hidden">
            <Fade right>
              <div
                style={{
                  backgroundImage: `linear-gradient(172deg, rgba(0,0,0,1) 0%, rgba(27,27,27,0) 0%, rgba(40,40,55,0.1966911764705882) 0%, rgba(62,65,68,1) 97%) , url(${project.x_featured_media_large})  `,
                }}
                className="  bg-overlay  font-semibold bg-center hover:scale-110 transition-all duration-700 ease-in-out  bg-dicken-streen text-xl text-white  bg-no-repeat bg-cover border flex flex-col items-center gap-8 justify-center py-24"
              >
                <p className="uppercase text-white text-md">
                  {project.title.rendered}
                </p>
                <Link href={`/${project.slug}`}>
                  <button className="px-6 py-3 text-xs hover:bg-brand-blue-dark bg-brand-blue rounded-3xl">
                    VIEW SERVICE
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  const url = process.env.NEXT_WP_API_URL + `/projects`;
  const service_url = process.env.NEXT_WP_API_URL + `/custom-page/718`;
  const services_url = process.env.NEXT_WP_API_URL + `/service`;
  const projects = await fetch(url).then((r) => r.json());
  const services = await fetch(services_url).then((r) => r.json());

  const servicePageData = await fetch(service_url).then((r) => r.json());

  return {
    props: {
      projects,
      services,
      servicePageData,
    },
  };
};
