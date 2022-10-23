type ExperienceProps = {
  role: string;
  company: string;
  duration: string;
  items: string[];
};

export default function Experience({
  role,
  company,
  duration,
  items,
}: ExperienceProps) {
  const itemsMap = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <>
      <div className="mt-2 flex justify-between">
        <div className="flex">
          <div className="font-semibold">{role}</div>
          <div>, {company}</div>
        </div>
        <div>{duration}</div>
      </div>
      <ul className="list-disc list-outside mt-2 ml-6">{itemsMap}</ul>
    </>
  );
}
