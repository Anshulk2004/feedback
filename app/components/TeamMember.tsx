export default function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-center dark:text-white">{name}</h3>
        <p className="text-center text-gray-600 dark:text-gray-300">{role}</p>
      </div>
    )
  }