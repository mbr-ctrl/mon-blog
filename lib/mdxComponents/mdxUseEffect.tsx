import { Heading, Flex } from "@chakra-ui/react";

type StepProps = {
  number: number;
  title: string;
};

const Step = ({ number, title }: StepProps) => {
  for (let i = 0; i < title.length; i++) {
    if (title[i] == "`") {
      title = title.replace("`", "");
    }
  }

  return (
    <div className="flex gap-2 items-center justify-start">
      <div className="flex justify-center items-center text-xl">{number}</div>
      <h2 className="text-md"> {title} </h2>
    </div>
  );
};

export default Step;
