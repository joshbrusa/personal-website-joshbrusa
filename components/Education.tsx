type EducationProps = {
  school: string;
  degree: string;
  duration: string;
  items: string[];
};

export default function Education({
  school,
  degree,
  duration,
  items,
}: EducationProps) {
  const itemsMap = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <>
      <div className="mt-2 flex justify-between">
        <div className="flex">
          <div className="font-semibold">{school}</div>
          <div>, {degree}</div>
        </div>
        <div>{duration}</div>
      </div>
      <ul className="list-disc list-outside mt-2 ml-6">{itemsMap}</ul>
    </>
  );
}
