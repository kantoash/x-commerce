"use client";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
  <div className="max-w-7xl mx-auto p-6 md:px-10  ">
      {children}
    </div>
  );
};

export default Container;