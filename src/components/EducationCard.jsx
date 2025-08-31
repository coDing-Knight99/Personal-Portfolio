import { GraduationCap } from "lucide-react";

export default function EducationCard({ degree, school, year}) {
  return (
    <div className="m-10 w-[50%] relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl text-white shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">{school}</h2>
            <p className="text-gray-300 text-sm">{degree}</p>
          </div>
        </div>

        {/* Year */}
        <span className="inline-block text-sm font-medium text-blue-400 mb-3">
          {year}
        </span>

      </div>
    </div>
  );
}
