export default function Testimonial({ name, company, quote }: { name: string; company: string; quote: string }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{quote}"</p>
        <p className="font-semibold dark:text-white">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
      </div>
    )
  }