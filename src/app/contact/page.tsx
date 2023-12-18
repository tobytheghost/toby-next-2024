import { ContactForm } from "~/components/ContactForm";
import { H1 } from "~/components/typography";

export default async function ContactPage() {
  return (
    <>
      <section className="container m-auto my-12 max-w-7xl flex-col px-4 before:flex">
        <H1 className="mb-8 pb-2">Contact</H1>
        <h2 className="mb-8 text-center text-xl font-semibold">
          Want to get in touch? Contact me using the form below:
        </h2>
        <ContactForm />
      </section>
    </>
  );
}