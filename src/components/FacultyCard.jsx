export default function FacultyCard({ name, subject, exp }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold">
          {name.split(" ").map(n=>n[0]).slice(0,2).join("")}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-600">{subject}</div>
          <div className="text-xs text-gray-500">{exp} years experience</div>
        </div>
      </div>
    </div>
  );
}
