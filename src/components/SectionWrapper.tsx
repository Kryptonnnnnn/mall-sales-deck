const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;