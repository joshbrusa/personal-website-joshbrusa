type SectionProps = {
  role: string;
  company: string;
  duration: string;
  items: string[];
};

export default function Section({
  role,
  company,
  duration,
  items,
}: SectionProps) {
  const itemsMap = items.map((item, index) => <li key={index}>{item}</li>);
  return (
    <>
      <div className="mt-2">
        <div className="font-bold">{role}</div>
        <div className="">{company}</div>
        <div className="">{duration}</div>
        <ul className="list-disc list-outside mt-2 ml-6">{itemsMap}</ul>
      </div>
    </>
  );
}
