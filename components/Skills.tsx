type SkillsType = {
  items: string[];
};

export default function Skills({ items }: SkillsType) {
  const itemsMap = items.map((item, index) => <li key={index}>{item}</li>);

  return <ul className="list-disc list-outside mt-2 ml-6">{itemsMap}</ul>;
}
