import FacultyCard from "../components/FacultyCard";

const faculty = [
  { name: "Mr. Ramesh Verma", subject: "Physics", exp: 12 },
  { name: "Ms. Sunita Sharma", subject: "Chemistry", exp: 10 },
  { name: "Mr. Anil Kumar", subject: "Mathematics", exp: 15 },
  { name: "Ms. Rekha Patel", subject: "Biology", exp: 9 },
];

export default function Faculty() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Faculty</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((f, i) => (
          <FacultyCard key={i} name={f.name} subject={f.subject} exp={f.exp} />
        ))}
      </div>
    </div>
  );
}
