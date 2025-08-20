export default function CourseCard({ title, subtitle, bullets = [] }) {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
      <ul className="list-disc list-inside text-sm space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
