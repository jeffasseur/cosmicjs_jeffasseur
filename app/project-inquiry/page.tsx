import ProjectInquiryForm from "@/components/ProjectInquiryForm";

const ProjectInquiryPage: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-2">
        <h1 className="mb-4">Project Inquiry</h1>
        <p className="mb-8">Fill in the form</p>
        <ProjectInquiryForm />
      </div>
    </section>
  );
};

export default ProjectInquiryPage;
